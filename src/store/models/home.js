export default {
  state: {
    tabList: [
      {title: '首页', show: true},
      {title: '关注', show: true},
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
        tabList
      }
    }
  },
  effects: {

  }
}