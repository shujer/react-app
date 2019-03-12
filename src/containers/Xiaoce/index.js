import React, {Component} from 'react'
import TabNav from '@components/TabNav'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('xiaoce')
class XiaoceContainer extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const renderContents = Array(2)
      .fill(0)
      .map(val => tab => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'auto 1',
            backgroundColor: '#fff'
          }}
        >
          <p>Content of {tab.title}</p>
        </div>
      ))

    const tabs = [
      {title: '全部', show: true},
      {title: '已购', show: true}
    ]
    
    return (
      <div>
        <TabNav tabs={tabs} renderContents={renderContents} />
      </div>
    )
  }
}

export default XiaoceContainer
