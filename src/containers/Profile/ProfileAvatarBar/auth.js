import React from 'react'
import {withRouter} from 'react-router-dom'
import {ArrowIcon} from '@components/Icons'
import Avatar from '@components/Avatar/auth'
import ShortStr from '@components/ShortStr'
import './style.less'

const ProfileAvatarBar = props => {
  let {username, jobTitle, company,objectId} = props.user
  return (
    <div className="ProfileAvatarBar" onClick={() => {props.history.push(`/user/${objectId}`)}}>
      <div className="avatarContainer">
        <Avatar {...props.user} />
      </div>
      <div className="right">
        <div className="userInfo">
          <div className="userName">{username}</div>
          <div className="userJob">
            <ShortStr str={`${(jobTitle || '添加职位')} @ ${(company || '添加公司')}`} size={20}/>
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
