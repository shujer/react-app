import React from 'react'
import Arrow from '@assets/icons/profile/profile_arrow.png'
import Avatar from '@components/Avatar/auth'
import ShortStr from '@components/ShortStr'
import './style.less'

const ProfileAvatarBar = props => {
  let {username, jobTitle, company} = props.user
  return (
    <div className="ProfileAvatarBar">
      <div className="avatar">
        <Avatar {...props.user} />
      </div>
      <div className="right">
        <div className="userInfo">
          <div className="userName">{username}</div>
          <div className="userJob">
            <ShortStr str={jobTitle + ' @ ' + company}/>
          </div>
        </div>
        <div className="arrow">
          <img src={Arrow} alt=""/>
        </div>
      </div>
    </div>
  )
}
export default ProfileAvatarBar
