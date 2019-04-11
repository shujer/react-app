module.exports.SMS = {
  smsapi: 'http://api.smsbao.com',
  user: 'susie', // 短信平台账号
  password: 'smsbaoshiwojia13' // 短信平台密码
}

module.exports.TOKEN = {
  secret: 'XITU_JUEJIN'
}

module.exports.GITHUB = {
  authorize_url:'https://github.com/login/oauth/authorize',
  access_url: 'https://github.com/login/oauth/access_token',
  api_url:'https://api.github.com/user',
  redirect_uri: 'http://localhost:3000/api/oauth/github/callback',
  scope:'user,public_repo',
  client_id: 'e30805b583d88da0a7a2',
  client_secret: '8a4e4f24bde4c8268fba7e39a1ac4e706f142917' 
}

