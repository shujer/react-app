import React from 'react'
import CoverImg from '@assets/icons/profile/user_profile_header.png'
import './style.less'

const UserBar = ({user}) => {
  return (
    <div className="userBar">
      <div className="cover">
        <img src={CoverImg} alt="coverimg" />
      </div>
      <div className="avatarImg">
        <img src={user.avatarLarge} alt="avatarImg" />
      </div>
      <div className="bar" />
      <div className="description">
        <small>{user.selfDescription}</small>
      </div>
      <div className="follow">
        <div>
          <div>{user.followeesCount || 0}</div>
          <small>关注</small>
        </div>
        <div>
          <div>{user.followersCount || 0}</div>
          <small>关注者</small>
        </div>
        <div>
          <div>{user.juejinPower || 0}</div>
          <small>掘力值</small>
        </div>
      </div>
    </div>
  )
}

export default UserBar