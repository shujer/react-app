import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'

const Avatar = ({objectId, avatarLarge, username}) => {
  return (
    <Link to={`/user/${objectId}`} className="avatar">
      <img
        src={avatarLarge}
        alt="userAvatar"
        title={`/user/${username}`}
      />
    </Link>
  )
}

export default Avatar
