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
        likeMap: { ...state.followMap, ...like }
      }
    }
  },
  effects: dispatch => ({
    async checkLike (playload, state) {
      let { targetId } = playload
      let { userInfo, isLogin } = state.auth
      if (!isLogin || state.userLike.likeMap[targetId] !== undefined) return
      api
        .checkisFollow({
          ...userInfo,
          targetUids: targetId
        })
        .then(like => {
          dispatch.userLike.updateLike({ like })
        })
        .catch(err => {
          console.log(err)
        })
    },

    async changeFollow (playload, state) {
      let { followState, targetId } = playload
      let { userInfo, isLogin } = state.auth
      if (!isLogin) return
      if (followState) {
        api
          .UserUnFollow({
            ...userInfo,
            followee: targetId,
            follower: userInfo.uid
          })
          .then(res => {
            dispatch.userLike.updateLike({ like: { [targetId]: false } })
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        api
          .UserFollow({
            ...userInfo,
            followee: targetId,
            follower: userInfo.uid
          })
          .then(res => {
            dispatch.userLike.updateLike({ like: { [targetId]: true } })
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }),
  subscriptions: {}
}
