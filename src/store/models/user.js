import * as api from '@services/user'
export default {
  namespace: 'user',
  state: {
    name: 'user',
    user: {},
    followMap: {}
  },
  reducers: {
    setUser (state, { user }) {
      return {
        ...state,
        user
      }
    },
    emptyUser (state, playload) {
      return {
        ...state,
        user: {}
      }
    },
    updateFollow (state, { follow }) {
      return {
        ...state,
        followMap: { ...state.followMap, ...follow }
      }
    }
  },
  effects: dispatch => ({
    async getUserInfo ({ ids }, state) {
      await dispatch.user.emptyUser()
      return new Promise((resolve, reject) => {
        api
          .getMultiUser({
            ids: ids,
            token: state.auth.userInfo.token,
            uid: state.auth.userInfo.uid,
            device_id: state.auth.userInfo.clientId
          })
          .then(data => {
            let user = data[ids]
            dispatch.user.setUser({ user })
            resolve(user)
          })
          .catch(err => {})
      })
    },
    async checkFollow (playload, state) {
      let { targetId } = playload
      let { userInfo, isLogin } = state.auth
      if (!isLogin || state.user.followMap[targetId] !== undefined) return
      api
        .checkisFollow({
          ...userInfo,
          targetUids: targetId
        })
        .then(follow => {
          dispatch.user.updateFollow({ follow })
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
            dispatch.user.updateFollow({ follow: { [targetId]: false } })
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
            dispatch.user.updateFollow({ follow: { [targetId]: true } })
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }),
  subscriptions: {}
}
