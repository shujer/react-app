import {stringify} from 'qs'
import request from '@/utils/request'

export async function getEntryByRank({uid, device_id, token}) {
  let params = {
    src: 'mobile',
    uid,
    device_id,
    token,
    limit: 20,
    category: 'all',
    recomment: 1
  }
  return request(`/api/register${stringify(params)}`)
}
