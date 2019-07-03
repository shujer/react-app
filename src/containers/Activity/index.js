import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import EntryItem from '@components/EntryItem/PinItem'
import NavList from '@components/NavList'
import TransitionList from '@components/TransitionList'
import PullRefresh from '@components/PullRefresh'
import './style.less'

@withTabBarBasicLayout
class ActivityContainer extends Component {
  state = {
    SelectedIndex: 0,
    id: '',
    downRefreshing: true,
    upRefreshing: false
  }

  componentWillMount () {
    this._onRefreshDown()
    this.props.getTopicListAsync()
  }

  componentWillReceiveProps (nextProps) {
    let category = nextProps.match.params.category
    let id = nextProps.match.params.id
    if (
      category !== this.props.match.params.category ||
      id !== this.props.match.params.id
    ) {
      this.setState(
        {
          downRefreshing: true,
          category
        },
        () => {
          // this.props.emptyEntryList()
          this._onRefreshDown()
        }
      )
    }
  }

  _onRefreshUp = () => {
    this.props
      .getEntry({
        more: true,
        params: this.props.match.params
      })
      .finally(() => {
        this.setState({
          upRefreshing: false
        })
      })
  }

  _onRefreshDown = () => {
    this.props
      .getEntry({
        more: false,
        params: this.props.match.params
      })
      .finally(() => {
        this.setState({
          downRefreshing: false
        })
      })
  }

  _goToTab = () => {
    this.props.history.push({
      pathname: '/topicList/recommended'
    })
  }

  render () {
    let { topicList, entryList } = this.props
    let items = entryList.map((element, index) => {
      return <EntryItem item={element} key={element.objectId} />
    })
    return (
      <div className='wrap'>
        <NavList
          className='header'
          tabs={topicList.filter(tab => tab.show)}
          onCaretClick={this._goToTab}
          showCaret
        />
        <div className='main scroll_content'>
          <PullRefresh
            down
            onDownRefresh={this._onRefreshDown}
            downRefreshing={this.state.downRefreshing}
            up
            upRefreshing={this.state.upRefreshing}
            onUpRefresh={this._onRefreshUp}
          >
            <TransitionList items={items} />
          </PullRefresh>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  entryList: state.activity.entryList,
  topicList: state.activity.topicList
})

const mapDispatch = ({ activity: { getEntry, getTopicListAsync} }) => ({
  getEntry: playload => getEntry(playload),
  getTopicListAsync: () => getTopicListAsync()
})

export default connect(
  mapState,
  mapDispatch
)(ActivityContainer)

ActivityContainer.propTypes = {
  getEntry: PropTypes.func.isRequired
}
