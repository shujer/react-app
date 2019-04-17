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
    resetTabList(state, {tabList}) {
      return {
        ...state,
        tabList: tabList || state.tabList
      }
    },
    resetEntryList(state, {articleFeed, more = false}) {
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
    /**
     * @description 加载首页的文章列表
     * @param {object} playload : more 判断是上拉加载下一页 或者 下拉刷新；category； all/id
     */
    async getEntryByListAsync(playload, state) {
      try {
        let more = playload && playload.more ? true : false
        if (more && !state.home.hasNextPage) {
          Toast.info('没有更多了', 1.5)
        } else {
          let after = more ? state.home.after : ''
          let {data} = await api.entry.getArticleAfter({after})
          if (
            data &&
            data.data.articleFeed.items.pageInfo.endCursor - state.home.after < Number.EPSILON
          ) {
            Toast.info('已经是最新的', 1.5)
          } else {
            dispatch.home.resetEntryList({...data.data, more})
          }
        }
      } catch (e) {
        console.error(e)
      }
    }
  })
}
