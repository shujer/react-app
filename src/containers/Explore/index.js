import React, {Component} from 'react'
import TabNav from '@components/TabNav'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('explore')
class ActivityContainer extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const renderContents = Array(1)
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
      {title: '搜索', show: true}
    ]
    
    return (
      <div>
        <TabNav tabs={tabs} renderContents={renderContents} />
      </div>
    )
  }
}

export default ActivityContainer
