import {get} from '@utils/request'

export async function getGithubOauth() {
  return get('/api/oauth/github/authorize')
}

export async function getWeiboOauth() {
  return get('/api/oauth/weibo/authorize')
}

export async function getWechatOauth() {
  return get('/api/oauth/wechat/authorize')
}
