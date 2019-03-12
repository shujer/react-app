import React, {Component} from 'react'
import TabNav from '@components/TabNav'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('activity')
class ActivityContainer extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const renderContents = Array(3)
      .fill(0)
      .map(val => tab => (
        <div
          style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
            flex: 'auto 1',
            backgroundColor: '#fff'
          }}
        >
          <p>Content of {tab.title}</p>
        </div>
      ))

    const tabs = [
      {title: '推荐', show: true},
      {title: '综合', show: true},
      {title: '沸点', show: true}
    ]
    
    return (
      <div>
        <TabNav tabs={tabs} renderContents={renderContents} />
      </div>
    )
  }
}

export default ActivityContainer
