import * as api from '@services/comment'

export default {
  namespace: 'comment',
  state: {
    name: 'comment',
    comments: [],
    entryId: '',
    count: 0,
    pageNum: 0,
    pageSize: 4,
    hasNext: true
  },
  reducers: {
    resetComment (state, { comments, entryId, count }) {
      let nextPageNum = state.pageNum + 1
      return {
        ...state,
        comments,
        entryId,
        count,
        pageNum: nextPageNum,
        hasNext: !!(nextPageNum * state.pageSize - count)
      }
    },
    emptyComment (state) {
      return {
        ...state,
        comments: [],
        entryId: '',
        count: 0,
        pageNum: 0,
        pageSize: 4,
        hasNext: true
      }
    }
  },
  effects: dispatch => ({
    async getCommentById ({ entryId }, state) {
      if (!state.comment.hasNext) return
      api
        .getTopicCommentById({
          entryId,
          pageNum: state.comment.pageNum,
          pageSize: state.comment.pageSize
        })
        .then(data => {
          let { comments, targetId, count } = data
          dispatch.comment.resetComment({ comments, entryId: targetId, count })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }),
  subscriptions: {}
}
