import {get, put} from '@utils/request'

export async function getCategories(info={}) {
  let {clientId, token, uid} = info
  return get('/api/tag/categories', {
    headers: {
      'X-Juejin-Client': clientId || '',
      'X-Juejin-Src': 'mobile',
      'X-Juejin-Token': token || '',
      'X-Juejin-Uid': uid || ''
    }
  })
}

export async function subscribe() {
  return put('/tag/subscribe/55964d83e4b08a686cc6b353')
}
