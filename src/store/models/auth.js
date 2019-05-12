import api from '@services/api'
import Cookies from 'js-cookie'
import {Toast} from 'antd-mobile'
import {removeData, saveData, loadData} from '@utils/localstorageHelper'

const machine = {
  states: {
    'login form': {
      submit: 'loading'
    },
    loading: {
      success: 'profile',
      failure: 'error'
    },
    profile: {
      viewProfile: 'profile',
      logout: 'login form'
    },
    error: {
      submit: 'loading'
    }
  }
}

const stateTransformer = function(currentState, stepUp) {
  let nextState
  if (machine.states[currentState][stepUp]) {
    nextState = machine.states[currentState][stepUp]
  }
  console.log(`${currentState} + ${stepUp} --> ${nextState}`)
  return nextState || currentState
}

export default {
  namespace: 'auth',
  state: {
    currentState: 'login form',
    userInfo: {},
    userDetail: {},
    isLogin: false
  },
  reducers: {
    stateChanger(state, {stepUp}) {
      let currentState = stateTransformer(state.currentState, stepUp)
      return {
        ...state,
        currentState
      }
    },
    setUser(state, {userDetail, userInfo}) {
      return {
        ...state,
        userDetail,
        userInfo
      }
    },
    setLoginState(state, {isLogin}) {
      return {
        ...state,
        isLogin
      }
    }
  },

  effects: dispatch => ({
    async isAuth(playload, state) {
      let userInfo = loadData('juejin_userInfo')
      if (userInfo) {
        try {
          let data = await api.user.getUserInfo({
            uid: userInfo.uid,
            token: userInfo.token,
            device_id: userInfo.clientId
          })
          if (data.err || data.data.s !== 1) throw data.err
          dispatch.auth.setUser({userDetail: data.data.d, userInfo})
          dispatch.auth.setLoginState({isLogin: true})
          return true
        } catch (err) {
          // console.log(err)
        }
      }
      dispatch.auth.setLoginState({isLogin: false})
    },

    async loginByPhoneNumber(playload, state) {
      dispatch.auth.stateChanger({stepUp: 'submit'})
      try {
        let data = await api.auth.loginByPhoneNumber(playload)
        if (data.err) throw data.err
        let userInfo = {
          token: data.data.token,
          clientId: data.data.clientId,
          uid: data.data.userId
        }
        let userDetail = data.data.user
        Cookies.set('userInfo', userInfo, {expires: 7, path: '/'})
        saveData('juejin_userInfo', userInfo)
        dispatch.auth.setUser({userDetail, userInfo})
        dispatch.auth.setLoginState({isLogin: true})
        dispatch.auth.stateChanger({stepUp: 'success'})
      } catch (err) {
        dispatch.auth.stateChanger({stepUp: 'failure'})
        if (err.response.status === 401) {
          Toast.info('用户名或密码错误', 1.5)
        } else {
          Toast.info('未知错误，请稍后重试', 1.5)
        }
      }
    },

    async loginByEmail(playload, state) {
      dispatch.auth.stateChanger({stepUp: 'submit'})
      try {
        let data = await api.auth.loginByEmail(playload)
        if (data.err) throw data.err
        let userInfo = {
          token: data.data.token,
          clientId: data.data.clientId,
          uid: data.data.user.userId
        }
        let userDetail = data.data.user
        Cookies.set('userInfo', userInfo, {expires: 7, path: '/'})
        saveData('juejin_userInfo', userInfo)
        dispatch.auth.setUser({userDetail, userInfo})
        dispatch.auth.stateChanger({stepUp: 'success'})
      } catch (err) {
        dispatch.auth.stateChanger({stepUp: 'failure'})
        if (err.response.status === 401) {
          Toast.info('用户名或密码错误', 1.5)
        } else {
          Toast.info('未知错误，请稍后重试', 1.5)
        }
      }
    },

    async loginByGithub(playload, state) {
      dispatch.auth.stateChanger({stepUp: 'submit'})
      let {data} = await api.oauth.getGithubOauth()
      window.open(data.url, '_blank')
    },

    async logout(playload, state) {
      await api.auth.logout()
      dispatch.auth.stateChanger({stepUp: 'logout'})
      removeData('juejin_userInfo')
      Cookies.remove('userInfo')
    }
  })
}
