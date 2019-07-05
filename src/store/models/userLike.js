import * as api from '@services/user'
import {Toast} from 'antd-mobile'

export default {
  namespace: 'userLike',
  state: {
    name: 'userLike',
    likeMap: {}
  },
  reducers: {
    updateLike (state, { like }) {
      return {
        ...state,
        likeMap: { ...state.likeMap, ...like }
      }
    }
  },
  effects: dispatch => ({
    async checkLike (playload, state) {
      let { targetId } = playload
      let { userInfo, isLogin } = state.auth
      if (!isLogin || state.userLike.likeMap[targetId] !== undefined) return
      api
        .checkisLike({ ...userInfo, entryId: targetId })
        .then(({ like }) => {
          dispatch.userLike.updateLike({ like: { [targetId]: like } })
        })
        .catch(err => {
          console.log(err)
        })
    },

    async changeLike (playload, state) {
      let { likeState, targetId } = playload
      let { userInfo, isLogin } = state.auth
      if (!isLogin) {
        Toast.info('请先登录', 1.5)
        return
      }
      if (likeState) {
        api
          .UserUnLike({ ...userInfo, entryId: targetId })
          .then(res => {
            dispatch.userLike.updateLike({ like: { [targetId]: false } })
          })
          .catch(err => {})
      } else {
        api
          .UserLike({ ...userInfo, entryId: targetId })
          .then(res => {
            dispatch.userLike.updateLike({ like: { [targetId]: true } })
          })
          .catch(err => {})
      }
    }
  }),
  subscriptions: {}
}
