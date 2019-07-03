import * as api from '@services/user'
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
        .checkisLike({
          ...userInfo,
          entryId: targetId
        })
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
      if (!isLogin) return
      if (likeState) {
        api
          .UserUnLike({
            ...userInfo,
            entryId: targetId
          })
          .then(res => {
            dispatch.userLike.updateLike({ like: { [targetId]: false } })
          })
          .catch(err => {
            dispatch.userLike.updateLike({ like: { [targetId]: true } })
          })
      } else {
        api
          .UserLike({
            ...userInfo,
            entryId: targetId
          })
          .then(res => {
            dispatch.userLike.updateLike({ like: { [targetId]: true } })
          })
          .catch(err => {
            dispatch.userLike.updateLike({ like: { [targetId]: false } })
          })
      }
    }
  }),
  subscriptions: {}
}
