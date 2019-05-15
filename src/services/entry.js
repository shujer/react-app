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

/**
 * 获取首页列表
 * @param {number} limet 每次请求数量
 * @param {string} category 列表类型
 * @param {number} before 上次请求的rankIndex
 */
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

/**
 * 获取首页列表——另一个接口
 * @param {number} after 上次请求的cursor
 * @param {string} category 列表类型
 * @param {array} tags 选择的标签
 */
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

/**
 * 获取文章信息
 * @param {string} postId 文章id
 * @param {string} type：entryView获取文章内容，entry获取文章信息
 */
export async function getPostDetail(postId, type = 'entryView') {
  return get(`/api/post/getDetailData`, {
    params: {
      src: 'mobile',
      postId,
      type
    }
  })
}

/**
 * 获取文章相关列表
 * @param {string} entryId 文章id
 */
export async function getRelatedEntry(entryId) {
  return get(`/api/timeline/get_related_entry`, {
    params: {
      src: 'mobile',
      limit: 5,
      entryId
    }
  })
}

/**
 * 获取标签相关列表
 * @param {array} tagIds 标签id
 */
export async function getRecommendEntryByTagIds(tagIds) {
  return get(`/api/post/getRecommendEntryByTagIds`, {
    params: {
      src: 'mobile',
      tagIds
    }
  })
}

/**
 * 根据页码获取小册列表
 * @param {number} pageNum 从1开始计数
 * @param {alias}
 * @param {string} client_id 当前用户设备id
 * @param {string} token 当前用户token
 * @param {string} uid 当前用户uid
 */
export async function getXiaoce({
  pageNum = 1,
  alias = '',
  client_id = '',
  token = '',
  uid = ''
}) {
  return get(`/api/xiaoce/getListByLastTime`, {
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

/**
 * 获取轮播图
 * @param {string} currentUid 登录用户的id
 * @param {string} uid 目标用户的id
 * @param {string} before
 * @param {number} limit
 */
export async function getEventList({
  pageNum,
  orderType = 'startTime',
  pageSize = 20,
  showBanner = 1,
  bannerStartTime
} = {}) {
  return get(`/api/event/getEventList`, {
    params: {
      src: 'mobile',
      orderType,
      pageNum,
      pageSize,
      showBanner,
      bannerStartTime
    }
  })
}
