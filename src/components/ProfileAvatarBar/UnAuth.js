import React from 'react'
import Arrow from '@assets/icons/profile/profile_arrow.png'
import Avatar from '@components/Avatar/UnAuth'
import './style.less'

const ProfileAvatarBar = props => {
  let handleLogin = () => {
    props.history.push('/auth')
  }
  return (
    <div className="ProfileAvatarBar" onClick={handleLogin}>
      <div className="avatar">
        <Avatar userInfo={props.userInfo} />
      </div>
      <div className="right">
        <div className="userInfo">
          <div className="userName">登录/注册</div>
          <div className="userJob">
            {'添加职位'}
            {' @ '}
            {'添加公司'}
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
