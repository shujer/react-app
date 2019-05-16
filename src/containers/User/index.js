import React, {Component} from 'react'
import {connect} from 'react-redux'
import {List, WhiteSpace} from 'antd-mobile'
import Tabs from '@components/Tabs'
import UserBar from './UserBar'
import NavBar from './NavBar'
import {BlogIcon} from '@components/Icons'
import './style.less'

class User extends Component {
  componentWillMount() {
    let {
      match: {
        params: {id}
      }
    } = this.props
    this.props.getUserInfo({ids: id})
  }

  render() {
    let {user} = this.props
    const tabs = [
      {tag: 'activities', title: '动态'},
      {tag: 'posts', title: '专栏' + (user.postedPostsCount || 0)},
      {tag: 'pins', title: '沸点' + (user.pinCount || 0)},
      {tag: 'shares', title: '分享' + (user.postedEntriesCount || 0)},
      {tag: 'more', title: '更多'}
    ]
    return (
      <div className="wrap RightNavBar">
        <NavBar user={user} />
        <UserBar user={user} />
        <WhiteSpace />
        <Tabs tabs={tabs} mode="light">
          <div className="activity scroll_content ">尚未完善</div>
          <div className="article scroll_content ">尚未完善</div>
          <div className="pin scroll_content ">尚未完善</div>
          <div className="share scroll_content ">尚未完善</div>
          <div className="more scroll_content" style={{height: '800px'}}>
            <List>
              <List.Item>
                <div>赞过的文章</div>
                <small>{user.likedPinCount || 0}</small>
              </List.Item>
              <List.Item>
                <div>关注的标签</div>
                <small>{user.subscribedTagsCount || 0}</small>
              </List.Item>
              <List.Item>
                <div>收藏集</div>
                <small>{user.collectionSetCount || 0}</small>
              </List.Item>
            </List>
            <WhiteSpace />
            <List>
              <List.Item>
                <div>
                  <BlogIcon />
                  {user.blogAddress}
                </div>
              </List.Item>
            </List>
          </div>
        </Tabs>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user.user
})

const mapDispatch = ({user: {getUserInfo}}) => ({
  getUserInfo: playload => getUserInfo(playload)
})

export default connect(
  mapState,
  mapDispatch
)(User)
