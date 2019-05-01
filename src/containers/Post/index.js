import React, {Component} from 'react'
import {connect} from 'react-redux'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import {handleStrOverflow} from '@utils/stringHelper'
import './style.less'
import '@assets/highlight/default.min.css'

@withNavBarRightLayout('文章详情页')
class PostContainer extends Component {
  state = {
    content: '',
    postInfo: {}
  }
  componentWillMount() {
    this.props.getPostAsync({id: this.props.match.params.id})
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== '') {
      this.setState({
        content: nextProps.content
      })
    }
    if (this.props.postInfo.user) {
      this.setState({
        postInfo: this.props.postInfo
      })
    }
  }
  render() {
    let {user, title, screenshot} = this.state.postInfo
    return (
      <div className="postContainer" key={title}>
        <AvatarBar
        className="avatarBar"
          user={user}
          appendContent={[
            <UserLink {...user} />,
            <small>{user ? handleStrOverflow(user.jobTitle, 15) : ''}</small>
          ]}
          extraContent={'关注'}
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

const mapDispatch = ({post: {getPostAsync}}) => ({
  getPostAsync: playload => getPostAsync(playload)
})

export default connect(
  mapState,
  mapDispatch
)(PostContainer)
