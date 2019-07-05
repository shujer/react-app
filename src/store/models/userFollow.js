import * as api from '@services/user'
import {Toast} from 'antd-mobile'

export default {
  namespace: 'userFollow',
  state: {
    name: 'userFollow',
    followMap: {}
  },
  reducers: {
    updateFollow (state, { follow }) {
      return {
        ...state,
        followMap: { ...state.followMap, ...follow }
      }
    }
  },
  effects: dispatch => ({
    async checkFollow (playload, state) {
      let { targetId } = playload
      let { userInfo, isLogin } = state.auth
      if (!isLogin || state.userFollow.followMap[targetId] !== undefined) {
        return;
      }
      api
        .checkisFollow({ ...userInfo, targetUids: targetId })
        .then(follow => {
          dispatch.userFollow.updateFollow({ follow })
        })
        .catch(err => {
          console.log(err)
        })
    },

    async changeFollow (playload, state) {
      let { followState, targetId } = playload
      let { userInfo, isLogin } = state.auth
      if (!isLogin)  {
        Toast.info('请先登录', 1.5);
        return
      }
      if (followState) {
        api
          .UserUnFollow({
            ...userInfo,
            followee: targetId,
            follower: userInfo.uid
          })
          .then(res => {
            dispatch.userFollow.updateFollow({ follow: { [targetId]: false } })
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        api
          .UserFollow({ ...userInfo, followee: targetId, follower: userInfo.uid })
          .then(res => {
            dispatch.userFollow.updateFollow({ follow: { [targetId]: true } })
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }),
  subscriptions: {}
}
