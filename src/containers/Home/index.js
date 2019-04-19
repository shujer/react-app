import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import EntryItem from '@components/EntryItem'
import NavList from '@components/NavList'
import './style.less'
import PullDownRefresh from '@components/PullDownRefresh'
import PullUpRefresh from '@components/PullUpRefresh'
import RefreshLoading from '@components/RefreshLoading'

@withTabBarBasicLayout('home')
class HomeContainer extends Component {
  state = {
    selectedIndex: 0,
    tabList: [
      {name: '推荐', title: 'recommended', show: true},
      {name: '关注', title: 'following', show: true}
    ]
  }

  shouldComponentUpdate(nextProps, nexState) {
    if (nextProps.entryList && nextProps.entryList.length === 0) {
      return false
    } else {
      return true
    }
  }

  componentDidMount() {
    this.props.getEntryByListAsync({
      category: this.state.tabList[this.state.selectedIndex].title
    })
    this.props.getTabListAsync()
  }

  _onRefreshUp = () => {
    console.log(this.state.selectedIndex)
    this.props.getEntryByListAsync({
      more: true,
      category: this.state.tabList[this.state.selectedIndex].title
    })
  }

  _onRefreshDown = () => {
    console.log(this.state.selectedIndex)
    this.props.getEntryByListAsync({
      more: false,
      category: this.state.tabList[this.state.selectedIndex].title
    })
  }

  _handleTabChange = index => {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    let {tabList, entryList} = this.props
    let {selectedIndex} = this.state
    const tabs = [...this.state.tabList, ...tabList].filter(
      val => val.show === true
    )
    return (
      <div>
        <NavList
          tabs={tabs}
          onCaretClick={this.goToTab}
          showCaret={true}
          selectedIndex={selectedIndex}
          onTabChange={this._handleTabChange}
        />
        {entryList.length === 0 ? <RefreshLoading orient="up" /> : null}
        <div className="entryList" style={{marginTop: '43px'}}>
          <PullDownRefresh onRefresh={this._onRefreshDown}>
            <PullUpRefresh onRefresh={this._onRefreshUp}>
              {entryList.map((element, index) => {
                return <EntryItem item={element} key={index} />
              })}
            </PullUpRefresh>
          </PullDownRefresh>
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

const mapDispatch = ({home: {getTabListAsync, getEntryByListAsync}}) => ({
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
