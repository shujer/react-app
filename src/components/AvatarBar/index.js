import React from 'react'
import Moment from '@components/Moment'
import Avatar from '@components/Avatar'
import './style.less'

const AvatarBar = ({userInfo, comment, isComment}) => {
  return (
    <div id={userInfo.id} className="bar">
      {/* 头像 */}
      <div className="avatar">
        <Avatar userInfo={userInfo} />
      </div>
      {/* 用户信息 */}
      <div className="userInfo">
        <div className="userName">{userInfo.screenName}</div>
        <div className="userOccupation">
          {userInfo.occupation ? (
            <>
              <span className="occupation">{userInfo.occupation}</span>
              {` · `}
            </>
          ) : null}
          {isComment ? <Moment date={comment.publishDateStr} /> : null}
        </div>
      </div>

      <div className="commentStatus">
        {isComment ? (
          <>
            <small className="like">
              <i className="iconfont icon-dianzan" />
              {comment.likeCount}
            </small>
            <small className="count">
              <i className="iconfont icon-reply1" />
            </small>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default AvatarBar
