import api from '@services/api'
import Cookies from 'js-cookie'
import {Toast} from 'antd-mobile'
import {removeData, saveData} from '@utils/localstorageHelper'

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
    currentState: 'login form'
  },
  reducers: {
    stateChanger(state, {stepUp}) {
      return {
        ...state,
        currentState: stateTransformer(state.currentState, stepUp)
      }
    }
  },
  effects: dispatch => ({
    async loginByPhoneNumber(playload, state) {
      dispatch.auth.stateChanger({stepUp: 'submit'})
      try {
        let response = await api.auth.loginByPhoneNumber(playload)
        if ('err' in response) {
          throw response.err
        } else {
          let {data} = response
          let userInfo = {
            token: data.token,
            clientId: data.clientId,
            uid: data.user.uid
          }
          Cookies.set('userInfo', userInfo, {expires: 7, path: '/'})
          saveData('juejin_userInfo', userInfo)
          dispatch.auth.stateChanger({stepUp: 'success'})
        }
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
        let response = await api.auth.loginByEmail(playload)
        if ('err' in response) {
          throw response.err
        } else {
          let {data} = response
          let userInfo = {
            token: data.token,
            clientId: data.clientId,
            uid: data.user.uid
          }
          Cookies.set('userInfo', userInfo, {expires: 7, path: '/'})
          saveData('juejin_userInfo', userInfo)
          dispatch.auth.stateChanger({stepUp: 'success'})
        }
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
      removeData('userInfo')
      Cookies.remove('userInfo')
    }
  })
}
