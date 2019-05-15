import {get, post} from '@utils/request'
// 获取关注的标签
export async function getSubscribeTags({targetUid, clientId, token, uid} = {}) {
    return this.get(`/api/gold/user/${targetUid}/subscribe`, {
      headers: {
        'X-Juejin-Src': 'web',
        'X-Juejin-Client': clientId,
        'X-Juejin-Token': token,
        'X-Juejin-Uid': uid
      }
    })
  }
  
  // 关注tag
  export async function subscribeTags({tagId, clientId, token, uid} = {}) {
    return this.put(`/api/gold/tag/subscribe/${tagId}`, null, {
      headers: {
        'X-Juejin-Src': 'web',
        'X-Juejin-Client': clientId,
        'X-Juejin-Token': token,
        'X-Juejin-Uid': uid
      }
    })
  }
  
  // 取消关注tag
  export async function unSubscribeTags({tagId, clientId, token, uid} = {}) {
    return this.delete(`/api/gold/tag/subscribe/${tagId}`, {
      headers: {
        'X-Juejin-Src': 'web',
        'X-Juejin-Client': clientId,
        'X-Juejin-Token': token,
        'X-Juejin-Uid': uid
      }
    })
  }
  