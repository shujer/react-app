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

//获取首页文章列表
export async function getEntry({limit = 20, category = 'all', before = ''}) {
  let categoryId = categoryIds[category]
  return get(`/api/timeline/get_entry_by_rank`, {
    params: {
      src: 'mobile',
      limit,
      category: categoryId,
      before
    }
  })
}

//获取首页文章列表
export async function getEntryByQuery({
  after = '',
  category = 'all',
  tags = []
}) {
  let categoryId = categoryIds[category]
  let id =
    categoryId !== 'all' && categoryId !== 'following' ? 'category' : category
  return post(`/api/webapi/query`, {
    data: {
      operationName: '',
      query: '',
      variables: {
        first: 20,
        after,
        order: 'POPULAR',
        category: categoryId,
        tags
      },
      extensions: {query: {id: queryIds[id]}}
    },
    headers: {
      'X-Agent': 'Juejin/Mobile'
    }
  })
}
//获取文章详情
export async function getPostDetail(postId, type = 'entryView') {
  return get(`/api/post/getDetailData`, {
    params: {
      src: 'mobile',
      postId,
      type
    }
  })
}

export async function getRelatedEntry(entryId) {
  return get(`/timeline/get_related_entry`, {
    params: {
      src: 'mobile',
      limit: 5,
      entryId
    }
  })
}

export async function getRecommendEntryByTagIds(tagIds) {
  return get(`/post/getRecommendEntryByTagIds`, {
    params: {
      src: 'mobile',
      tagIds
    }
  })
}

// 获取小册
export async function getXiaoce({
  pageNum = 1,
  alias = '',
  client_id = '',
  token = '',
  uid = ''
}) {
  return get(`/xiaoce/getListByLastTime`, {
    params: {
      src: 'mobile',
      pageNum,
      alias,
      uid,
      client_id,
      token
    }
  })
}
