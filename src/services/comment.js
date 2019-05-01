import {post, get, delete_with_params} from '@utils/request'
/**
 * 添加评论
 */
export async function addComment({respUser,targetId,content,targetType = 'entry'}) {
  return post('/comment', {
    data: {
      respUser,
      targetId,
      content,
      targetType
    }
  })
}
/**
 * 删除评论
 */
export async function deleteComment({id, targetId, targetType = 'entry', firstComment}) {
  return delete_with_params(`/comment/${id}`, {
    params: {
      targetId,
      targetType,
      firstComment
    }
  })
}
/**
 * 添加回复
 */
export async function addReply({commentId, uid, targetId, content, targetType = 'entry'}) {
  return post(`/comment/`, {
    data: {
      firstComment: commentId,
      respComment: commentId,
      respUser: uid,
      targetId,
      targetType,
      content
    }
  })
}

// export async function addReply({entryId, targetId, targetType = 'entry'}) {
//   return get(`/comments/entry/${entryId}/comment/5cc994306fb9a0025787fd50?pageNum=1&pageSize=10`, {
//     params: {
//       targetId,
//       targetType
//     }
//   })
// }