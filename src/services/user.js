import {stringify} from 'qs'
import {get, post} from '@utils/request'

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
  return post('/api/auth/type/phoneNumber', {
    body: {
      phoneNumber,
      password
    }
  })
}

export async function loginByEmail({email, password}) {
  return post('/api/auth/type/email', {
    body: {
      email,
      password
    }
  })
}

export async function getProfileInfo({uid}) {
  return get(`/api/profile?uid=${uid}`)
}

export async function getUserInfo({uid}) {
  return get(`/api/user?uid=${uid}`)
}
