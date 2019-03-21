const Koa = require('koa')
const app = new Koa()

app.listen(8989, () => {
  console.log('server is running at http://localhost:8989')
})