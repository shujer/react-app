import * as api from '@services/user'
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
  effects: {
    async loginByPhoneNumber(playload, state) {
      this.stateChanger({stepUp: 'submit'})
      let {data} = await api.loginByPhoneNumber(playload)
      if (data.s === 0) {
        this.stateChanger({stepUp: 'success'})
      } else {
        this.stateChanger({stepUp: 'failure'})
      }
    },
    async loginByEmail(playload, state) {
      this.stateChanger({stepUp: 'submit'})
      let {data} = await api.loginByEmail(playload)
      if (data.s === 0) {
        this.stateChanger({stepUp: 'success'})
      } else {
        this.stateChanger({stepUp: 'failure'})
      }
    }
  }
}
