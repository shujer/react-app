import api from '@services/api'
export default {
  namespace: 'post',
  state: {
    name: 'post',
    postDetail:{}
  },
  reducers: {
    resetPostDetail(state, {postDetail}) {
      return {
        ...state.postDetail,
        postDetail
      }
    }
  },
  effects: dispatch => ({
    async getPostDetailAsync(playload, state) {
      await api.entry.getPostDetail(playload.id)
      .then(({data}) => {
        if(data.s !== 1) throw Error
        dispatch.post.resetPostDetail({postDetail: data.d})
      }).catch(err => {
        console.log(err)
      })
    }
  }),
  subscriptions: {}
}
