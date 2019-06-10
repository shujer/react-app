import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, Icon} from 'antd-mobile'
import emptyAvatar from '@assets/icons/profile/empty_avatar_user.png'
import LazyImg from '@components/LazyImg'
import Level from '@components/Level'
import TextAnimation from './TextAnimation'
import './style.less'

class PostData extends Component {
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
    return (
      <div className="wrap">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.history.goBack()
          }}
          style={{
            width: '100%',
            color: '#000',
            top: 0
          }}
          leftContent={['文章数据']}
        />
        <div className="content postdataContainer">
          <div className="header">
            <div className="avatar">
              <LazyImg src={user.avatarLarge} alternate={emptyAvatar} />
            </div>
            <div className="username">
              {user.username || ''}
              <Level level={user.level} />
            </div>
            <div className="share">分享{user.postedEntriesCount}篇</div>
          </div>
          <div>
            <TextAnimation str={`${user.totalCollectionsCount}`} />
            <div>
              <i className="juejin-icon-xs post-user-data-like"></i>
              获得点赞数
            </div>
          </div>
          <div>
            <TextAnimation str={`${user.totalViewsCount}`} />
            <div>
            <i className="juejin-icon-xs post-user-data-read"></i>
              获得阅读数
            </div>
          </div>
          <div>
            <TextAnimation str={`${user.totalCommentsCount}`} />
            <div>
            <i className="juejin-icon-xs post-user-data-comment"></i>
              获得评论数
            </div>
          </div>
        </div>
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
)(PostData)
