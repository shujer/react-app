import api from '@services/api'
export default {
  namespace: 'post',
  state: {
    name: 'post',
    content: "",
    postInfo: {}
  },
  reducers: {
    resetPostDetail(state, {content}) {
      return {
        ...state,
        content:content
      }
    },
    resetPostInfo(state, {postInfo}) {
      return {
        ...state.postInfo,
        postInfo
        
      }
    },
    emptyPost(state, playload) {
      return {
        ...state,
        content:"",
        postInfo:{}
      }
    }
  },
  effects: dispatch => ({
    async getPostDetailAsync({id}, state) {
      await api.entry
        .getPostDetail(id)
        .then(data => {
          if (data.s !== 1) throw Error
          let {d: {content}} = data
          dispatch.post.resetPostDetail({content})
        })
        .catch(err => {
          console.log(err)
        })
    },
    async getPostAsync({id}, state) {
      await dispatch.post.emptyPost()
      await api.entry
        .getPostDetail(id, 'entry')
        .then(data => {
          if (data.s !== 1) throw Error
          let {d: postInfo} = data
          dispatch.post.resetPostInfo({postInfo})
          dispatch.post.getPostDetailAsync({id})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }),
  subscriptions: {}
}
