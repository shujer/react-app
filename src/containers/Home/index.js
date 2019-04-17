import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import EntryItem from '@components/EntryItem'
import NavList from '@components/NavList'
import './style.less'
import PullDownRefresh from '@components/PullDownRefresh'
import RefreshLoading from '@components/RefreshLoading'

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
  componentDidMount() {
    this.props.getEntryByListAsync()
    this.props.getTabListAsync()
  }
  onRefresh = ({more=false}) => {
    return this.props.getEntryByListAsync({more:more})
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
        {entryList.length === 0 ? (
          <RefreshLoading orient="up" />
        ) : (
          <div className="entryList" style={{marginTop: '43px'}}>
            <PullDownRefresh
              dataSource={dataSource}
              onRefresh={this.onRefresh}
            />
          </div>
        )}
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

const mapDispatch = ({
  home: {getTabListAsync, getEntryByListAsync, getEntryNextAsync}
}) => ({
  getTabListAsync: () => getTabListAsync(),
  getEntryByListAsync: playload => getEntryByListAsync(playload)
})

export default connect(
  mapState,
  mapDispatch
)(HomeContainer)

HomeContainer.propTypes = {
  tabList: PropTypes.array.isRequired,
  getTabListAsync: PropTypes.func.isRequired
}
