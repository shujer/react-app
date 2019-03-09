import React from 'react'
import Moment from '@components/Moment'
import './style.less'

const Avatar = props => {
  return (
    <div id={props.userInfo.id} className="bar">
      {/* 头像 */}
      <div className="avatar">
        <img src={props.userInfo.avatarUrl} alt="头像" />
      </div>
      {/* 用户信息 */}
      <div className="userInfo">
        <div className="userName">{props.userInfo.screenName}</div>
        <div className="userOccupation">
          {props.userInfo.occupation ? (
            <>
              <span className="occupation">{props.userInfo.occupation}</span>
              {` · `}
            </>
          ) : null}
          <Moment date={props.comment.publishDateStr} />
        </div>
      </div>
      <div className="commentStatus">
        <small className="like">
          <i className="iconfont icon-dianzan" />
          {props.comment.likeCount}
        </small>
        <small className="count">
          <i className="iconfont icon-reply1" />
          {props.comment.commentCount}
        </small>
      </div>
    </div>
  )
}

export default Avatar
