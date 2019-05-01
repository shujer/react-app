import {loadData, saveData} from '@utils/localstorageHelper'
import api from '@services/api'
import {Toast} from 'antd-mobile'
import {getUniqueList} from '@utils/listHelper'

function getBeforeRank(list) {
  let len = list.length
  return len >= 1 ? list[len - 1].rankIndex : ''
}

export default {
  namespace: 'home',
  state: {
    tabList: [],
    entryList: []
  },
  reducers: {
    resetTabList(state, {tabList}) {
      return {
        ...state,
        tabList: tabList || state.tabList
      }
    },
    resetEntryList(state, {entryList = [], more = false}) {
      return {
        ...state,
        entryList:
          more === false
            ? [...entryList]
            : getUniqueList([...state.entryList, ...entryList], 'objectId')
      }
    },
    emptyEntryList(state) {
      return {
        ...state,
        entryList: []
      }
    }
  },

  effects: dispatch => ({
    async queryTabList(playload, state) {
      clearTimeout(this.timer)
      let info = loadData('juejin_userInfo') || {}
      await api.category
        .getCategories(info)
        .then(data => {
          if (data.s !== 1) throw Error
          let tabList = data.d['categoryList'].map(val => {
            return {
              ...val,
              show: true
            }
          })
          saveData('tabList', tabList)
          dispatch.home.resetTabList({tabList})
        })
        .catch(err => {
          Toast.info('网络似乎出现了点问题', 1.5)
        })
    },

    async getTabListAsync(playload, state) {
      let tabList = loadData('tabList')
      if (tabList === null) {
        dispatch.home.queryTabList()
      } else {
        dispatch.home.resetTabList({tabList})
      }
    },

    async resetTabListAsync(playload, state) {
      await saveData('tabList', playload.tabList)
      dispatch.home.resetTabList(playload)
    },

    async getEntryByListAsync({more = false, category = 'all'}, state) {
      clearTimeout(this.timer)
      category = category === '' ? 'all' : category
      let before = more ? getBeforeRank(state.home.entryList) : ''
      await api.entry
        .getEntry({category, before})
        .then(data => {
          if (data.s !== 1) throw Error
          let {d: {entrylist}} = data
          let entryList = entrylist.filter(
            val => val.originalUrl.split('https://juejin.im')[1]
          )
          dispatch.home.resetEntryList({entryList, more})
        })
        .catch(err => {
          Toast.info('网络似乎出现了点问题', 1.5)
        })
    }
  })
}
