/* Local check: live BSC RPC → numeric total / circulating. */
const { numericSupply, formatUnits, fetchSupplySnapshot } = require('../lib/marco-supply')

async function main() {
  const snap = await fetchSupplySnapshot()
  const total = await numericSupply('total')
  const circ = await numericSupply('circulating')
  console.log(
    JSON.stringify(
      {
        rawTotal: formatUnits(snap.rawTotal),
        burned: formatUnits(snap.burned),
        total: total.formatted,
        totalJson: total.jsonNumber,
        teamLocked: formatUnits(snap.teamLocked),
        teamUnlocked: formatUnits(snap.teamUnlocked),
        circulating: circ.formatted,
        circulatingJson: circ.jsonNumber,
        lockCount: snap.lockCount,
        teamLocks: snap.teamLocks.map((l) => ({
          id: l.id,
          owner: l.owner,
          remaining: formatUnits(l.remaining),
          unlocked: formatUnits(l.unlockedAmount),
          tgeDate: l.tgeDate,
        })),
      },
      null,
      2,
    ),
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
