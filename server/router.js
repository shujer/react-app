const Router = require('koa-router')
const router = new Router({prefix: '/api'})
const parse = require('co-body')
const smsConfig = require('./config').SMS
var crypto = require('crypto')
var querystring = require('querystring')
var fetch = require('node-fetch')
var md5 = crypto.createHash('md5')

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
})

router.post('/auth/type/phoneNumber', async (ctx, next) => {
  var {phoneNumber, password} = await parse.json(ctx.req)
  if (phoneNumber === '15111111111' && password === '123456') {
    ctx.response.body = JSON.stringify({
      s: 0,
      m: `Hello， ${phoneNumber}！`,
      d: ''
    })
  } else {
    ctx.response.body = JSON.stringify({s: 1, m: '账号信息错误', d: ''})
  }
})

router.post('/auth/type/email', async (ctx, next) => {
  let {email, password} = await parse.json(ctx.req)
  if (email === 'example@react.com' && password === '123456') {
    ctx.response.body = {s: 0, m: `Hello， ${email}！`, d: ''}
  } else {
    ctx.response.body = {s: 1, m: '账号信息错误', d: ''}
  }
})

function generateRandCode() {
  let code = []
  for (let i = 0; i < 4; i++) {
    code.push(Math.floor(Math.random(10) * 10))
  }
  return code.join('')
}

router.post('/smsverif', async (ctx, next) => {
  let {phoneNumber} = await parse.json(ctx.req)
  let code = generateRandCode()
  let content = `【掘金技术社区】您好，您的验证码是${code}。如非本人操作，请忽略短信。`
  var pass = md5.update(smsConfig.password).digest('hex')
  var data = {
    u: smsConfig.user,
    p: pass,
    m: phoneNumber,
    c: content
  }
  let query = querystring.stringify(data)
  try {
    fetch(`${smsConfig.smsapi}/sms?${query}`, {
      header: {
        'Content-Type': 'text/plain;charset=utf-8'
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
    ctx.response.body = {s: 1, m: '验证码发送成功', d: code}
  } catch (err) {
    ctx.response.body = {s: 1, m: '验证码发送失败', d: ''}
  }
})

module.exports = router
