import React from 'react'
import {withRouter} from 'react-router-dom'
import {LikeIcon, CommentIcon} from '@components/Icons'
import Tags from '@components/ShortStr'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import './style.less'

const PostItem = ({item, ...props}) => {
  let {
    title,
    content,
    commentsCount,
    likeCount,
    originalUrl,
    screenshot,
    tags,
    user
  } = item
  let extraContent = (
    <Tags
      str={tags
        .slice(0, 2)
        .map(val => val.title)
        .join(' / ')}
      len={15}
    />
  )
  let url = originalUrl.split('https://juejin.im')[1]
  return (
    <div className="myEntry">
      <div className="entryAvatar">
        <AvatarBar
          user={user}
          appendContent={[<UserLink {...user} />]}
          extraContent={[extraContent]}
        />
      </div>
      <div
        className="entryBox"
        onClick={() => {
          props.history.push(url || '#')
        }}
      >
        <div className="text">
          <h3 className="title">{title}</h3>
          <small className="content">{content}</small>
        </div>
        {screenshot ? (
          <div className="screenshot">
            <img src={screenshot} alt="screenshot" />
          </div>
        ) : null}
      </div>
      <div className="info">
        <div>
          <LikeIcon isLike={user.isLike || false} /> {likeCount ? likeCount : '赞'}
        </div>
        <div>
          <CommentIcon/> {commentsCount ? commentsCount : '评论'}
        </div>
      </div>
    </div>
  )
}

export default withRouter(PostItem)
