import {loadData, saveData} from '@utils/localstorageHelper'
import api from '@services/api'
import {Toast} from 'antd-mobile'
import {getUniqueItemById} from '@utils/listHelper'

export default {
  namespace: 'home',
  state: {
    tabList: [],
    entryList: [],
    before: ''
  },
  reducers: {
    resetTabList(state, {tabList}) {
      return {
        ...state,
        tabList: tabList || state.tabList
      }
    },
    resetEntryList(state, {entryList=[], more = false}) {
      return {
        ...state,
        before: entryList.map(val => val.rankIndex).sort()[0],
        entryList:
          more === false
            ? [...entryList]
            : getUniqueItemById([...state.entryList, ...entryList], 'objectId')
      }
    },
    emptyEntryList(state) {
      return {
        ...state,
        entryList: [],
        before: ''
      }
    }
  },

  effects: dispatch => ({
    async queryTabList(playload, state) {
      clearTimeout(this.timer)
      try {
        let info = loadData('juejin_userInfo') || {}
        let response = await api.category.getCategories(info)
        if ('err' in response) {
          throw response['err']
        }
        let tabList = response.data.d['categoryList']
        tabList = tabList
          .map(val => {
            return {
              ...val,
              show: true
            }
          })
          .filter(val => val.isSubscribe === true)
        await saveData('tabList', tabList)
        dispatch.home.resetTabList({tabList})
      } catch (err) {
        this.timer = setTimeout(() => {
         dispatch.home.queryTabList(playload)
        }, 1500)
      }
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
      try {
        category = category === '' ? 'all': category
        let response = await api.entry.getEntryByRank({
          category,
          before: state.home.before
        })
        if ('err' in response) throw response['err']
        let entryList = response.data.d['entrylist']
        dispatch.home.resetEntryList({entryList, more})
      } catch (e) {
        this.timer = setTimeout(() => {
          dispatch.home.getEntryByListAsync({more, category})
        }, 1500)
      }
    }
  })
}
