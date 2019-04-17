import {get, put} from '@utils/request'

export async function getCategories({clientId = '', token = '', uid = ''}) {
  return get('/api/tag/categories', {
    headers: {
      'X-Juejin-Client': clientId,
      'X-Juejin-Src': 'mobile',
      'X-Juejin-Token': token,
      'X-Juejin-Uid': uid
    }
  })
}

export async function subscribe() {
  return put('/api/tag/subscribe/55964d83e4b08a686cc6b353')
}
