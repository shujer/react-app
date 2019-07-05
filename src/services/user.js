import { get, put, request } from '@utils/request'

const COLS =
  'viewedEntriesCount|role|totalCollectionsCount|allowNotification|subscribedTagsCount|appliedEditorAt|email|followersCount|postedEntriesCount|latestCollectionUserNotification|commentedEntriesCount|weeklyEmail|collectedEntriesCount|postedPostsCount|username|latestLoginedInAt|totalHotIndex|blogAddress|selfDescription|latestCheckedNotificationAt|emailVerified|totalCommentsCount|installation|blacklist|weiboId|mobilePhoneNumber|apply|followeesCount|deviceType|editorType|jobTitle|company|latestVoteLikeUserNotification|authData|avatarLarge|mobilePhoneVerified|objectId|createdAt|updatedAt'
/**
 * 获取系统未读通知
 */
export async function getUnreadSystemNotificationNum ({ uid, token }) {
  return get(`/api/notification/getUnreadSystemNotificationNum`, {
    params: {
      uid,
      token,
      src: 'mobile'
    }
  })
}
/**
 * 获取其他用户的信息
 */
export async function getMultiUser ({
  ids,
  uid = '',
  device_id = '',
  token = '',
  cols = COLS
}) {
  return get(`/api/multi_user`, {
    params: {
      uid,
      device_id,
      token,
      src: 'mobile',
      ids,
      cols
    }
  })
}
/**
 * 获取关注者
 */
export async function getUserFollowInfo (uid) {
  return get(`/api/follow/getUserFollowInfo`, {
    params: {
      src: 'mobile',
      uid
    }
  })
}

/**
 * 获取通知数目
 */
export async function getUserNotificationNum () {
  return get(`/api/ufp/getUserNotificationNum`, {
    params: {
      src: 'mobile'
    }
  })
}

/**
 * 获取用户动态
 */
export async function getUserActivity (uid, before) {
  return get(`/api/ufp/getUserLog`, {
    params: {
      src: 'web',
      uid,
      before
    }
  })
}

/**
 * 是否关注用户
 */
export async function checkisFollow ({ token, clientId, uid, targetUids }) {
  return get(`/api/follow/isCurrentUserFollowed`, {
    params: {
      src: 'mobile',
      token,
      clientId,
      uid,
      currentUid: uid,
      targetUids: targetUids
    }
  })
}

/**
 * 关注用户
 */
export async function UserFollow ({
  token,
  clientId: device_id,
  uid,
  followee,
  follower
}) {
  return get(`/api/follow/follow`, {
    params: {
      src: 'mobile',
      token,
      device_id,
      uid,
      followee,
      follower
    }
  })
}

/**
 * 取消关注
 * @param {string} followee 被关注者
 * @param {string} follower 关注者
 */
export async function UserUnFollow ({
  token,
  clientId: device_id,
  uid,
  followee,
  follower
}) {
  return get(`/api/follow/unfollow`, {
    params: {
      src: 'mobile',
      token,
      device_id,
      uid,
      followee,
      follower
    }
  })
}

/**
 * 点赞文章
 */
export async function UserLike ({ entryId, clientId, token, uid }) {
  return put(`/api/like/user/like/entry/${entryId}`,  {
    headers: {
      'X-Juejin-Src': 'mobile',
      'X-Juejin-Client': clientId,
      'X-Juejin-Token': token,
      'X-Juejin-Uid': uid
    }
  })
}

/**
 * 取消点赞
 * */
export async function UserUnLike ({ entryId, clientId, token, uid }){
  return request(`/api/like/user/like/entry/${entryId}`, {
    method:'DELETE',
    headers: {
      'X-Juejin-Src': 'web',
      'X-Juejin-Client': clientId,
      'X-Juejin-Token': token,
      'X-Juejin-Uid': uid
    }
  })
}

/**
 * 检查是否点赞
 */
export async function checkisLike ({ entryId, clientId, token, uid }) {
  return get(`/api/like/user/like/entry/${entryId}`, {
    headers: {
      'X-Juejin-Src': 'mobile',
      'X-Juejin-Client': clientId,
      'X-Juejin-Token': token,
      'X-Juejin-Uid': uid
    }
  })
}
