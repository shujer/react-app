import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import EntryItem from '@components/EntryItem'
import NavList from '@components/NavList'
import './style.less'
import PullDownRefresh from '@components/PullDownRefresh'

@withTabBarBasicLayout('home')
class HomeContainer extends Component {
  state = {
    selectedTab: 0,
    entryList: []
  }
  handleTabChange = index => {
    this.setState({
      selectedTab: index
    })
  }
  componentWillMount() {
    this.props.getEntryByList()
  }
  onRefresh = () => {
    return this.props.getEntryByList()
  }
  render() {
    const {tabList, entryList} = this.props
    const tabs = [
      {title: '推荐', show: true},
      {title: '关注', show: true},
      ...tabList
    ].filter(val => val.show === true)
    let dataSource = entryList.map((element, index) => {
      return <EntryItem item={element} key={index} />
    })

    return (
      <div>
        <NavList
          tabs={tabs}
          onCaretClick={this.goToTab}
          showCaret={true}
          selectedTab={this.state.selectedTab}
          onTabChange={this.handleTabChange}
        />
        <div className="entryList" style={{marginTop: '43px'}}>
          <PullDownRefresh dataSource={dataSource} onRefresh={this.onRefresh} />
        </div>
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
  tabList: state.home.tabList,
  entryList: state.home.entryList
})

const mapDispatch = ({home: {getTabListAsync, getEntryByList}}) => ({
  getTabListAsync: () => getTabListAsync(),
  getEntryByList: () => getEntryByList()
})

export default connect(
  mapState,
  mapDispatch
)(HomeContainer)

HomeContainer.propTypes = {
  tabList: PropTypes.array.isRequired,
  getTabListAsync: PropTypes.func.isRequired
}
