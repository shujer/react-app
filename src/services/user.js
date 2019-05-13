import {get} from '@utils/request'

const COLS =
  'viewedEntriesCount|role|totalCollectionsCount|allowNotification|subscribedTagsCount|appliedEditorAt|email|followersCount|postedEntriesCount|latestCollectionUserNotification|commentedEntriesCount|weeklyEmail|collectedEntriesCount|postedPostsCount|username|latestLoginedInAt|totalHotIndex|blogAddress|selfDescription|latestCheckedNotificationAt|emailVerified|totalCommentsCount|installation|blacklist|weiboId|mobilePhoneNumber|apply|followeesCount|deviceType|editorType|jobTitle|company|latestVoteLikeUserNotification|authData|avatarLarge|mobilePhoneVerified|objectId|createdAt|updatedAt'
/**
 * 获取系统未读通知
 */
export async function getUnreadSystemNotificationNum({uid, token}) {
  return get(`/notification/getUnreadSystemNotificationNum`, {
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
export async function getMultiUser({uid, token, ids, cols = COLS}) {
  return get(`/api/lccro/get_multi_user`, {
    params: {
      uid,
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
export async function getUserFollowInfo(uid) {
  return get(`/api/follow/getUserFollowInfo`, {
    params: {
      src: 'mobile',
      uid
    }
  })
}
