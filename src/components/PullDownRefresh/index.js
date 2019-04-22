import React, {Component} from 'react'
import RefreshLoading from '@components/RefreshLoading'

class PullDownRefresh extends Component {
  state = {
    startPos: 0,
    refreshing: true
  }

  componentWillReceiveProps(nextProps) {
    /**
     * 接收到新数据则停止加载状态
     */
    this.setState({
      refreshing: false
    })
  }

  handleTouchStart = e => {
    this.setState({
      startPos: e.touches[0].pageY
    })
  }

  handleTouchMove = e => {
    if (this.state.refreshing === false) {
      let doc = document.documentElement || document.body
      if (doc.scrollTop === doc.offsetTop) {
        let _pullHeight = e.touches[0].pageY - this.state.startPos
        if (_pullHeight > 60) {
          this.setState({
            refreshing: true,
          })
        }
      }
    }
  }

  handleTouchEnd = e => {
    if (this.state.refreshing) {
      this.props.onRefresh()
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
            top: this.state.refreshing ? '35px' : '0px',
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
