import {loadData, saveData} from '@utils/localstorageHelper'
import {Toast} from 'antd-mobile'
import {getEntry} from '@services/entry'
import {getCategories} from '@services/category'
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
    queryTabList(playload, state) {
      let info = loadData('juejin_userInfo') || {}
      return new Promise((resolve, reject) => {
        getCategories(info)
          .then(response => {
            const data = response.data
            let tabList = data.d['categoryList'].map(val => {
              return {
                ...val,
                show: true
              }
            })
            saveData('tabList', tabList)
            dispatch.home.resetTabList({tabList})
            resolve(tabList)
          })
          .catch(error => {
            Toast.info('网络似乎出现了点问题', 1.5)
            // reject(error)
          })
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
      category = category === '' ? 'all' : category
      let before = more ? getBeforeRank(state.home.entryList) : ''
      return new Promise((resolve, reject) => {
        getEntry({category, before})
          .then(response => {
            let data = response.data
            let {d: {entrylist}} = data
            let entryList = entrylist.filter(
              val => val.originalUrl.split('https://juejin.im')[1]
            )
            dispatch.home.resetEntryList({entryList, more})
            resolve(entrylist)
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
            // reject()
          })
      })
    }
  })
}
