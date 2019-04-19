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
    },
    emptyEntryList(state) {
      return {
        ...state,
        entryList: [],
        after: '',
        hasNextPage: false
      }
    }
  },
  effects: dispatch => ({
    async queryTabList() {
      try {
        let info = loadData('juejin_userInfo') || {}
        let response = await api.category.getCategories(info)
        if ('err' in response) {
          throw response['err']
        }
        let {data} = response
        let tabList = data.d['categoryList']
        console.log(tabList)
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
        console.error(err)
      }
    },
    async getTabListAsync(playload, state) {
      let tabList = loadData('tabList')
      // console.log(tabList)
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
          let {data} = await api.entry.getArticleAfter({after, category: playload.category})
          if (
            !more &&
            data &&
            data.data.articleFeed.items.pageInfo.endCursor - state.home.after <
              Number.EPSILON
          ) {
            Toast.info('已经是最新的', 1.5)
          } else {
            dispatch.home.resetEntryList({...data.data, more})
          }
        }
      } catch (e) {
        // console.error(e)
        setTimeout(() => {
          dispatch.home.getEntryByListAsync(playload)
        }, 3000)
      }
    }
  })
}
