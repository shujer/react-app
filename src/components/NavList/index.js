import React from 'react'
import './style.less'
import {Link} from 'react-router-dom'
import CaretImage from '../../assets/caret.png'

function getSelectedIndex(tabs, title) {
  let res = 0
  tabs.forEach((tab, index) => {
    if (tab.title === title) {
      res = index
    }
  })
  return res
}

const NavList = props => {
  let {tabs, onCaretClick, showCaret, selectedTitle, page} = props
  let width = 25
  if (page) {
    width = 100 / page
  }
  let selectedIndex = getSelectedIndex(tabs, selectedTitle)
  return (
    <div className="tabListBar">
      <div className="tabList">
        {tabs.map((element, index) => {
          return (
            <Link
              key={index}
              className="tabItem"
              to={`/timeline/${element.title}`}
              style={{width: width + '%'}}
            >
              {element.name}
            </Link>
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
