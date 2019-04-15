import React from 'react'
import './style.less'
const EntryInfo = ({likeCount, commentsCount}) => {
  return (
    <span className="entryStatus">
      <small className="like">
        <i className="iconfont icon-dianzan" />
        {likeCount ? likeCount : "赞"}
      </small>
      <small className="count">
        <i className="iconfont icon-reply1" />
        {commentsCount ? commentsCount : "评论"}
      </small>
    </span>
  )
}

export default EntryInfo