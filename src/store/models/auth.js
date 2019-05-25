import * as api from '@services/auth'
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
        isLogin,
        currentState: isLogin ? 'profile' : 'login form'
      }
    }
  },

  effects: dispatch => ({
    getAuth(playload, state) {
      let userInfo = loadData('juejin_userInfo')
      if (userInfo) {
        return new Promise(async (resolve, reject) => {
          if (state.isLogin) resolve(true)
          await api
            .getUserInfo({
              uid: userInfo.uid,
              token: userInfo.token,
              device_id: userInfo.clientId
            })
            .then(response => {
              let data = response.data
              dispatch.auth.setUser({userDetail: data.d, userInfo})
              dispatch.auth.setLoginState({isLogin: true})
              resolve(true)
            })
            .catch(err => {
              dispatch.auth.setLoginState({isLogin: false})
              reject(err)
            })
        })
      } else {
        dispatch.auth.setLoginState({isLogin: false})
      }
    },

    loginByPhoneNumber(playload, state) {
      dispatch.auth.stateChanger({stepUp: 'submit'})
      return new Promise((resolve, reject) => {
        api
          .loginByPhoneNumber(playload)
          .then(response => {
            let data = response.data
            let userInfo = {
              token: data.token,
              clientId: data.clientId,
              uid: data.userId
            }
            let userDetail = data.user
            Cookies.set('userInfo', userInfo, {expires: 7, path: '/'})
            saveData('juejin_userInfo', userInfo)
            dispatch.auth.setUser({userDetail, userInfo})
            dispatch.auth.setLoginState({isLogin: true})
            dispatch.auth.stateChanger({stepUp: 'success'})
            window.location.reload()
            resolve()
          })
          .catch(err => {
            dispatch.auth.stateChanger({stepUp: 'failure'})
            if (err.response.status === 401) {
              Toast.info('用户名或密码错误', 1.5)
            } else {
              Toast.info('未知错误，请稍后重试', 1.5)
            }
            reject(err)
          })
      })
    },

    loginByEmail(playload, state) {
      dispatch.auth.stateChanger({stepUp: 'submit'})
      return new Promise((resolve, reject) => {
        api
          .loginByEmail(playload)
          .then(response => {
            let data = response.data
            let userInfo = {
              token: data.token,
              clientId: data.clientId,
              uid: data.userId
            }
            let userDetail = data.user
            Cookies.set('userInfo', userInfo, {expires: 7, path: '/'})
            saveData('juejin_userInfo', userInfo)
            dispatch.auth.setUser({userDetail, userInfo})
            dispatch.auth.setLoginState({isLogin: true})
            dispatch.auth.stateChanger({stepUp: 'success'})
            window.location.reload()
            resolve()
          })
          .catch(err => {
            dispatch.auth.stateChanger({stepUp: 'failure'})
            if (err.response.status === 401) {
              Toast.info('用户名或密码错误', 1.5)
            } else {
              Toast.info('未知错误，请稍后重试', 1.5)
            }
            reject(err)
          })
      })
    },

    async logout(playload, state) {
      await api.logout()
      dispatch.auth.stateChanger({stepUp: 'logout'})
      removeData('juejin_userInfo')
      Cookies.remove('userInfo')
      dispatch.auth.setLoginState({isLogin: false})
      window.location.reload()
    }
  })
}
