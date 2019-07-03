import { get, post } from '@utils/request'

export async function getRecommendPins ({ size = 20, after = '' }) {
  return post('/api/webapi', {
    data: {
      operationName: '',
      query: '',
      variables: { size, after },
      extensions: { query: { id: '249431a8e4d85e459f6c29eb808e76d0' } }
    },
    headers: {
      'X-Agent': 'Juejin/Mobile'
    }
  })
}

export async function getHotPins ({ size = 20, after = '' }) {
  return post('/api/webapi', {
    data: {
      operationName: '',
      query: '',
      variables: { after, size },
      extensions: { query: { id: 'f0a2fbbc03d4d46266e40762139c414c' } }
    },
    headers: {
      'X-Agent': 'Juejin/Mobile'
    }
  })
}

export async function getFollowPins ({
  size = 20,
  after = '',
  device_id,
  token,
  uid
}) {
  return post('/api/webapi', {
    data: {
      operationName: '',
      query: '',
      variables: {
        type: 'MAIN',
        size,
        after,
        since: '2019-06-24T11:44:57.889Z'
      },
      extensions: { query: { id: '648c28f5213f7d3601f4d5efa7fa3826' } }
    },
    headers: {
      'X-Legacy-Device-Id': device_id,
      'X-Legacy-Token': token,
      'X-Legacy-Uid': uid,
      'X-Agent': 'Juejin/Mobile'
    }
  })
}

/**
 * 获取特定话题的沸点
 */
export async function getPinTopicList ({
  topicId,
  page = 0,
  pageSize = 20,
  uid = '',
  token = '',
  device_id = ''
}) {
  return get('/api/shortMsg/pinList/topic', {
    params: {
      topicId,
      pageSize,
      page,
      src: 'mobile',
      sortType: 'rank',
      token,
      device_id,
      uid
    }
  })
}

// 获取关注沸点
export async function getPinTopicListFollowed ({
  after = 0,
  page = 0,
  pageSize = 20,
  uid = '',
  token = '',
  device_id = ''
}) {
  return get('/api/shortMsg/topicList/followed', {
    params: {
      src: 'mobile',
      after,
      page,
      pageSize,
      token,
      device_id,
      uid
    }
  })
}
/**
 * 获取沸点列表
 * @param {string} before 上次请求rankIndex
 * @param {number} limit 请求数量
 */
export async function getPinList ({ before, limit = 20 }) {
  return get(`/api/shortMsg/pinList/recommend`, {
    params: {
      src: 'mobile',
      limit,
      before
    },
    headers: {
      'X-Juejin-Src': 'mobile'
    }
  })
}

/**
 * 获特定取用户的沸点列表
 * @param {string} currentUid 登录用户的id
 * @param {string} uid 目标用户的id
 * @param {string} before
 * @param {number} limit
 */
export async function getUserPinList (currentUid, uid, before, limit = 20) {
  return get(`/api/shortMsg/getUserList`, {
    params: {
      src: 'mobile',
      before,
      limit,
      currentUid,
      uid
    }
  })
}

/**
 * 获取沸点具体内容
 */
export async function getPinById ({ msgId }) {
  return get(`/api/shortMsg/getByID`, {
    params: {
      src: 'mobile',
      msgId
    }
  })
}

/**
 * 获取话题
 */
export async function getTopic ({ clientId: device_id, token, uid }) {
  return get('/api/shortMsg/topicList/recommend', {
    params: {
      src: 'mobile',
      token,
      uid,
      device_id
    }
  })
}
