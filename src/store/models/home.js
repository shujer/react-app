import {loadData, saveData} from '@utils/localstorageHelper'
import api from '@services/api'

export default {
  namespace: 'home',
  state: {
    tabList: []
  },
  reducers: {
    //resetTabList
    resetTabList(state, {tabList}) {
      return {
        ...state,
        tabList: tabList || state.tabList
      }
    }
  },
  effects: {
    async initialTabList() {
      try {
        let tabList = loadData('tabList')
        console.log(tabList)
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
          this.resetTabList({tabList})
        }
      } catch (err) {
        // this.resetTabList({})
      }
    },
    async getTabListAsync(playload, state) {
      let tabList = loadData('tabList')
      this.resetTabList({tabList})
    },
    async resetTabListAsync(playload, state) {
      await saveData('tabList', playload.tabList)
      this.resetTabList(playload)
    }
  }
}
