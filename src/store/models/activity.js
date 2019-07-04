import { Toast } from 'antd-mobile'
import { loadData, saveData } from '@utils/localstorageHelper'
import * as api from '@services/pin'
import { getUniqueList } from '@utils/listHelper'

export default {
  namespace: 'activity',
  state: {
    name: 'activity',
    topicList: [
      {
        name: '关注',
        title: 'following',
        link: '/activity/followed',
        show: true
      },
      { name: '推荐', title: 'all', link: '/activity/all', show: true },
      { name: '热门', title: 'hot', link: '/activity/hot', show: true },
      {
        name: '开源推荐',
        title: 'topic1',
        link: '/activity/topic/5c09ea2b092dcb42c740fe73',
        show: true
      },
      {
        name: '内部招聘',
        title: 'topic2',
        link: '/activity/topic/5abb61e1092dcb4620ca3322',
        show: true
      },
      {
        name: '掘金相亲',
        title: 'topic3',
        link: '/activity/topic/5abcaa67092dcb4620ca335c',
        show: true
      },
      {
        name: '上班摸鱼',
        title: 'topic4',
        link: '/activity/topic/5c106be9092dcb2cc5de7257',
        show: true
      },
      {
        name: '应用安利',
        title: 'topic5',
        link: '/activity/topic/5b514af1092dcb61bd72800d',
        show: true
      },
      {
        name: '开发工具',
        title: 'topic6',
        link: '/activity/topic/5abb67d2092dcb4620ca3324',
        show: true
      },
      {
        name: 'New资讯',
        title: 'topic7',
        link: '/activity/topic/5c46a17f092dcb4737217152',
        show: true
      }
    ],
    entryList: [],
    pageInfo: {},
    page: 0
  },
  reducers: {
    resetEntryList (state, { more, entryList = [], pageInfo = {}, page = 0 }) {
      return {
        ...state,
        pageInfo,
        entryList:
          more === false
            ? [...entryList]
            : getUniqueList([...state.entryList, ...entryList], 'objectId'),
        page
      }
    },
    emptyEntryList (state, { category }) {
      return {
        ...state,
        entryList: [],
        pageInfo: {},
        page: 1
      }
    },
    resetTopicList (state, { topicList }) {
      return {
        ...state,
        topicList: topicList || state.topicList
      }
    }
  },
  effects: dispatch => ({
    async getTopicListAsync (playload, state) {
      let topicList = loadData('topicList')
      if (topicList === null) {
        saveData('topicList', state.activity.topicList)
      } else {
        dispatch.activity.resetTopicList({ topicList })
      }
    },
    async resetTopicListAsync (playload, state) {
      saveData('topicList', playload.topicList)
      dispatch.activity.resetTopicList(playload)
    },
    // 获取推荐沸点列表
    async getRecommendList (playload, state) {
      let { more } = playload
      let after
      return new Promise((resolve, reject) => {
        if (more) after = state.activity.pageInfo.endCursor || ''
        api
          .getRecommendPins({ after })
          .then(data => {
            let {
              data: {
                recommendedActivityFeed: {
                  items: { edges, pageInfo }
                }
              }
            } = data
            dispatch.activity.resetEntryList({
              entryList: edges.map(entry => {
                let item = entry.node.targets[0]
                item.objectId = item.id
                item.user.objectId = item.user.id
                return item
              }),
              pageInfo
            })
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    },
    // 获取热门沸点
    async getHotList (playload, state) {
      let { more } = playload
      let after
      return new Promise((resolve, reject) => {
        if (more) after = state.activity.pageInfo.endCursor || ''
        api
          .getHotPins({ after })
          .then(data => {
            let {
              data: {
                popularPinList: {
                  items: { edges, pageInfo }
                }
              }
            } = data

            dispatch.activity.resetEntryList({
              entryList: edges.map(entry => {
                let item = entry.node
                item.objectId = item.id
                item.user.objectId = item.user.id
                return item
              }),
              pageInfo
            })
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    },
    // 获取子主题沸点
    async getPinTopicList (playload, state) {
      let {
        more,
        params: { id }
      } = playload
      return new Promise((resolve, reject) => {
        api
          .getPinTopicList({
            topicId: id,
            page: state.activity.page + 1,
            pageSize: 20,
            uid: state.auth.userInfo.uid,
            token: state.auth.userInfo.token,
            device_id: state.auth.userInfo.clientId
          })
          .then(data => {
            dispatch.activity.resetEntryList({
              more,
              entryList: data['list'],
              page: state.activity.page + 1
            })
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    },
    // 获取关注沸点
    async getFollowPins (playload, state) {
      if (!state.auth.isLogin) {
        Toast.info('请先登录', 1.5)
        return
      }
      let { more } = playload
      let after
      return new Promise((resolve, reject) => {
        if (more) after = state.activity.pageInfo.endCursor || ''
        api
          .getFollowPins({
            after,
            device_id: state.auth.userInfo.clientId,
            token: state.auth.userInfo.token,
            uid: state.auth.userInfo.uid
          })
          .then(data => {
            let {
              data: {
                followingActivityFeed: {
                  items: { edges, pageInfo }
                }
              }
            } = data

            dispatch.activity.resetEntryList({
              entryList: edges
                .filter(
                  entry =>
                    entry.node.action === 'LIKE_PIN'
                )
                .map(entry => {
                  let {
                    node: { targets }
                  } = entry
                  let item = targets[0]
                  item.objectId = item.id
                  item.user.objectId = item.user.id
                  return item
                }),
              pageInfo
            })
          })
          .catch(err => {
            console.log(err)
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    },
    async getEntry (playload, state) {
      let {
        more,
        params: { category, id }
      } = playload
      if (!more) {
        // 新请求清空列表
        await dispatch.activity.emptyEntryList({ category })
      }
      // 选择沸点类型
      switch (category) {
        case 'topic':
          if (id) dispatch.activity.getPinTopicList(playload)
          break
        case 'all':
          dispatch.activity.getRecommendList(playload)
          break
        case 'hot':
          dispatch.activity.getHotList(playload)
          break
        case 'followed':
          dispatch.activity.getFollowPins(playload)
          break
        default:
          dispatch.activity.getRecommendList(playload)
      }
    }
  }),
  subscriptions: {}
}
