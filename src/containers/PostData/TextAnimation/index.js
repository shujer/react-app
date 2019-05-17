import React, {Component} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './style.less'

class TextAnimation extends Component {
  state = {
    delay: this.props.interval || 500,
    data: []
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.str !== this.props.str && nextProps.str !== 'undefined') {
      this.setState({
        data: nextProps.str.split('')
      })
    }
  }
  render() {
    return (
      <div
        style={{...this.props.style}}
        className="text-animation"
        ref={ref => (this.ref = ref)}
      >
        <TransitionGroup className="text-list">
          {this.state.data.map((val, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={500}
                onEnter={e => {
                  e.style.backgroundPositionY=`0`
                }}
                onEntering={
                  e => {
                    e.style.backgroundPositionY=`${-3*val - 30}rem`
                    e.style.transitionProperty="background-position-y"
                    e.style.transitionDuration=`${(index+1)*this.state.delay}ms`
                    e.style.transitionTimingFunction="ease-out"
                  }
                }
              >
                <span key={index} />
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </div>
    )
  }
}

export default TextAnimation
