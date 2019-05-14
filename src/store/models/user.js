import * as api from '@services/user'
export default {
  namespace: 'user',
  state: {
    name: 'user',
    user: {}
  },
  reducers: {},
  effects: dispatch => ({
    getUserInfo({ids}, state) {
      return new Promise((resolve, reject) => {
        api
          .getMultiUser({
            ids: ids,
            token: state.auth.userInfo.token,
            uid: state.auth.userInfo.uid,
            device_id:state.auth.userInfo.clientId
          })
          .then(response => {
            console.log(response)
            resolve()
          })
          .catch(err => {})
      })
    }
  }),
  subscriptions: {}
}
