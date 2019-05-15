import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import ShareActionSheet from '@components/ShareActionSheet'
import ShareIcon from '@assets/icons/profile/ic_share_white.png'
import DataIcon from '@assets/icons/profile/icon_profile_data.png'
import Level from '@components/Level'

class myNavBar extends Component {
  render() {
    let {user} = this.props
    return (
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => {
          this.props.goBack()
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
          <div className="author">{user.username}</div>
          <Level level={user.level} height="14px" />
        </div>
      </NavBar>
    )
  }
}

export default myNavBar
