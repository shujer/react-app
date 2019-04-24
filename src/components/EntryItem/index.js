import React from 'react'
import {Link} from 'react-router-dom'
import EntryInfo from '@components/EntryInfo'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import './style.less'

const Item = ({item, ...props}) => {
  let {title, content, commentsCount,likeCount, originalUrl, screenshot, tags, user} = item
  let extraContent = tags
    .slice(0, 2)
    .map(val => val.title)
    .join(' / ')
  let url = originalUrl.split('https://juejin.im')[1]
  return (
    <div className="myEntry">
      <div className="entryAvatar">
        <AvatarBar
          user={user}
          appendContent={<UserLink {...user} />}
          extraContent={extraContent}
        />
      </div>
      <Link className="entryBox" to={url || '#'}>
        <div className="text">
          <div className="title">{title}</div>
          {content}
        </div>
        {screenshot ? (
          <div className="screenshot">
            <img src={screenshot} alt="screenshot"/>
          </div>
        ) : null}
      </Link>
      <div className="info">
        <EntryInfo likeCount={likeCount} commentsCount={commentsCount} />
      </div>
    </div>
  )
}

export default Item
