import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import './style.less'

const TransitionList = props => {
  let {items} = props
  return (
    <TransitionGroup className="list">
      {items.map((item, index) => (
        <CSSTransition key={index} timeout={400} classNames="item">
          {item}
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default TransitionList
