import React, {Component} from 'react'
import {NavBar} from 'antd-mobile'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('profile')
class ActivityContainer extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    return (
      <div>
        <NavBar mode="dark">我</NavBar>
      </div>
    )
  }
}

export default ActivityContainer
