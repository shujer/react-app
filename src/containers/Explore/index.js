import React, {Component} from 'react'
import {Toast, List, WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import Slides from '@components/Slides'
import SearchBar from '@components/SearchBar'
import PullUpRefresh from '@components/PullUpRefresh'
import {getTimefromNow} from '@utils/timeHelper'
import './style.less'
const items = [
  {
    _id: '5cce9ab151882541925c6990',
    eventUrl: 'https://vue.w3ctech.com/',
    title: '\u7b2c\u4e09\u5c4a VUECONF',
    userId: '551d6923e4b0cd5b623f54da',
    tag: [
      '564c2c7e00b0d1db339370a4',
      '555e9a98e4b00c57d9955f68',
      '5729bce079bc44005cd48388',
      '5a9f573ff265da3f3817620f',
      '5597a05ae4b08a686ce56f6f'
    ],
    tagInfo: [
      {id: '564c2c7e00b0d1db339370a4', title: '\u7ebf\u4e0b\u6d3b\u52a8'},
      {id: '555e9a98e4b00c57d9955f68', title: 'Vue.js'},
      {id: '5729bce079bc44005cd48388', title: 'Vuex'},
      {id: '5a9f573ff265da3f3817620f', title: 'mpvue'},
      {id: '5597a05ae4b08a686ce56f6f', title: '\u524d\u7aef'}
    ],
    content:
      '\u7b2c\u4e09\u5c4aVue.js\u5f00\u53d1\u8005\u5927\u4f1a\u7531Vue.js\u5b98\u65b9\u4e3e\u529e\uff0c\u5c06\u4e8e2019\u5e7406\u670808\u65e5\u5728\u4e0a\u6d77\u6b63\u5f0f\u5f00\u542f\u3002',
    category: '5562b428e4b00c57d9b94b9d',
    startTime: '2019-06-08T01:00:00.000Z',
    endTime: '2019-06-08T09:00:00.000Z',
    city: '\u4e0a\u6d77',
    cityAlias: 'shanghai',
    screenshot:
      'https://user-gold-cdn.xitu.io/155704351798645e54093a5e80076de4430446a14d526.jpg',
    showBanner: 1,
    bannerStartTime: '2019-05-26T16:00:00.000Z',
    bannerEndTime: '2019-06-02T16:00:00.000Z',
    createdAt: '2019-05-05T08:11:29.571Z',
    updatedAt: '2019-05-27T03:06:52.951Z'
  },
  {
    _id: '5cd4cef55188253dba475829',
    eventUrl: 'https://www.bagevent.com/event/2414051?bag_track=juejin',
    title: 'DevOps \u56fd\u9645\u5cf0\u4f1a2019\t',
    userId: '551d6923e4b0cd5b623f54da',
    tag: [
      '564c2c7e00b0d1db339370a4',
      '5602d88360b27db45a7f3bdc',
      '5597a500e4b08a686ce5efc3'
    ],
    tagInfo: [
      {id: '564c2c7e00b0d1db339370a4', title: '\u7ebf\u4e0b\u6d3b\u52a8'},
      {id: '5602d88360b27db45a7f3bdc', title: '\u8fd0\u7ef4'},
      {id: '5597a500e4b08a686ce5efc3', title: '\u5b89\u5168'}
    ],
    content:
      '\u4e0d\u7a7a\u8c08\u3001\u4e0d\u52a1\u865a\uff0c\u4e13\u6ce8 DevOps \u843d\u5730\t',
    category: '5562b428e4b00c57d9b94b9d',
    startTime: '2019-07-05T00:40:00.000Z',
    endTime: '2019-07-05T09:40:00.000Z',
    city: '\u5317\u4eac',
    cityAlias: 'beijing',
    screenshot:
      'https://user-gold-cdn.xitu.io/15574504383691c0dab8af20df71cc5fb0b10035b737f.jpg',
    showBanner: 1,
    bannerStartTime: '2019-05-26T16:00:00.000Z',
    bannerEndTime: '2019-06-02T16:00:00.000Z',
    createdAt: '2019-05-10T01:08:05.738Z',
    updatedAt: '2019-05-10T01:08:05.738Z'
  },
  {
    _id: '5cdcd4bc51882503f649cb19',
    eventUrl: 'https://www.dams.org.cn/\t',
    title: 'DAMS\u4e2d\u56fd\u6570\u636e\u667a\u80fd\u7ba1\u7406\u5cf0\u4f1a\t',
    userId: '551d6923e4b0cd5b623f54da',
    tag: ['564c2c7e00b0d1db339370a4'],
    tagInfo: [
      {id: '564c2c7e00b0d1db339370a4', title: '\u7ebf\u4e0b\u6d3b\u52a8'}
    ],
    content:
      '\u6570\u636e\u6cbb\u7406\u3001\u5927\u6570\u636e\u3001\u8fd0\u7ef4\u3001\u6570\u636e\u5e93\u3001\u91d1\u878d\u79d1\u6280\t',
    category: '5562b428e4b00c57d9b94b9d',
    startTime: '2019-07-19T00:30:00.000Z',
    endTime: '2019-07-19T09:00:00.000Z',
    city: '\u4e0a\u6d77',
    cityAlias: 'shanghai',
    screenshot:
      'https://user-gold-cdn.xitu.io/15579760399438e12d41dfba20bf8a275453ca210ce33.jpg',
    showBanner: 1,
    bannerStartTime: '2019-05-27T16:00:00.000Z',
    bannerEndTime: '2019-06-02T16:00:00.000Z',
    createdAt: '2019-05-16T03:10:52.129Z',
    updatedAt: '2019-05-28T10:16:46.461Z'
  }
]

const icons = [
  {
    title: '文章榜',
    icon: () => <i className="juejin-icon-lg juejin-explorer-entry-board " />
  },
  {
    title: '作者榜',
    icon: () => <i className="juejin-icon-lg juejin-explorer-user-board" />
  },
  {
    title: '看一看',
    icon: () => <i className="juejin-icon-lg juejin-explorer-followee-liked" />
  },
  {
    title: '话题广场',
    icon: () => <i className="juejin-icon-lg juejin-explorer-topic-square" />
  },
  {
    title: '活动',
    icon: () => <i className="juejin-icon-lg juejin-explorer-offline" />
  }
]

@withTabBarBasicLayout
class Explore extends Component {
  componentDidMount() {
    this.props.getEntryByListAsync({
      more: false,
      category: 'all'
    })
  }
  handleSearch = () => {
    this.props.history.push('/search')
  }

  render() {
    return (
      <div className="wrap">
        <div className="header">
          <SearchBar handleSearch={this.handleSearch} />
        </div>
        <div className="scroll_content main">
          <Slides items={items} />
          <div className="icon-list">
            {icons.map(item => (
              <div
                className="icon"
                key={item.title}
                onClick={() => {
                  Toast.info('功能尚未开发', 1)
                }}
              >
                <item.icon />
                <span className="title">{item.title}</span>
              </div>
            ))}
          </div>
          <WhiteSpace />
          <List>
            <List.Item>
              <div className="hot-bar">
                <div>
                  <i className="juejin-icon-sm juejin-explorer_hot_small" />
                  <span>热门文章</span>
                </div>
                <div>
                  <i className="juejin-icon-sm juejin-explorer-tag-settings" />
                  <span>定制热门</span>
                </div>
              </div>
            </List.Item>
            <div>
              <PullUpRefresh onRefresh={() => {}} useBodyScroll>
                {this.props.entryList.map(item => (
                  <List.Item key={item.title}>
                    <div>
                      <h2 className="explore-title">{item.title}</h2>
                      <small>{`${item.likeCount || 0}人赞${' · ' +
                        item.user.username || ''}${' · ' +
                        getTimefromNow(item.createAt) || ''}`}</small>
                    </div>
                  </List.Item>
                ))}
              </PullUpRefresh>
            </div>
          </List>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  entryList: state.home.entryList
})

const mapDispatch = ({home: {getEntryByListAsync}}) => ({
  getEntryByListAsync: playload => getEntryByListAsync(playload)
})

export default connect(
  mapState,
  mapDispatch
)(Explore)
