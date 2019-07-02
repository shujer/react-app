import { getXiaoce } from '@services/entry'
import { Toast } from 'antd-mobile'

export default {
  namespace: 'xiaoce',
  state: {
    name: 'xiaoce',
    books: []
  },
  reducers: {
    setAllXiaoce (state, { books = [] }) {
      return {
        ...state,
        books: [...books]
      }
    }
  },
  effects: dispatch => ({
    getAllXiaoce (playload, state) {
      if (!state.xiaoce.books.length) {
        return new Promise((resolve, reject) => {
          getXiaoce({
            token: state.auth.userInfo.token,
            uid: state.auth.userInfo.uid,
            client_id: state.auth.userInfo.clientId
          })
            .then(data => {
              dispatch.xiaoce.setAllXiaoce({ books: data })
              resolve()
            })
            .catch(err => {
              Toast.info('网络似乎出了点问题', 1.5)
            })
        })
      }
    }
  }),
  subscriptions: {}
}
