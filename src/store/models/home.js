import {loadData, saveData} from '@utils/localstorageHelper'
import api from '@services/api'
import {getUniqueItemById} from '@utils/listHelper'

export default {
  namespace: 'home',
  state: {
    tabList: [],
    entryList: []
  },
  reducers: {
    //resetTabList
    resetTabList(state, {tabList}) {
      return {
        ...state,
        tabList: tabList || state.tabList
      }
    },
    resetEntryList(state, {entryList}) {
      return {
        ...state,
        entryList: getUniqueItemById([...entryList,...state.entryList])
      }
    }
  },
  effects: dispatch => ({
    async initialTabList() {
      try {
        let tabList = loadData('tabList')
        if (tabList) {
          this.resetTabList({tabList})
          return
        } else {
          let response = await api.category.getCategories()
          if ('err' in response) {
            throw response['err']
          }
          let {data} = response
          tabList = data.d['categoryList']
          tabList = tabList
            .map(val => {
              return {
                ...val,
                title: val['name'],
                name: val['title'],
                show: true
              }
            })
            .filter(val => val.isSubscribe === true)
          await saveData('tabList', tabList)
          dispatch.home.resetTabList({tabList})
        }
      } catch (err) {
        // this.resetTabList({})
      }
    },
    async getTabListAsync(playload, state) {
      let tabList = loadData('tabList')
      dispatch.home.resetTabList({tabList})
    },
    async resetTabListAsync(playload, state) {
      await saveData('tabList', playload.tabList)
      dispatch.home.resetTabList(playload)
    },
    async getEntryByList(playload, state) {
      let {data} = await api.entry.getEntryByTimeline({ limit:20, category:'all'})
      dispatch.home.resetEntryList({entryList:data.d.entrylist})
      console.log(data)
    }
  })
}
