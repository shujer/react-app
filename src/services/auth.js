import {post, request, get} from '@utils/request'

/**
 * @export
 * @param {*} {phoneNumber, username, password}
 * @returns
 */
export async function register({phoneNumber, username, password}) {
  return post('/api/register', {
    data: {
      phoneNumber,
      username,
      password
    }
  })
}

/**
 *
 * @export
 * @param {*} {phoneNumber, password}
 * @returns
 */
export async function loginByPhoneNumber({phoneNumber, password}) {
  return post('/api/juejin/auth/type/phoneNumber', {
    data: {
      phoneNumber,
      password
    }
  })
}

/**
 *
 * @export
 * @param {*} {email, password}
 * @returns
 */
export async function loginByEmail({email, password}) {
  return post('/api/juejin/auth/type/email', {
    data: {
      email,
      password
    }
  })
}



/**
 * 退出登录
 * @export
 * @returns
 */
export async function logout() {
  return request('/api/juejin/auth',{method:'DELETE'})
}


/**
 *获取个人信息
 * @export
 * @param {*} {uid, token, device_id}
 * @returns
 */
export async function getUserInfo({uid, token, device_id}) {
  return get(`/api/user/getUserInfo`, {
    params: {
      src: 'mobile',
      current_uid: uid,
      uid,
      token,
      device_id
    }
  })
}

/**
 * 发短信
 * @param  {} {mobilePhoneNumber
 * @param  {} token=''
 * @param  {} device_id=''}
 */
export async function sendSmsCodeToUser({mobilePhoneNumber, token='', device_id=''}) {
  return post('/api/sms/sendSmsCodeToUser', {
    data: {
      src: 'mobile',
      token,
      device_id,
      mobilePhoneNumber,
      ticket: '8G8sZBN0BT91g-rAFIxsE_TlDqsBYqUCXHm9Jg-u2vaBUkYn51mXstBY-nnwafVDu7RgCwSBb9A*',
      useType: 'signup'
    }
  })
}