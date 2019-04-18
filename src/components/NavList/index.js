import React from 'react'
import './style.less'
import CaretImage from '../../assets/caret.png'

const NavList = props => {
  let {tabs, onCaretClick, showCaret, selectedIndex, onTabChange, page} = props
  let width = 25
  if (page) {
    width = 100 / page
  }
  return (
    <div className="tabListBar">
      <div className="tabList">
        {tabs.map((element, index) => {
          return (
            <div
              key={index}
              className="tabItem"
              onClick={() => {
                onTabChange(index)
              }}
              style={{width: width + '%'}}
            >
              {element.name}
            </div>
          )
        })}

        <div
          className="tabChange"
          style={{left: selectedIndex * width + '%', width: width + '%'}}
        />
      </div>
      {showCaret ? (
        <div className="caretTab" onClick={onCaretClick}>
          <img src={CaretImage} alt="" />
        </div>
      ) : null}
    </div>
  )
}

export default NavList
