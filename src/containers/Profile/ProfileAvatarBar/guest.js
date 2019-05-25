import React from 'react'
import {withRouter} from 'react-router-dom'
import {ArrowIcon} from '@components/Icons'
import Avatar from '@components/Avatar/guest'
import ShortStr from '@components/ShortStr'
import './style.less'

const ProfileAvatarBar = props => {
  return (
    <div className="ProfileAvatarBar" onClick={() => {props.history.push(`/auth`)}}>
      <div className="avatarContainer">
        <Avatar/>
      </div>
      <div className="right">
        <div className="userInfo">
          <div className="userName">登录/注册</div>
          <div className="userJob">
            <ShortStr str={`添加职位 @ 添加公司`} size={20}/>
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

