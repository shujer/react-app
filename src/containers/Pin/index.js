import React, { Component } from 'react'
import { connect } from 'react-redux'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import ShortStr from '@components/ShortStr'
import TagLink from '@components/Tag'
import { getTimefromNow } from '@utils/timeHelper'
import FollowButton from '@components/FollowButton'
import CommentList from '@components/CommentList'
import { WhiteSpace } from 'antd-mobile'
import './style.less'

@withNavBarRightLayout('沸点详情页')
class PostContainer extends Component {
  state = {
    id: this.props.match.params.id
  }

  componentDidMount () {
    if (this.state.id) {
      this.props.getPinById({ id: this.state.id })
    }
  }
  componentWillUnmount () {
    this.props.emptyPin()
  }

  render () {
    let { user, detail } = this.props
    return (
      <div className='content' key={this.state.id}>
        <div className='pinContainer'>
          <AvatarBar
            size='medium'
            className='avatarBar'
            user={user}
            appendContent={[
              <UserLink {...user} />,
              <ShortStr
                str={
                  user
                    ? `${user.jobTitle}${' @ ' + user.company ||
                        ''} · ${getTimefromNow(detail.createdAt)}`
                    : ''
                }
              />
            ]}
            extraContent={[
              <FollowButton currentId={user ? user.objectId : ''} />
            ]}
          />
          <div className='pinContent'>
            <div>{detail.content}</div>
            {detail.topic ? (
              <TagLink title={detail.topic.title} id={detail.topic.objectId} />
            ) : null}
          </div>
        </div>

        <WhiteSpace />
        <div className='commentList'>
          <CommentList entryId={this.state.id} />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.pin.user,
  detail: state.pin.detail
})

const mapDispatch = ({ pin: { getPinById, emptyPin } }) => ({
  getPinById: playload => getPinById(playload),
  emptyPin: () => emptyPin
})

export default connect(
  mapState,
  mapDispatch
)(PostContainer)
