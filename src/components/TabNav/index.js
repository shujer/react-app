import React from 'react'
import {Tabs} from 'antd-mobile'
import './style.less'
import CaretImage from '../../assets/caret.png'

const TabNav = props => {
  let {tabs, renderContents, onCaretClick, showCaret} = props
  return (
    <div className={showCaret === true ? 'withCaret' : null}>
      <Tabs
        tabBarUnderlineStyle={{borderColor: 'white', borderWidth: '1.5px'}}
        tabBarBackgroundColor="#007FFE"
        tabBarTextStyle={{color: 'white', fontSize: '1rem'}}
        tabBarActiveTextColor="#fff"
        tabBarInactiveTextColor="rgba(255,255,255,0.7)"
        mode="dark"
        tabs={tabs}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
      >
        {renderContents}
      </Tabs>
      {showCaret ? (
        <div className="appendTab" onClick={onCaretClick}>
          <img src={CaretImage} alt="🔽" />
        </div>
      ) : null}
    </div>
  )
}

export default TabNav
