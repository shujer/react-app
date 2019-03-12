import React from 'react'
import {Tabs} from 'antd-mobile'
import './style.less'

const TabNav = ({tabs, renderContents}) => {
  return (
    <div>
      <Tabs
        tabBarUnderlineStyle={{borderColor: 'white', borderWidth: '1.5px'}}
        tabBarBackgroundColor="#007FFE"
        tabBarTextStyle={{color: 'white',fontSize:'1rem'}}
        tabBarActiveTextColor="#fff"
        tabBarInactiveTextColor="rgba(255,255,255,0.7)"
        mode="dark"
        tabs={tabs}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
      >
        {renderContents}
      </Tabs>
    </div>
  )
}

export default TabNav
