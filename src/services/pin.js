import {get} from '@utils/request'
import {checkisFollow, UserFollow, UserUnFollow} from "@services/user"

export async function getHotRecommendList({
  uid = '',
  token = '',
  device_id = ''
}) {
  return get('/api/shortMsg/getHotRecommendList', {
    params: {
      src: 'web',
      token,
      device_id,
      uid
    }
  })
}

/**
 * 获取特定话题的沸点
 */
export async function getPinTopicList({
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
      src: 'mobile',
      sortType: 'rank',
      token,
      device_id,
      uid
    }
  })
}

//获取关注沸点
export async function getPinTopicListFollowed({
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
export async function getPinList({before, limit = 20}) {
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
export async function getUserPinList(currentUid, uid, before, limit = 20) {
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
