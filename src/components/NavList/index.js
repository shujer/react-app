import React from 'react'
import './style.less'
import {Link, withRouter} from 'react-router-dom'
import CaretImage from '../../assets/caret.png'

function getSelectedIndex(tabs, key, value) {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i][key] === value) {
      return i
    }
  }
  return 0
}

const NavList = props => {
  let {onCaretClick, showCaret, tabs} = props
  let selectedIndex = getSelectedIndex(tabs, 'link', props.match.url)
  let width = props.page ? 100 / props.page : 25
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
            style={{
              width: width + '%',
              transform: `translate3d(${selectedIndex * 100}%,0,0)`,
              transition: 'transform 200ms ease-in-out'
            }}
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
