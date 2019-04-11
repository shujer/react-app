import {stringify} from 'qs'
import {get} from '@utils/request'

const COLS =
  'viewedEntriesCount|role|totalCollectionsCount|allowNotification|subscribedTagsCount|appliedEditorAt|email|followersCount|postedEntriesCount|latestCollectionUserNotification|commentedEntriesCount|weeklyEmail|collectedEntriesCount|postedPostsCount|username|latestLoginedInAt|totalHotIndex|blogAddress|selfDescription|latestCheckedNotificationAt|emailVerified|totalCommentsCount|installation|blacklist|weiboId|mobilePhoneNumber|apply|followeesCount|deviceType|editorType|jobTitle|company|latestVoteLikeUserNotification|authData|avatarLarge|mobilePhoneVerified|objectId|createdAt|updatedAt'
/**
 * 获取个人信息
 */
export async function getUserInfo({uid, token}) {
  let params = {
    src: 'mobile',
    uid: uid,
    current_uid: uid,
    token: token
  }
  return get(`/api/user/getUserInfo${stringify(params)}`)
}
/**
 * 获取系统未读通知
 */
export async function getUnreadSystemNotificationNum({uid, token}) {
  let params = {
    uid,
    token,
    src: 'mobile'
  }
  return get(
    `/api/notification/getUnreadSystemNotificationNum${stringify(params)}`
  )
}
/**
 * 获取其他用户的信息
 */
export async function getMultiUser({uid, token, ids, cols = COLS}) {
  let params = {
    uid,
    token,
    src: 'mobile',
    ids,
    cols
  }
  return get(`/api/lccro/get_multi_user${stringify(params)}`)
}
/**
 * 获取关注者
 */
export async function getUserFollowInfo(uid) {
  let params = {
    src: 'mobile',
    uid
  }
  return get(`/api/follow/getUserFollowInfo${stringify(params)}`)
}
