import React, {Component} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './style.less'

class TextAnimation extends Component {
  state = {
    text: this.props.str,
    arr: [],
    interval: this.props.interval || 500,
    currentArr: [],
    scroll: false
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.str !== this.props.str && nextProps.str !== 'undefined') {
      this.setState(
        {
          arr: nextProps.str.split('')
        },
        () => {
          this.schedule()
        }
      )
    }
  }

  schedule = () => {
    this.timer = setTimeout(() => {
      if (this.state.arr.length) {
        let arr = this.state.arr
        this.setState(
          {
            arr: arr.slice(1),
            currentArr: [...this.state.currentArr, arr[0]]
          },
          () => {
            this.schedule()
          }
        )
      }
    }, this.state.interval)
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  render() {
    return (
      <div
        style={{...this.props.style}}
        className="text-animation"
        ref={ref => (this.ref = ref)}
      >
        <TransitionGroup className="text-list">
          {this.state.currentArr.map((val, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={800}
                classNames="fade"
              >
                <span key={index}>{val}</span>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </div>
    )
  }
}

export default TextAnimation
