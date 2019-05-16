import React from 'react'
import {ArrowIcon} from '@components/Icons'
import Avatar from '@components/Avatar/guest'
import {withRouter} from 'react-router-dom'
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
          <ArrowIcon/>
        </div>
      </div>
    </div>
  )
}
export default withRouter(ProfileAvatarBar)
