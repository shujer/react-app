import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ShareWhiteIcon } from '@components/Icons'
import { NavBar, Icon } from 'antd-mobile'
import LazyImg from '@components/LazyImg'
import ShareActionSheet from '@components/ShareActionSheet'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import ShortStr from '@components/ShortStr'
import Level from '@components/Level'
import FollowButton from '@components/FollowButton'
import EmptyImage from '@assets/icons/post/entry_image_default.png'
import './style.less'
import '@assets/highlight/default.min.css'

class PostContainer extends Component {
  state = {
    id: this.props.match.params.id
  }
  componentDidMount () {
    if (this.state.id) {
      this.props.getPostAsync({ id: this.state.id })
    }
  }
  componentWillUnmount () {
    this.props.emptyPost()
  }
  render () {
    let { user, title, screenshot } = this.props.postInfo
    return (
      <div className='postContainer' key={this.state.id}>
        <NavBar
          mode='light'
          icon={<Icon type='left' />}
          onLeftClick={() => {
            this.props.history.goBack()
          }}
          style={{
            width: '100%',
            color: '#000',
            position: 'fixed',
            top: 0
          }}
          leftContent={['文章详情页']}
          rightContent={[
            <ShareActionSheet key='1' icon={<ShareWhiteIcon />} />
          ]}
        />
        <div style={{ paddingBottom: '43px' }} />
        <AvatarBar
          size='medium'
          className='avatarBar'
          user={user}
          appendContent={[
            <div>
              <UserLink {...user} />
              <Level
                level={user ? user.level : 0}
                style={{ height: '12px', marginLeft: '.5rem' }}
              />
            </div>,
            <ShortStr
              str={user ? `${user.jobTitle} @  ${user.company}` : ''}
              len={15}
            />
          ]}
          extraContent={[
            <FollowButton currentId={user ? user.objectId : ''} />
          ]}
        />
        <div className='postDetail'>
          <h1>{title}</h1>
          {screenshot ? (
            <div className='cover'>
              <LazyImg src={screenshot} alternate={EmptyImage} />{' '}
            </div>
          ) : null}
          <div
            className='content'
            dangerouslySetInnerHTML={{
              __html: this.props.content
            }}
          />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  content: state.post.content,
  postInfo: state.post.postInfo
})

const mapDispatch = ({ post: { getPostAsync, emptyPost } }) => ({
  getPostAsync: playload => getPostAsync(playload),
  emptyPost: () => emptyPost
})

export default connect(
  mapState,
  mapDispatch
)(PostContainer)
