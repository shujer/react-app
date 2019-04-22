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

@withTabBarBasicLayout
class HomeContainer extends Component {
  state = {
    selectedTitle: this.props.match.params.category
  }

  componentWillMount() {
    this._onRefreshDown()
  }

  componentWillReceiveProps(nextProps) {
    let category = nextProps.match.params.category
    if (category !== this.props.match.params.category) {
      this.setState(
        {
          selectedTitle: category
        },
        () => {
          this._onRefreshDown()
        }
      )
    }
  }

  shouldComponentUpdate(nextProps, nexState) {
    if (
      (nextProps.entryList && nextProps.entryList.length === 0) ||
      (nextProps.tabList && nextProps.tabList.length === 0)
    ) {
      return false
    }
    return true
  }

  _onRefreshUp = () => {
    this.props.getEntryByListAsync({
      more: true,
      category: this.state.selectedTitle
    })
  }

  _onRefreshDown = () => {
    this.props.emptyEntryList()
    this.props.getEntryByListAsync({
      more: false,
      category: this.state.selectedTitle
    })
  }

  _goToTab = () => {
    this.props.history.push({
      pathname: '/recommended'
    })
  }

  render() {
    let {entryList, tabList} = this.props
    const tabs = [
      {name: '推荐', title: 'all', show: true},
      {name: '关注', title: 'following', show: true},
      ...tabList
    ].filter(val => val.show === true)
    return (
      <>
        <NavList
          tabs={tabs}
          onCaretClick={this._goToTab}
          showCaret={true}
          selectedTitle={this.state.selectedTitle}
        />
        <div className="entryList" style={{marginTop: '43px'}}>
          <PullDownRefresh onRefresh={this._onRefreshDown}>
            <PullUpRefresh onRefresh={this._onRefreshUp}>
              {entryList.map((element, index) => {
                return <EntryItem item={element} key={index} />
              })}
            </PullUpRefresh>
          </PullDownRefresh>
        </div>
      </>
    )
  }
}

const mapState = state => ({
  tabList: state.home.tabList,
  entryList: state.home.entryList
})

const mapDispatch = ({
  home: {getTabListAsync, getEntryByListAsync, emptyEntryList}
}) => ({
  getTabListAsync: () => getTabListAsync(),
  getEntryByListAsync: playload => getEntryByListAsync(playload),
  emptyEntryList: () => emptyEntryList()
})

// export default (HomeContainer)

export default connect(
  mapState,
  mapDispatch
)(HomeContainer)

HomeContainer.propTypes = {
  tabList: PropTypes.array.isRequired,
  getTabListAsync: PropTypes.func.isRequired
}
