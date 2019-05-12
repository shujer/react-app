import React, {Component} from 'react'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import UnAuth from './UnAuth'
import {connect} from 'react-redux'
import {Tabs} from 'antd-mobile'

const tabs = [
  {name: '创建的', title: '创建的', show: true},
  {name: '关注的', title: '关注的', show: true}
]

let RenderContent = props => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      }}
    >
      {props.children}
    </div>
  )
}

@withTabBarBasicLayout
class XiaoceContainer extends Component {
  state = {
    selectedIndex: 0
  }
  handleTabChange = index => {
    this.setState({
      selectedIndex: index
    })
  }
  render() {
    return (
      <div>
        <Tabs
          tabBarUnderlineStyle={{
            backgroundColor: 'white',
            border: '1.5px #fff solid'
          }}
          tabBarBackgroundColor="#007FFE"
          tabBarTextStyle={{color: 'white'}}
          tabBarActiveTextColor="white"
          tabBarInactiveTextColor="white"
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            console.log('onChange', index, tab)
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab)
          }}
        >
          <RenderContent>Content of first tab</RenderContent>
          {this.props.isLogin ? (
            <RenderContent>Content of 2 tab</RenderContent>
          ) : (
            <UnAuth />
          )}
        </Tabs>
      </div>
    )
  }
}

const mapState = state => ({
  isLogin: state.auth.isLogin
})

const mapDispatch = {}
export default connect(
  mapState,
  mapDispatch
)(XiaoceContainer)
