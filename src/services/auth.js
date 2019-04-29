import {post, request} from '@utils/request'

export async function register({phoneNumber, username, password}) {
  return post('/register', {
    data: {
      phoneNumber,
      username,
      password
    }
  })
}

export async function loginByPhoneNumber({phoneNumber, password}) {
  return post('/juejin/auth/type/phoneNumber', {
    data: {
      phoneNumber,
      password
    }
  })
}

export async function loginByEmail({email, password}) {
  return post('/juejin/auth/type/email', {
    data: {
      email,
      password
    }
  })
}

export async function logout() {
  return request('/juejin/auth',{method:'DELETE'})
}
