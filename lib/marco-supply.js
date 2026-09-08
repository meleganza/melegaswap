/**
 * MARCO (MELEGA) on-chain supply for CoinMarketCap Annex C.
 *
 * Total = ERC-20 totalSupply minus verifiable burn balances
 * (the token does not reduce totalSupply on transfer-to-dead).
 *
 * Circulating = Total minus ONLY:
 *   - team/developer-controlled unlocked wallets
 *   - current PinkLock remaining amounts whose lock owner is a team wallet
 *     (privately allocated / future farm-reward distribution)
 *
 * Public AMM pair balances and user-staked MasterChef/sous-chef deposits
 * are circulating. PinkLock is not blanket-excluded.
 */

const MARCO = '0x963556de0eb8138E97A85F0A86eE0acD159D210b'
const PINKLOCK = '0x407993575c91ce7643a4d4cCACc9A98c36eE1BBE'
const DEAD = [
  '0x000000000000000000000000000000000000dEaD',
  '0x0000000000000000000000000000000000000000',
]
const TEAM = [
  // BscScan "MELEGA: Deployer"; owner of every current MARCO PinkLock record
  '0xB6eEb3ab9695979F5b2Ef6Df4112e63212E33EE0',
]

const SELECTORS = {
  totalSupply: '0x18160ddd',
  balanceOf: '0x70a08231',
  totalLockCountForToken: '0xe3676f88',
  getLocksForToken: '0x332f26d7',
}

const DEFAULT_RPCS = [
  process.env.BSC_RPC_URL,
  process.env.REACT_APP_NODE_1,
  'https://bsc-dataseed.binance.org',
  'https://bsc-dataseed1.defibit.io',
  'https://bsc.publicnode.com',
].filter(Boolean)

const CACHE_MS = 60 * 1000
let cache = null

function padAddr(addr) {
  return addr.toLowerCase().replace(/^0x/, '').padStart(64, '0')
}

function padUint(n) {
  return BigInt(n).toString(16).padStart(64, '0')
}

function word(hex, i) {
  const h = hex.startsWith('0x') ? hex.slice(2) : hex
  return h.slice(i * 64, i * 64 + 64)
}

function wordCount(hex) {
  const h = hex.startsWith('0x') ? hex.slice(2) : hex
  return Math.floor(h.length / 64)
}

function asAddr(w) {
  return `0x${w.slice(24).toLowerCase()}`
}

function asUint(w) {
  return BigInt(`0x${w || '0'}`)
}

function formatUnits(wei, decimals = 18) {
  const neg = wei < 0n
  const v = neg ? -wei : wei
  const s = v.toString().padStart(decimals + 1, '0')
  const whole = s.slice(0, -decimals)
  const frac = s.slice(-decimals).replace(/0+$/, '')
  const out = frac ? `${whole}.${frac}` : whole
  return neg ? `-${out}` : out
}

function toJsonNumber(wei) {
  // Exact decimal text, valid as a JSON number (no quotes / no scientific notation).
  return formatUnits(wei)
}

function isTeam(addr) {
  const a = addr.toLowerCase()
  return TEAM.some((t) => t.toLowerCase() === a)
}

async function rpcBatch(calls, rpcs = DEFAULT_RPCS) {
  const body = JSON.stringify(
    calls.map((c, i) => ({ jsonrpc: '2.0', id: i + 1, method: c.method, params: c.params })),
  )
  let lastErr
  for (const url of rpcs) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body,
      })
      if (!res.ok) {
        lastErr = new Error(`RPC ${url} HTTP ${res.status}`)
        continue
      }
      const json = await res.json()
      const rows = Array.isArray(json) ? json : [json]
      const byId = new Map(rows.map((r) => [r.id, r]))
      const out = []
      for (let i = 0; i < calls.length; i += 1) {
        const row = byId.get(i + 1)
        if (!row || row.error || row.result === undefined || row.result === null) {
          throw new Error(`RPC item ${i} failed: ${JSON.stringify(row && row.error)}`)
        }
        out.push(row.result)
      }
      return out
    } catch (err) {
      lastErr = err
    }
  }
  throw lastErr || new Error('All BSC RPCs failed')
}

function ethCall(to, data) {
  return { method: 'eth_call', params: [{ to, data }, 'latest'] }
}

