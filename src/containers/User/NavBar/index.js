import React from 'react'
import {NavBar, Icon} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import ShareActionSheet from '@components/ShareActionSheet'
import ShareIcon from '@assets/icons/profile/ic_share_white.png'
import DataIcon from '@assets/icons/profile/icon_profile_data.png'
import Level from '@components/Level'
const myNavBar = props => {
  let {user} = props
  return (
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={() => {
        props.history.goBack()
      }}
      style={{
        width: '100%',
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        position: 'fixed',
        top: 0
      }}
      rightContent={[
        <img
          src={DataIcon}
          alt="..."
          width={18}
          height={18}
          style={{marginRight: '22px'}}
          key="0"
        />,
        <ShareActionSheet
          key="1"
          icon={<img src={ShareIcon} alt="..." width={20} height={20} />}
        />
      ]}
    >
      <div className="barTitle">
        <div className="author">{user.username || ''}</div>
        <Level level={user.level || ''} height="14px" />
      </div>
    </NavBar>
  )
}

export default withRouter(myNavBar)
