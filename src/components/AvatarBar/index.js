import React from 'react'
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
          {appendContent.map((val, index) => <div key={index}>{val}</div>)}
        </div>
      </div>
      <small className="extra">{extraContent}</small>
    </div>
  )
}

export default AvatarBar
