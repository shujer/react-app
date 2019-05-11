import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import EntryItem from '@components/EntryItem'
import NavList from '@components/NavList'
import PullRefresh from '@components/PullRefresh'
import './style.less'

@withTabBarBasicLayout
class HomeContainer extends Component {
  state = {
    selectedTitle: this.props.match.params.category,
    downRefreshing: true,
    upRefreshing: false
  }

  componentWillMount() {
    this._onRefreshDown()
  }

  componentWillReceiveProps(nextProps) {
    let category = nextProps.match.params.category
    if (category !== this.props.match.params.category) {
      this.setState(
        {
          selectedTitle: category,
          downRefreshing: true
        },
        () => {
          this.props.emptyEntryList()
          this._onRefreshDown()
        }
      )
    }
  }

  _onRefreshUp = () => {
    this.props
      .getEntryByListAsync({
        more: true,
        category: this.state.selectedTitle
      })
      .finally(() => {
        this.setState({
          upRefreshing: false
        })
      })
  }

  _onRefreshDown = () => {
    this.props
      .getEntryByListAsync({
        more: false,
        category: this.state.selectedTitle
      })
      .finally(() => {
        this.setState({
          downRefreshing: false
        })
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
      {name: '首页', title: 'all', show: true},
      {name: '关注', title: 'following', show: true},
      ...tabList
    ].filter(val => val.show === true)
    return (
      <div className="wrap">
        <NavList
          className="header"
          tabs={tabs}
          onCaretClick={this._goToTab}
          showCaret={true}
          selectedTitle={this.state.selectedTitle}
        />
        <div className="main scroll_content">
          <PullRefresh
            down={true}
            onDownRefresh={this._onRefreshDown}
            downRefreshing={this.state.downRefreshing}
            up={true}
            upRefreshing={this.state.upRefreshing}
            onUpRefresh={this._onRefreshUp}
          >
            {entryList.map((element, index) => {
              return <EntryItem item={element} key={index} />
            })}
          </PullRefresh>
        </div>
      </div>
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

export default connect(
  mapState,
  mapDispatch
)(HomeContainer)

HomeContainer.propTypes = {
  tabList: PropTypes.array.isRequired,
  getTabListAsync: PropTypes.func.isRequired
}
