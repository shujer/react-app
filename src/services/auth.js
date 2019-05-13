import {post, request, get} from '@utils/request'

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

/**
 * 获取个人信息
 */
export async function getUserInfo({uid, token, device_id}) {
  return get(`/user/getUserInfo`, {
    params: {
      src: 'mobile',
      current_uid: uid,
      uid,
      token,
      device_id
    }
  })
}