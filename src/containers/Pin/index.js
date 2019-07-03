import React, { Component } from 'react'
import { connect } from 'react-redux'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import ShortStr from '@components/ShortStr'
import TagLink from '@components/Tag'
import { getTimefromNow } from '@utils/timeHelper'
import FollowButton from '@components/FollowButton'
import './style.less'

@withNavBarRightLayout('沸点详情页')
class PostContainer extends Component {
  componentDidMount () {
    this.props.getPinById({ id: this.props.match.params.id })
  }
  componentWillUnmount () {
    this.props.emptyPin()
  }

  render () {
    let { user, detail } = this.props
    return (
      <div className='pinContainer content' key={detail.objectId}>
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
        <div className='pinContent'>{detail.content}</div>
        {detail.topic ? (
          <TagLink title={detail.topic.title} id={detail.topic.objectId} />
        ) : null}
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
