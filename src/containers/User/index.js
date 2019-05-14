import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, Icon, List, WhiteSpace} from 'antd-mobile'
import Tabs from '@components/Tabs'
import Level from '@components/Level'
import UserBar from './UserBar'
import ShareActionSheet from '@components/ShareActionSheet'
import ShareIcon from '@assets/icons/profile/ic_share_white.png'
import DataIcon from '@assets/icons/profile/icon_profile_data.png'
import BlogIcon from '@assets/icons/profile/icon_profile_blog.png'
import './style.less'



class User extends Component {
  state = {
    user: {},
    id: ''
  }

  componentWillMount() {
    let {
      match: {
        params: {id}
      }
    } = this.props
    this.props.getUserInfo({ids: id})
  }

  goBack = () => {
    this.props.history.goBack('')
  }
  render() {
    let {user} = this.props
    const tabs = [
      {tag: 'activities', title: '动态'},
      {tag: 'posts', title: '专栏'+user.postedPostsCount},
      {tag: 'pins', title: '沸点'+user.pinCount},
      {tag: 'shares', title: '分享'},
      {tag: 'more', title: '更多'}
    ]
    return (
      <div className="wrap RightNavBar">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
          style={{color: '#fff'}}
          rightContent={[
            <img
              src={DataIcon}
              alt="..."
              width={18}
              height={18}
              style={{marginRight: '22px'}}
              key="0"
            />,
            <ShareActionSheet
              key="1"
              icon={<img src={ShareIcon} alt="..." width={20} height={20} />}
            />
          ]}
        >
          <div className="barTitle">
            <div className="author">{user.username}</div>
            <Level level={user.level} height="14px" />
          </div>
        </NavBar>
        <UserBar user={user}/>
        <WhiteSpace />
        <Tabs tabs={tabs} mode="light">
          <div className="activity">尚未完善</div>
          <div className="article">尚未完善</div>
          <div className="pin">尚未完善</div>
          <div className="share">尚未完善</div>
          <div className="more">
            <List>
              <List.Item>
                <div>赞过的文章</div>
                <small>{user.likedPinCount}</small>
              </List.Item>
              <List.Item>
                <div>关注的标签</div>
                <small>{user.subscribedTagsCount}</small>
              </List.Item>
              <List.Item>
                <div>收藏集</div>
                <small>{user.collectionSetCount}</small>
              </List.Item>
            </List>
            <WhiteSpace />
            <List>
              <List.Item>
                <div>
                  <img src={BlogIcon} alt="blog" width="14" height="14" />
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
