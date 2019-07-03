import { Toast } from 'antd-mobile'
import * as api from '@services/pin'

export default {
  namespace: 'pin',
  state: {
    name: 'pin',
    detail: {},
    user: {}
  },
  reducers: {
    emptyPin (state, playload) {
      return {
        user: {},
        detail: {}
      }
    },
    resetPin (state, { user, ...detail }) {
      return {
        ...state,
        user,
        detail
      }
    }
  },
  effects: dispatch => ({
    // 获取沸点具体内容
    async getPinById (playload, state) {
      let { id } = playload
      return new Promise((resolve, reject) => {
        api
          .getPinById({ msgId: id })
          .then(data => {
            dispatch.pin.resetPin(data)
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    }
  })
}
