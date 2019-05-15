import * as api from '@services/user'
export default {
  namespace: 'user',
  state: {
    name: 'user',
    user: {}
  },
  reducers: {
    setUser(state, {user}) {
      return {
        ...state,
        user
      }
    },
    emptyUser(state, playload) {
      return {
        ...state,
        user:{}
      }
    }
  },
  effects: dispatch => ({
    async getUserInfo({ids}, state) {
      await dispatch.user.emptyUser()
      return new Promise((resolve, reject) => {
        api
          .getMultiUser({
            ids: ids,
            token: state.auth.userInfo.token,
            uid: state.auth.userInfo.uid,
            device_id: state.auth.userInfo.clientId
          })
          .then(response => {
            let data = response.data
            let user = data.d[ids]
            dispatch.user.setUser({user})
            console.log(user)
            resolve(user)
          })
          .catch(err => {})
      })
    }
  }),
  subscriptions: {}
}
