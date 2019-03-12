import React, {Component} from 'react'
import TabNav from '@components/TabNav'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('home')
class HomeContainer extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    const renderContents = Array(9)
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
      {title: '首页', show: true},
      {title: '关注', show: true},
      {title: '前端', show: true},
      {title: '设计', show: true},
      {title: '后端', show: true},
      {title: '人工智能', show: false},
      {title: '运维', show: false},
      {title: 'Android', show: false},
      {title: 'iOS', show: false},
      {title: '产品', show: false},
      {title: '工具资源', show: false}
    ].filter(val => val.show === true)
    
    return (
      <div>
        <TabNav tabs={tabs} renderContents={renderContents} />
      </div>
    )
  }

  goToItem = () => {
    this.props.history.push({
      pathname: '/post'
    })
  }
}

export default HomeContainer
