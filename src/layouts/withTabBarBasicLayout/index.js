import React from 'react'
import {TabBar} from 'antd-mobile'
import './style.less'

const withTabBarBasicLayout = WrappedComponent => props => {
  let pathname = props.match.path.split('/')[1]
  
  let items = [
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

  return (
    <div style={{height: '100%'}}>
      <WrappedComponent {...props} />
      <div style={{paddingBottom:"43px"}}></div>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          bottom: 0,
        }}
        className="transition-item footer"
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          noRenderContent={true}
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
              onPress={(e) => {
                props.history.push('/' + item.title)
              }}
              data-seed="logId"
            />
          ))}
        </TabBar>
      </div>
    </div>
  )
}
// }
export default withTabBarBasicLayout
