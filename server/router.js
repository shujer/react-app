const Router = require('koa-router')
const router = new Router({prefix: '/api'})
const parse = require('co-body')

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
})

router.post('/auth/type/phoneNumber', async (ctx, next) => {
  var {phoneNumber, password} = await parse.json(ctx.req)
  if (phoneNumber === '15111111111' && password === '123456') {
    ctx.response.body = JSON.stringify({s: 0, m: `Hello， ${phoneNumber}！`, d: ''})
  } else {
    ctx.response.body = JSON.stringify({s: 1, m: '账号信息错误', d: ''})
  }
})

router.post('/auth/type/email', async (ctx, next) => {
  var {email, password} = await parse.json(ctx.req)
  if (email === 'example@react.com' && password === '123456') {
    ctx.response.body = {s: 0, m: `Hello， ${email}！`, d: ''}
  } else {
    ctx.response.body = {s: 1, m: '账号信息错误', d: ''}
  }
})

module.exports = router
