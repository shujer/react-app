import React, {Component} from 'react'
import {connect} from 'react-redux'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import ShortStr from '@components/ShortStr'
import {getTimefromNow} from '@utils/timeHelper'
import FollowButton from '@components/FollowButton'

@withNavBarRightLayout('沸点详情页')
class PostContainer extends Component {
  state = {
    content: '',
    item: {}
  }
  render() {
    let {user, title, } = this.state.item
    return (
      <div className="postContainer" key={title}>
        <AvatarBar
          size="medium"
          className="avatarBar"
          user={user}
          appendContent={[
            <UserLink {...user} />,
            <ShortStr
            str={
              user
                ? `${user.jobTitle} @  ${user.company} · ${getTimefromNow(
                    this.state.item.createdAt
                  )}`
                : ''
            }
            len={15}
          />
          ]}
          extraContent={[<FollowButton />]}
        />
        详情
      </div>
    )
  }
}

const mapState = state => ({
  content: state.post.content,
  postInfo: state.post.postInfo
})

const mapDispatch = ({post: {getPostAsync, emptyPost}}) => ({
  getPostAsync: playload => getPostAsync(playload),
  emptyPost: () => emptyPost
})

export default connect(
  mapState,
  mapDispatch
)(PostContainer)
