import {stringify} from 'qs'
import {get, put} from '@utils/request'

export async function getCategories() {
  return get('/api/tag/categories', {
    headers: {
      'X-Juejin-Client': '1554973523289',
      'X-Juejin-Src': 'mobile',
      'X-Juejin-Token': 'eyJhY2Nlc3NfdG9rZW4iOiJ2RW5aMVZZU2lCOUFId0VmIiwicmVmcmVzaF90b2tlbiI6ImpseUNOemV2dnFvWFhPTVkiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
      'X-Juejin-Uid': '5c9393e6e51d45108d321225'
    }
  })
}

export async function subscribe(){
  return put('/api/tag/subscribe/55964d83e4b08a686cc6b353')
}