import {post} from '@utils/request'

export async function sendSMSVerifyCode({phoneNumber}) {
  return post(`/api/smsverif`, {
    body: {
      phoneNumber
    }
  })
}
