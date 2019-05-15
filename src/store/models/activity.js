import {loadData, saveData} from '@utils/localstorageHelper'
import {Toast} from 'antd-mobile'
import * as api from '@services/pin'
import {getUniqueList} from '@utils/listHelper'

function getBeforeRank(list) {
  let len = list.length
  return len >= 1 ? list[len - 1].rankIndex : ''
}

export default {
  namespace: 'activity',
  state: {
    name: 'activity',
    tabs: [
      {
        name: '关注',
        title: 'following',
        link: '/activity/followed',
        show: true
      },
      {name: '推荐', title: 'all', link: '/activity/all', show: true},
      {name: '热门', title: 'hot', link: '/activity/hot', show: true},
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
    entryList: []
  },
  reducers: {
    emptyEntryList(state, playload) {
      return {
        ...state,
        entryList: []
      }
    },
    resetEntryList(state, {entryList}) {
      return {
        ...state,
        entryList
      }
    }
  },
  effects: dispatch => ({
    async getHotRecommendList(playload, state) {
      let {
        more,
        params: {category}
      } = playload
      return new Promise((resolve, reject) => {
        let before = more ? getBeforeRank(state.activity.entryList) : ''
        api
          .getHotRecommendList({
            uid: state.auth.userInfo.uid,
            token: state.auth.userInfo.token,
            device_id: state.auth.userInfo.clientId
          })
          .then(response => {
            console.log(response)
            let data = response.data
            dispatch.activity.resetEntryList({entryList: data.d['list']})
            resolve(data)
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    },

    async getPinTopicList(playload, state) {
      let {
        more,
        params: {id}
      } = playload
      return new Promise((resolve, reject) => {
        api
          .getPinTopicList({
            topicId: id,
            page: 0,
            pageSize: 20,
            uid: state.auth.userInfo.uid,
            token: state.auth.userInfo.token,
            device_id: state.auth.userInfo.clientId
          })
          .then(response => {
            console.log(response)
            let data = response.data
            dispatch.activity.resetEntryList({entryList: data.d['list']})
            resolve(data)
          })
          .catch(err => {
            Toast.info('网络似乎出现了点问题', 1.5)
          })
      })
    },
    async getUserPinList(playload, state) {},
    async getEntry(playload, state) {
      let {
        more,
        params: {category, id}
      } = playload
      if (!more) {
        await dispatch.activity.emptyEntryList()
      }

      if (id && category === 'topic') {
        dispatch.activity.getPinTopicList(playload)
      } else {
        dispatch.activity.getHotRecommendList(playload)
      }
    }
  }),
  subscriptions: {}
}
