import React from 'react'
import Moment from '@components/Moment'
import Avatar from '@components/Avatar'
import './style.less'

const AvatarBar = ({user, appendContent, extraContent}) => {
  return (
    <div className="avatarBar">
      <div className="append">
        <div className="avatarContainer">
          <Avatar {...user} />
        </div>
        <div className="userlinkContainer">
          {appendContent}
        </div>
      </div>
      <div className="extra">{extraContent}</div>
    </div>
  )
}

export default AvatarBar
