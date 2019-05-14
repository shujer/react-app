import {getXiaoce} from '@services/entry'

export default {
  namespace: 'xiaoce',
  state: {
    name: 'xiaoce',
    books: []
  },
  reducers: {
    setAllXiaoce(state, {books}) {
      return {
        ...state,
        books: [...books]
      }
    }
  },
  effects: dispatch => ({
    getAllXiaoce(playload, state) {
      if (!state.xiaoce.books.length)
        return new Promise((resolve, reject) => {
          getXiaoce({
            token: state.auth.userInfo.token,
            uid: state.auth.userInfo.uid,
            client_id: state.auth.userInfo.clientId
          })
            .then(response => {
              let data = response.data
              dispatch.xiaoce.setAllXiaoce({books: data.d})
              resolve()
            })
            .catch(err => {
              reject(err)
            })
        })
    }
  }),
  subscriptions: {}
}
