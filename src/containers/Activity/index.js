import React, {Component} from 'react'
import NavList from '@components/NavList'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

@withTabBarBasicLayout('activity')
class ActivityContainer extends Component {
  state = {
    selectedIndex: 0
  }

  handleTabChange = index => {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    const tabs = [
      {name: '推荐', show: true},
      {name: '综合', show: true},
      {name: '沸点', show: true}
    ]

    return (
      <div>
        <NavList
          tabs={tabs}
          selectedIndex={this.state.selectedIndex}
          onTabChange={this.handleTabChange}
          page={4}
        />
      </div>
    )
  }
}

export default ActivityContainer
