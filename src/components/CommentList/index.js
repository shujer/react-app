import React from 'react'
import { connect } from 'react-redux'
import LikeButton from '@components/LikeButton'
import ShortStr from '@components/ShortStr'
import UserLink from '@components/AvatarBar/UserLink'
import AvatarBar from '@components/AvatarBar'
import { getTimefromNow } from '@utils/timeHelper'
import { CommentIcon } from '@components/Icons'
import { List } from 'antd-mobile'
import './style.less'

const Reply = ({ reply, respUser }) => {
  let { userInfo, content, userId } = reply
  return (
    <div className='replyContainer'>
      <div className='replyContent'>
        <strong>
          {userInfo.username}
          {respUser === userId ? '(作者)' : null}：
        </strong>
        {content}
      </div>
    </div>
  )
}

const Comment = ({ comment }) => {
  let {
    userInfo,
    content,
    createdAt,
    topComment,
    respUser,
    id,
    replyCount
  } = comment
  return (
    <div>
      <AvatarBar
        size='medium'
        className='avatarBar'
        user={userInfo}
        appendContent={[
          <UserLink {...userInfo} />,
          <ShortStr
            str={
              userInfo
                ? `${userInfo.jobTitle}${' @ ' + userInfo.company ||
                    ''} · ${getTimefromNow(createdAt)}`
                : ''
            }
            len={17}
          />
        ]}
        extraContent={[
          <div className='commentInfo'>
            <LikeButton currentId={id} />
            <span>
              <CommentIcon /> {replyCount || '评论'}
            </span>
          </div>
        ]}
      />
      <div className='commentContent'>
        <div> {content}</div>
        {topComment ? (
          <div>
            {topComment.map(item => (
              <Reply reply={item} respUser={respUser} key={item.id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

class CommentList extends React.Component {
  componentDidMount () {
    if (this.props.entryId !== undefined) {
      this.props.getCommentById({ entryId: this.props.entryId })
    }
  }

  componentWillUnmount () {
    this.props.emptyComment()
  }

  render () {
    let comments = this.props.comments
    return (
      <List>
        {comments.map(comment => (
          <List.Item key={comment.id}>
            <Comment comment={comment} />
          </List.Item>
        ))}
      </List>
    )
  }
}

const mapState = state => ({
  comments: state.comment.comments
})

const mapDispatch = ({ comment: { getCommentById, emptyComment } }) => ({
  getCommentById: playload => getCommentById(playload),
  emptyComment: () => emptyComment()
})

export default connect(
  mapState,
  mapDispatch
)(CommentList)
