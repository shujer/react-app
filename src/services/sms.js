import {post} from '@utils/request'

export async function sendSMSVerifyCode({phoneNumber}) {
  return post(`/smsverif`, {
    body: {
      phoneNumber
    }
  })
}
