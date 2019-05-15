import React from 'react'
import Level from '@components/Level'
import ShortStr from '@components/ShortStr'
import emptyAvatar from '@assets/icons/profile/empty_avatar_user.png'
import './style.less'

const UserBar = ({user}) => {
  return (
    <div className="userBar">
      <div className="cover" />
      <div className="avatarImg">
        <img src={user.avatarLarge || emptyAvatar} alt="avatarImg" />
      </div>
      <div className="bar">
        <div className="barTitle">
          <div className="author">{user.username || ''}</div>
          <Level
            level={user.level}
            style={{width: '25.19px', height: '14px'}}
          />
        </div>
        <div className="job">
          <ShortStr
            str={(user.jobTitle || '') + ' @ ' + (user.company || '')}
            size={20}
            style={{color: '#000'}}
          />
        </div>
      </div>
      <div className="description">
        <small>{user.selfDescription || ''}</small>
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
