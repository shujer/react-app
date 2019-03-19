import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TabNavWithCaret from '@components/TabNav'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'

const mapState = state => ({
  tabList: state.home.tabList
})

const mapDispatch = ({home: {resetTabList}}) => ({
  resetTabList
})

@connect(
  mapState,
  mapDispatch
)
@withTabBarBasicLayout('home')
class HomeContainer extends Component {
  static propTypes = {
    tabList: PropTypes.array.isRequired
  }
  render() {
    const {tabList} = this.props
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

    const tabs = tabList.filter(val => val.show === true)

    return (
      <div>
        <TabNavWithCaret
          tabs={tabs}
          renderContents={renderContents}
          onCaretClick={this.goToTab}
          showCaret={true}
        />
      </div>
    )
  }

  goToTab = () => {
    this.props.history.push({
      pathname: 'tabs'
    })
  }
}

export default HomeContainer
