import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'
import emptyAvatar from '@assets/icons/profile/empty_avatar_user.png'

const Avatar = (props) => {
  let {avatarLarge, objectId, username} = props
  return (
    <Link to={`/user/${objectId}`} className="avatar">
      <img
        src={avatarLarge || emptyAvatar}
        alt="userAvatar"
        title={`/user/${username}`}
      />
    </Link>
  )
}

export default Avatar
