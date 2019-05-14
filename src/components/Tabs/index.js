import React from 'react'
import {Tabs} from 'antd-mobile'
import {StickyContainer, Sticky} from 'react-sticky'

function renderTabBar(props) {
  return (
    <Sticky>
      {({style}) => (
        <div style={{...style, zIndex: 1}}>
          <Tabs.DefaultTabBar {...props} />
        </div>
      )}
    </Sticky>
  )
}

const myTabs = props => {
   return(
    <div>
    <StickyContainer>
      <Tabs
        renderTabBar={renderTabBar}
        tabBarUnderlineStyle={{
          backgroundColor: 'white',
          border: '1.5px #fff solid'
        }}
        tabBarBackgroundColor="#007FFE"
        tabBarTextStyle={{color: 'white'}}
        tabBarActiveTextColor="white"
        tabBarInactiveTextColor="white"
        tabs={props.tabs}
        initialPage={0}
        onChange={(tab, index) => {
          // console.log('onChange', index, tab)
        }}
        onTabClick={(tab, index) => {
          // console.log('onTabClick', index, tab)
        }}
      >
      {props.children}
      </Tabs>
    </StickyContainer>
  </div>
   ) 
}

export default myTabs