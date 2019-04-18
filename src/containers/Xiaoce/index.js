import React, {Component} from 'react'
import NavList from '@components/NavList'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('xiaoce')
class XiaoceContainer extends Component {
  state = {
    selectedTab: 0
  }
  handleTabChange = index => {
    this.setState({
      selectedTab: index
    })
  }
  render() {
    const tabs = [{name: '全部', show: true}, {name: '已购', show: true}]

    return (
      <div>
        <NavList
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          onTabChange={this.handleTabChange}
          page={2}
        />
      </div>
    )
  }
}

export default XiaoceContainer
