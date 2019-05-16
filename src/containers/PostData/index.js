import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, Icon} from 'antd-mobile'
import emptyAvatar from '@assets/icons/profile/empty_avatar_user.png'
import Level from '@components/Level'
import TextAnimation from './TextAnimation'
import {
  UserDataLikeIcon,
  UserDataReadIcon,
  UserDataCommentIcon
} from '@components/Icons'
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
              <img src={user.avatarLarge || emptyAvatar} alt="avatar" />
            </div>
            <div className="username">
              {user.username || ''}
              <Level level={user.level} height="10" />
            </div>
            <div className="share">分享{user.postedEntriesCount}篇</div>
          </div>
          <div>
            <TextAnimation str={`${user.totalCollectionsCount}`} />
            <div>
              <UserDataLikeIcon />
              获得点赞数
            </div>
          </div>
          <div>
            <TextAnimation str={`${user.totalViewsCount}`} />
            <div>
              <UserDataReadIcon />
              获得阅读数
            </div>
          </div>
          <div>
            <TextAnimation str={`${user.totalCommentsCount}`} />
            <div>
              <UserDataCommentIcon />
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
