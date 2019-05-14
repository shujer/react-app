import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'
import EmptyAvatar from '@assets/icons/profile/empty_avatar_user.png'

const Avatar = ({userInfo}) => {
  return (
    <Link to={`/auth`} className="avatar">
      <img
        src={EmptyAvatar}
        alt="userAvatar"
      />
    </Link>
  )
}

export default Avatar
