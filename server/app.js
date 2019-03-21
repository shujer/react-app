const Koa = require('koa')
const router = require('./router')
// const bodyParser = require('koa-bodyparser')

const app = new Koa()

// 调用路由中间件
app.use(router.routes())

app.listen(8989, () => {
  console.log('server is running at http://localhost:8989')
})
