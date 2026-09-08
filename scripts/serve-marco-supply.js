/* Local-only server for endpoint verification. Not used in production. */
const http = require('http')
const total = require('../api/v1/supply/total')
const circulating = require('../api/v1/supply/circulating')

const port = process.env.PORT || 8787
http
  .createServer((req, res) => {
    const url = (req.url || '').split('?')[0].replace(/\/$/, '') || '/'
    if (url === '/v1/supply/total') return total(req, res)
    if (url === '/v1/supply/circulating') return circulating(req, res)
    res.statusCode = 404
    res.end()
  })
  .listen(port, () => {
    console.log(`listening ${port}`)
  })
