import React from 'react'
import {withRouter} from 'react-router-dom'
import Arrow from '@assets/icons/profile/profile_arrow.png'
import Avatar from '@components/Avatar/auth'
import ShortStr from '@components/ShortStr'
import './style.less'

const ProfileAvatarBar = props => {
  let {username, jobTitle, company,objectId} = props.user
  return (
    <div className="ProfileAvatarBar" onClick={() => {props.history.push(`/user/${objectId}`)}}>
      <div className="avatar">
        <Avatar {...props.user} />
      </div>
      <div className="right">
        <div className="userInfo">
          <div className="userName">{username}</div>
          <div className="userJob">
            <ShortStr str={jobTitle + ' @ ' + company} size={20}/>
          </div>
        </div>
        <div className="arrow">
          <img src={Arrow} alt=""/>
        </div>
      </div>
    </div>
  )
}
export default withRouter(ProfileAvatarBar)
