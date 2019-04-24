import {stringify} from 'qs'
import {get, post} from '@utils/request'

const queryIds = {
  all: '21207e9ddb1de777adeaca7a2fb38030',
  following: '504f6ca050625a4270ba11eebe696b3c',
  category: '653b587c5c7c8a00ddf67fc66f989d42'
}

const categoryIds = {
  all: 'all',
  following: 'following',
  backend: '5562b419e4b00c57d9b94ae2',
  frontend: '5562b415e4b00c57d9b94ac8',
  android: '5562b410e4b00c57d9b94a92',
  ios: '5562b405e4b00c57d9b94a41',
  ai: '57be7c18128fe1005fa902de',
  freebie: '5562b422e4b00c57d9b94b53',
  career: '5c9c7cca1b117f3c60fee548',
  article: '5562b428e4b00c57d9b94b9d'
}

export async function getEntry({
  limit = 20,
  category = 'all',
  before = ''
}) {
  let categoryId = categoryIds[category]
  let params = {
    src: 'mobile',
    limit,
    category: categoryId,
    before
  }
  console.log(params)
  return get(`/api/timeline/get_entry_by_rank?${stringify(params)}`)
}

export async function getEntryByQuery({
  after = '',
  category = 'all',
  tags = []
}) {
  let categoryId = categoryIds[category]
  let id = categoryId === '' ? 'category' : category
  let body = {
    operationName: '',
    query: '',
    variables: {
      first: 20,
      after,
      order: 'POPULAR',
      category: categoryId,
      tags
    },
    extensions: {query: {id:queryIds[id]}}
  }
  return post(`/api/webapi/query`, {
    headers: {
      'X-Agent': 'Juejin/Mobile'
    },
    body
  })
}
