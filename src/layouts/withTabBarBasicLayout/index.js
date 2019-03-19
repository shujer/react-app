import React, {Component} from 'react'
import {TabBar} from 'antd-mobile'
import './style.less'

const withTabBarBasicLayout = title => {
  return WrappedComponent => {
    return class extends Component {
      constructor(props) {
        super(props)
        this.state = {
          selectedTab: title,
          hidden: false,
          fullScreen: false
        }
      }

      items = [
        {
          title: 'home',
          iconUrl: require('../../assets/icons/tab/tab_home_normal.png'),
          selectedIconUrl: require('../../assets/icons/tab/tab_home.png')
        },
        {
          title: 'activity',
          iconUrl: require('../../assets/icons/tab/tab_activity.png'),
          selectedIconUrl: require('../../assets/icons/tab/tab_activity_press.png')
        },
        {
          title: 'explore',
          iconUrl: require('../../assets/icons/tab/tab_explore_normal.png'),
          selectedIconUrl: require('../../assets/icons/tab/tab_explore.png')
        },
        {
          title: 'xiaoce',
          iconUrl: require('../../assets/icons/tab/tab_xiaoce_normal.png'),
          selectedIconUrl: require('../../assets/icons/tab/tab_xiaoce.png')
        },
        {
          title: 'profile',
          iconUrl: require('../../assets/icons/tab/tab_profile_normal.png'),
          selectedIconUrl: require('../../assets/icons/tab/tab_profile.png')
        }
      ]

      renderContent(pageText) {
        return (
          <div
            style={{
              backgroundColor: 'white',
              height: '100%'
            }}
          >
            <WrappedComponent {...this.props} />
          </div>
        )
      }
      handlePress = title => {
        this.setState({
          selectedTab: title
        })
        this.props.history.push('/' + title)
      }

      render() {
        return (
          <div
            style={{
              position: 'fixed',
              height: '100%',
              width: '100%',
              bottom: 0
            }}
            className="transition-item"
          >
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
            >
              {this.items.map(item => (
                <TabBar.Item
                  key={item.title}
                  icon={
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        background: `url(${
                          item.iconUrl
                        }) center center /  31px 31px no-repeat`
                      }}
                    />
                  }
                  selectedIcon={
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        background: `url(${
                          item.selectedIconUrl
                        }) center center /  31px 31px no-repeat`
                      }}
                    />
                  }
                  selected={this.state.selectedTab === item.title}
                  onPress={() => {
                    this.handlePress(item.title)
                  }}
                  data-seed="logId"
                >
                  <WrappedComponent {...this.props} />
                </TabBar.Item>
              ))}
            </TabBar>
          </div>
        )
      }
    }
  }
}
export default withTabBarBasicLayout
