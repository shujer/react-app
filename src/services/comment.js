import { post, get, request } from '@utils/request'
/**
 * 获取评论
 */
export async function getTopicCommentById ({ pageSize = 4, pageNum, entryId }) {
  return get(`/api/pincomment/${entryId}`, {
    headers: {
      'X-Juejin-Src': 'mobile'
    },
    params: {
      pageSize,
      pageNum
    }
  })
}

/**
 * 添加评论
 */
export async function addComment ({
  respUser,
  targetId,
  content,
  targetType = 'entry'
}) {
  return post('/api/comment', {
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
export async function deleteComment ({
  id,
  targetId,
  targetType = 'entry',
  firstComment
}) {
  return request(`/api/comment/${id}`, {
    method: 'DELETE',
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
export async function addReply ({
  commentId,
  uid,
  targetId,
  content,
  targetType = 'entry'
}) {
  return post(`/api/comment/`, {
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
