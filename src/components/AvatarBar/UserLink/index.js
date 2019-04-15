import React from 'react'
import {Link} from 'react-router-dom'

const UserLink = ({objectId, username}) => {
  return (
    <Link to={`/user/${objectId}`} className="userlink">
      {username}
    </Link>
  )
}

export default UserLink
