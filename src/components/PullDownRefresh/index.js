import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RefreshLoading from '@components/RefreshLoading'

class PullDownRefresh extends Component {
  state = {
    startPos: 0,
    pullHeight: 0,
    dataSource: this.props.dataSource || [],
    refreshing: false
  }

  componentDidMount() {
    this.setState({
      offsetTop: ReactDOM.findDOMNode(this.ptr).offsetTop
    })
  }

  handleTouchStart = e => {
    this.setState({
      startPos: e.touches[0].pageY
    })
  }

  handleTouchMove = e => {
    if (this.state.pullHeight === 0) {
      let top = ReactDOM.findDOMNode(this.ptr).getBoundingClientRect().top
      if (top >= this.state.offsetTop) {
        let _pullHeight = e.touches[0].pageY - this.state.startPos
        if (_pullHeight > 60) {
          // console.log('move')
          this.setState({
            refreshing: true,
            pullHeight: _pullHeight
          })
        }
      }
    }
  }

  handleTouchEnd = e => {
    if (this.state.pullHeight !== 0) {
      this.props.onRefresh()
      setTimeout(() => {
        this.setState({
          refreshing: false,
          pullHeight: 0
        })
      }, 800)
    }
  }

  render() {
    return (
      <>
        {this.state.refreshing ? <RefreshLoading orient="up" /> : null}
        <div
          ref={el => (this.ptr = el)}
          style={{
            overflowY: 'auto',
            position: 'relative',
            transition: 'top .4s ease-in-out',
            top: this.state.refreshing ? '30px' : '0px',
            width: '100%'
          }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {this.props.children}
        </div>
      </>
    )
  }
}

export default PullDownRefresh
