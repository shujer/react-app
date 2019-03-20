import {loadData, saveData} from '@utils/localstorageHelper'

export default {
  namespace: 'home',
  state: {
    tabList: [
      {title: '前端', show: true},
      {title: '设计', show: true},
      {title: '后端', show: true},
      {title: '人工智能', show: true},
      {title: '运维', show: true},
      {title: 'Android', show: true},
      {title: 'iOS', show: true},
      {title: '产品', show: true},
      {title: '工具资源', show: true}
    ]
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
  effects:{
    async getTabListAsync(playload, state) {
      let tabList = await loadData('tabList')
      this.resetTabList({tabList})
    },
    async resetTabListAsync(playload, state) {
      await saveData('tabList', playload.tabList)
      this.resetTabList(playload)
    }
  }
}
