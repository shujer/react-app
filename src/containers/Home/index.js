import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import PullToRefreshList from '@components/PullToRefreshList'
import NavList from '@components/NavList'

@withTabBarBasicLayout('home')
class HomeContainer extends Component {
  state = {
    selectedTab: 0
  }
  handleTabChange = index => {
    this.setState({
      selectedTab: index
    })
  }
  render() {
    const {tabList} = this.props
    const tabs = [
      {title: '推荐', show: true},
      {title: '关注', show: true},
      ...tabList
    ].filter(val => val.show === true)

    return (
      <div>
        <NavList
          tabs={tabs}
          onCaretClick={this.goToTab}
          showCaret={true}
          selectedTab={this.state.selectedTab}
          onTabChange={this.handleTabChange}
        />
      </div>
    )
  }

  goToTab = () => {
    this.props.history.push({
      pathname: '/recommended'
    })
  }
}

const mapState = state => ({
  tabList: state.home.tabList
})

const mapDispatch = ({home: {getTabListAsync}}) => ({
  getTabListAsync: () => getTabListAsync()
})

export default connect(
  mapState,
  mapDispatch
)(HomeContainer)

HomeContainer.propTypes = {
  tabList: PropTypes.array.isRequired,
  getTabListAsync: PropTypes.func.isRequired
}
