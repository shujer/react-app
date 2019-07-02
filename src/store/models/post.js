import * as api from '@services/entry'
import { Toast } from 'antd-mobile'
export default {
  namespace: 'post',
  state: {
    name: 'post',
    content: '',
    postInfo: {}
  },
  reducers: {
    resetPostDetail (state, { content }) {
      return {
        ...state,
        content: content
      }
    },
    resetPostInfo (state, { postInfo }) {
      return {
        ...state.postInfo,
        postInfo
      }
    },
    emptyPost (state, playload) {
      return {
        ...state,
        content: '',
        postInfo: {}
      }
    }
  },
  effects: dispatch => ({
    async getPostDetailAsync ({ id }, state) {
      return new Promise((resolve, reject) => {
        api
          .getPostDetail(id)
          .then(data => {
            let { content } = data
            dispatch.post.resetPostDetail({ content })
            resolve(content)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    async getPostAsync ({ id }, state) {
      await dispatch.post.emptyPost()
      return new Promise((resolve, reject) => {
        api
          .getPostDetail(id, 'entry')
          .then(data => {
            dispatch.post.resetPostInfo({ postInfo: data })
            dispatch.post.getPostDetailAsync({ id })
            resolve(data)
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    }
  }),
  subscriptions: {}
}
