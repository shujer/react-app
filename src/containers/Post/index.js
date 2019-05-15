import React, {Component} from 'react'
import {connect} from 'react-redux'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import ShortStr from '@components/ShortStr'
import Level from '@components/Level'
import FollowButton from '@components/FollowButton'
import './style.less'
import '@assets/highlight/default.min.css'

@withNavBarRightLayout('文章详情页')
class PostContainer extends Component {
  state = {
    content: '',
    postInfo: {}
  }
  componentDidMount() {
    this.props.getPostAsync({id: this.props.match.params.id})
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== '') {
      this.setState({
        content: nextProps.content
      })
    }
    if (nextProps.postInfo.user) {
      this.setState({
        postInfo: nextProps.postInfo
      })
    }
  }
  componentWillUnmount() {
    this.props.emptyPost()
  }
  render() {
    let {user, title, screenshot} = this.state.postInfo
    return (
      <div className="postContainer" key={title}>
        <AvatarBar
          size="medium"
          className="avatarBar"
          user={user}
          appendContent={[
            <div>
              <UserLink {...user} />
              <Level
                level={user ? user.level : 0}
                style={{height: '12px', marginLeft: '.5rem'}}
              />
            </div>,
            <ShortStr
              str={user ? `${user.jobTitle} @  ${user.company}` : ''}
              len={15}
            />
          ]}
          extraContent={[<FollowButton />]}
        />
        <div className="postDetail">
          <h1>{title}</h1>
          {screenshot ? <img src={screenshot} alt="screenshot" /> : null}
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: this.state.content
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

const mapDispatch = ({post: {getPostAsync, emptyPost}}) => ({
  getPostAsync: playload => getPostAsync(playload),
  emptyPost: () => emptyPost
})

export default connect(
  mapState,
  mapDispatch
)(PostContainer)
