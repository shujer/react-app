const Koa = require('koa')
const router = require('./router')
const proxy = require('koa-server-http-proxy')
const proxyTable = require('./proxy')

const app = new Koa()

app.use(proxy('/api',proxyTable));

app.use(router.routes()).use(router.allowedMethods())

app.listen(8989, () => {
  console.log('server is running at http://localhost:8989')
})
