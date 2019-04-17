import {stringify} from 'qs'
import {get, post, request} from '@utils/request'

export async function getHot() {
  return get('/api/xiaoce/getHot')
}

export async function getListByLastTime() {
  return get('/api/xiaoce/getListByLastTime')
}

export async function getEntryByTimeline({
  limit = 20,
  category = 'all'
}) {
  let params = {
    src: 'mobile',
    limit: 20,
    category
  }
  return get(`/api/timeline/get_entry_by_timeline?${stringify(params)}`)
}
export async function getEntryByRank({
  limit = 20,
  category = 'all',
  before,
  recomment
}) {
  let params = {
    src: 'mobile',
    limit: 20,
    category,
    before
  }
  return get(`/api/timeline/get_entry_by_rank?${stringify(params)}`)
}
export async function getArticleAfter({
  after = '',
  category = 'all',
  tags = []
}) {
  return post(`/api/webapi/query`, {
    headers: {
      'X-Agent': 'Juejin/Web'
    },
    body: {
      operationName: '',
      query: '',
      variables: {first: 20, after, order: 'POPULAR', category, tags},
      extensions: {query: {id: '21207e9ddb1de777adeaca7a2fb38030'}}
    }
  })
}

export async function getEntryByIds() {
  return get('/api/timeline/get_entry_by_ids')
}

// export async function getEntryByRank() {
//   return get('/api/timeline/get_entry_by_rank')
// }
