import React from 'react'
import Avatar from '@components/Avatar/auth'
import './style.less'

const AvatarBar = ({user, appendContent, extraContent, size}) => {
  let style = {
    height: '1.2rem',
    width: '1.2rem'
  }
  if (size && size === 'medium') {
    style = {
      height: '2rem',
      width: '2rem'
    }
  }
  return (
    <div className="avatarBar">
      <div className="append">
        <div className="avatarContainer" style={style}>
          <Avatar {...user} />
        </div>
        <div className="userlinkContainer">
          {appendContent.map((val, index) => (
            <div key={index}>{val}</div>
          ))}
        </div>
      </div>
      <small className="extra">
        {extraContent.map((val, index) => (
          <div key={index}>{val}</div>
        ))}
      </small>
    </div>
  )
}

export default AvatarBar
