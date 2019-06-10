import React from 'react'
import {Link} from 'react-router-dom'
import LazyImg from '@components/LazyImg'
import './style.less'
import emptyAvatar from '@assets/icons/profile/empty_avatar_user.png'

const Avatar = (props) => {
  let {avatarLarge, objectId} = props
  return (
    <Link to={`/user/${objectId}`} className="avatar">
      <LazyImg src={avatarLarge} alternate={emptyAvatar} />
    </Link>
  )
}

export default Avatar
