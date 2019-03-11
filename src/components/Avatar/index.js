import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'

const Avatar = ({userInfo}) => {
    return(
        <Link to={`/user/${userInfo.id}`}  className="avatar">
            <img src={userInfo.avatarUrl} alt="userAvatar" title={`/user/${userInfo.id}`} />
        </Link>
    )
}

export default Avatar