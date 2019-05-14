const Koa = require('koa')
const router = require('./router')
const proxy = require('koa-server-http-proxy')
const proxyTable = require('./proxy')
// const cors = require('@koa/cors')

const app = new Koa()
const server = require('http').Server(app.callback())
const io = require('socket.io')(server)

app.use(router.routes()).use(router.allowedMethods())

app.use(proxy('/api', proxyTable))



io.set('origins', '*:*')

io.set('transports', ['polling', 'websocket'])

io.of('/feedback').on('connection', function(socket) {
  socket.on('user feedback', function(message) {
    socket.emit(
      'feedback',
      {message: 'hello, 有什么需要帮助的么？如果一分钟内没有回复您，欢迎留言到信箱，我们会即时跟进的哦~'}
    )
  })
  socket.on('new reply', function(message) {
    setTimeout(() => {
      socket.emit(
        'reply',
        {message: '您好，感谢您对掘金的支持，您的反馈已收到，我们会认真解决。如果有其他需要，欢迎随时联系我们。'}
      )
    }, 1000)
  })
  socket.on('disconnect', function() {})
})

server.listen(8989, () => {
  console.log('server is running at http://localhost:8989')
})
