const Router = require('koa-router')
const parse = require('co-body')
const Config = require('./config')
var crypto = require('crypto')
var querystring = require('querystring')
var fetch = require('node-fetch')
var md5 = crypto.createHash('md5')
const router = new Router({prefix: '/api'})

router.get('/404', async (ctx, next) => {
  ctx.response.body = '<h1>404 Not Found</h1>'
})

/**
 * 解决CORS限制问题
 */
router.get('/multi_user', async (ctx, next) => {
  let params = await ctx.request.query
  let query = querystring.stringify(params)
  try {
    let body
    await fetch(`https://lccro-api-ms.juejin.im/v1/get_multi_user?${query}`, {
      header: {
        Origin: 'https://juejin.im',
        Referer: 'https://juejin.im/'
      }
    })
      .then(res => res.json())
      .then(json => {
        body = json
      })
    ctx.response.body = body
  } catch (err) {
    ctx.response.body = {s: 4, m: '请求失败', d: null}
  }
})

router.get('/oauth/github/authorize', async (ctx, next) => {
  let params = {
    client_id: Config.GITHUB.client_id,
    scope: Config.GITHUB.scope,
    state: new Date().valueOf()
  }
  let query = querystring.stringify(params)
  let url = `${Config.GITHUB.authorize_url}?${query}`
  ctx.body = {url}
})

router.get('/oauth/github/callback', async (ctx, next) => {
  let params = {
    client_id: Config.GITHUB.client_id,
    client_secret: Config.GITHUB.client_secret,
    code: ctx.query.code
  }
  await fetch(Config.GITHUB.access_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
    .then(res => res.text()) //二进制传文本
    .then(body => {
      let args = body.split('&')
      let arg = args[0].split('=')
      return arg[1]
    })
    .then(async token => {
      ctx.redirect(`/auth?access_token=${token}&status=true`)
    })
    .catch(err => {
      ctx.redirect(`/auth?status=false`)
    })
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
  var pass = md5.update(Config.SMS.password).digest('hex')
  var data = {
    u: Config.SMS.user,
    p: pass,
    m: phoneNumber,
    c: content
  }
  let query = querystring.stringify(data)
  try {
    fetch(`${Config.SMS.smsapi}/sms?${query}`, {
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
