import {loadData, saveData} from '@utils/localstorageHelper'
import api from '@services/api'
import {Toast} from 'antd-mobile'
import {getUniqueItemById} from '@utils/listHelper'

export default {
  namespace: 'home',
  state: {
    tabList: [],
    entryList: [],
    after: '',
    hasNextPage: false
  },
  reducers: {
    //resetTabList
    resetTabList(state, {tabList}) {
      return {
        ...state,
        tabList: tabList || state.tabList
      }
    },
    resetEntryList(state, {articleFeed, more=false}) {
      let items = articleFeed.items
      let entryList = items.edges.map(val => val.node)
      let pageInfo = items.pageInfo
      return {
        ...state,
        entryList: more
          ? getUniqueItemById([...state.entryList, ...entryList], 'id')
          : [...entryList],
        after: pageInfo.endCursor,
        hasNextPage: pageInfo.hasNextPage
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
    async getEntryByListAsync(playload, state) {
      try {
        let more = playload && playload.more ? true : false
        if (more && !state.home.hasNextPage) {
          Toast.info('没有更多了', 1.5)
        } else {
          let {data} = await api.entry.getArticleAfter({
            after: state.home.after
          })
          dispatch.home.resetEntryList({...data.data, more})
        }
      } catch (e) {
        console.error(e)
      }
    }
  })
}
