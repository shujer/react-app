import React from 'react'
import { TabBar } from 'antd-mobile'
import ErrorBoundary from '@layouts/ErrorBoundary'
import './style.less'
const items = [
  {
    title: 'timeline',
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

const withTabBarBasicLayout = WrappedComponent =>
  class extends React.Component {
    constructor (props) {
      super(props)
      this.state = { hasError: false }
    }

    static getDerivedStateFromError () {
      return { hasError: true }
    }
    render () {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>
      }
      let pathname = this.props.match.path.split('/')[1]
      return (
        <div style={{ height: '100%' }}>
          <ErrorBoundary>
            <WrappedComponent {...this.props} />
          </ErrorBoundary>
          <div style={{ paddingBottom: '43px' }} />
          <div
            style={{
              position: 'fixed',
              width: '100%',
              bottom: 0,
              zIndex: 999
            }}
            className='transition-item footer'
          >
            <TabBar
              unselectedTintColor='#949494'
              tintColor='#33A3F4'
              barTintColor='white'
              noRenderContent
            >
              {items.map(item => (
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
                  selected={pathname === item.title}
                  onPress={e => {
                    this.props.history.push('/' + item.title)
                  }}
                  data-seed='logId'
                />
              ))}
            </TabBar>
          </div>
        </div>
      )
    }
  }
// }
export default withTabBarBasicLayout