function decodePinkLocks(hex, token) {
  const tokenLc = token.toLowerCase()
  const n = wordCount(hex)
  const seen = new Set()
  const locks = []
  for (let i = 0; i < n - 9; i += 1) {
    const tok = asAddr(word(hex, i + 1))
    const owner = asAddr(word(hex, i + 2))
    const amount = asUint(word(hex, i + 3))
    const tgeDate = asUint(word(hex, i + 5))
    const unlockedAmount = asUint(word(hex, i + 9))
    if (tok !== tokenLc) continue
    if (amount < 10n ** 18n) continue
    if (tgeDate < 1_000_000_000n || tgeDate > 4_000_000_000n) continue
    if (unlockedAmount > amount) continue
    const id = asUint(word(hex, i)).toString()
    if (seen.has(id)) continue
    seen.add(id)
    locks.push({
      id,
      token: tok,
      owner,
      amount,
      unlockedAmount,
      remaining: amount - unlockedAmount,
      tgeDate: Number(tgeDate),
      tgeBps: Number(asUint(word(hex, i + 6))),
      cycle: Number(asUint(word(hex, i + 7))),
      cycleBps: Number(asUint(word(hex, i + 8))),
    })
  }
  return locks
}

async function fetchSupplySnapshot() {
  const now = Date.now()
  if (cache && now - cache.at < CACHE_MS) return cache.data

  const teamCalls = TEAM.map((a) => ethCall(MARCO, SELECTORS.balanceOf + padAddr(a)))
  const burnCalls = DEAD.map((a) => ethCall(MARCO, SELECTORS.balanceOf + padAddr(a)))
  const results = await rpcBatch([
    ethCall(MARCO, SELECTORS.totalSupply),
    ...burnCalls,
    ...teamCalls,
    ethCall(PINKLOCK, SELECTORS.totalLockCountForToken + padAddr(MARCO)),
  ])

  const rawTotal = BigInt(results[0])
  const burns = DEAD.map((address, i) => ({
    address,
    balance: BigInt(results[1 + i]),
  }))
  const burned = burns.reduce((s, b) => s + b.balance, 0n)
  const teamWallets = TEAM.map((address, i) => ({
    address,
    balance: BigInt(results[1 + DEAD.length + i]),
  }))
  const lockCount = Number(BigInt(results[1 + DEAD.length + TEAM.length]))

  let locks = []
  if (lockCount > 0) {
    const [lockHex] = await rpcBatch([
      ethCall(
        PINKLOCK,
        SELECTORS.getLocksForToken + padAddr(MARCO) + padUint(0) + padUint(lockCount + 8),
      ),
    ])
    locks = decodePinkLocks(lockHex, MARCO)
  }

  const teamLocks = locks.filter((l) => isTeam(l.owner))
  const teamLocked = teamLocks.reduce((s, l) => s + l.remaining, 0n)
  const teamUnlocked = teamWallets.reduce((s, w) => s + w.balance, 0n)

  const total = rawTotal - burned
  const circulating = total - teamLocked - teamUnlocked
  if (circulating < 0n) {
    throw new Error('Circulating supply underflow')
  }

  const data = {
    rawTotal,
    burned,
    total,
    teamLocked,
    teamUnlocked,
    circulating,
    burns,
    teamWallets,
    locks,
    teamLocks,
    lockCount,
  }
  cache = { at: now, data }
  return data
}

async function numericSupply(kind) {
  const snap = await fetchSupplySnapshot()
  const wei = kind === 'circulating' ? snap.circulating : snap.total
  return { wei, formatted: formatUnits(wei), jsonNumber: toJsonNumber(wei), snap }
}

function sendNumeric(res, value) {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('access-control-allow-origin', '*')
  res.setHeader('cache-control', 'public, s-maxage=60, stale-while-revalidate=300')
  res.statusCode = 200
  // value is already a JSON-number decimal string from formatUnits()
  res.end(String(value))
}

function sendError(res, err) {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('access-control-allow-origin', '*')
  res.setHeader('cache-control', 'no-store')
  res.statusCode = 503
  res.end(JSON.stringify({ error: 'supply_unavailable' }))
  console.error('[marco-supply]', err)
}

module.exports = {
  MARCO,
  PINKLOCK,
  DEAD,
  TEAM,
  formatUnits,
  fetchSupplySnapshot,
  numericSupply,
  sendNumeric,
  sendError,
}
