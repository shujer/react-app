import React, {Component} from 'react'
import {NavBar, WhiteSpace} from 'antd-mobile'
import ProfileAvatarBar from '@components/ProfileAvatarBar/UnAuth'
import ProfileList from '@components/ProfileList/UnAuth'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('profile')
class ActivityContainer extends Component {
  render() {

    return (
      <div>
        <NavBar mode="dark">我</NavBar>
        <WhiteSpace/>
        <ProfileAvatarBar {...this.props}/>
        <WhiteSpace/>
        <ProfileList {...this.props}/>
      </div>
    )
  }
}

export default ActivityContainer
