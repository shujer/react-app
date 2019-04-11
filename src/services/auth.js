import {stringify} from 'qs'
import {get, post, request} from '@utils/request'

export async function register({phoneNumber, username, password}) {
  return post('/api/register', {
    body: {
      phoneNumber,
      username,
      password
    }
  })
}

export async function loginByPhoneNumber({phoneNumber, password}) {
  return post('/api/juejin/auth/type/phoneNumber', {
    body: {
      phoneNumber,
      password
    }
  })
}

export async function loginByEmail({email, password}) {
  return post('/api/juejin/auth/type/email', {
    body: {
      email,
      password
    }
  })
}

export async function logout() {
  return request('/api/juejin/auth',{method:'DELETE'})
}
