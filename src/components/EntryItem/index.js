import React from 'react'
import EntryInfo from '@components/EntryInfo'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import './style.less'
const Item = ({item}) => {
  let {title, content, commentsCount, objectId, screenshot, tags, user} = item
  let extraContent = tags.slice(0,2).map(val=>val.title).join(' / ')
  return (
    <div className="myEntry">
      <div className="entryAvatar">
        <AvatarBar user={user} appendContent={<UserLink {...user} />} extraContent={extraContent}/>
      </div>
      <div className="entryBox">
      <div>
      <div className="title">{title}</div>
        <div className="content">{content}</div>
      </div>
      {screenshot ? <img src={screenshot} alt="screenshot" align="right"/> : null}
      </div>
      <div className="info">
        <EntryInfo likeCount={0} commentsCount={commentsCount} />
      </div>
    </div>
  )
}

export default Item
