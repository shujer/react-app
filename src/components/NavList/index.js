import React from 'react'
import './style.less'
import {Link, withRouter} from 'react-router-dom'
import CaretImage from '../../assets/caret.png'

function getSelectedIndex(tabs, key, value) {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i][key] === value) {
      return i;
    }
  }
  return 0
}

const NavList = props => {
  let {tabs, onCaretClick, showCaret, page} = props
  let width = 25
  if (page) {
    width = 100 / page
  }
  let selectedIndex = getSelectedIndex(tabs, 'link', props.match.url)
  return (
    <>
      <div className="tabListBar">
        <div className="tabList scroll_content">
          {tabs.map((element, index) => {
            return (
              <Link
                key={index}
                className="tabItem"
                to={element.link}
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
      <div style={{paddingTop: '42px'}} />
    </>
  )
}

export default withRouter(NavList)
