const { numericSupply, sendNumeric, sendError } = require('../../../lib/marco-supply')

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('access-control-allow-origin', '*')
    res.setHeader('access-control-allow-methods', 'GET, OPTIONS')
    res.statusCode = 204
    res.end()
    return
  }
  if (req.method && req.method !== 'GET') {
    res.statusCode = 405
    res.end()
    return
  }
  try {
    const { jsonNumber } = await numericSupply('circulating')
    sendNumeric(res, jsonNumber)
  } catch (err) {
    sendError(res, err)
  }
}
