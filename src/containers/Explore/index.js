import React, {Component} from 'react'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import Test from '@components/ShareActionSheet'

@withTabBarBasicLayout
class ActivityContainer extends Component {
  render() {
    return <div><Test/></div>
  }
}

export default ActivityContainer
