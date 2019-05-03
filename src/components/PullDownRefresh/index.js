import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RefreshLoading from '@components/RefreshLoading'

/**
 * nesting: 是否嵌套在其他拉动组件中
 * minHeight: 拉动触发最小距离
 */
class PullDownRefresh extends Component {
  state = {
    startPos: 0,
    refreshing: true,
    minHeight: this.props.minHeight || 60,
    nesting: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.refreshing !== this.state.refreshing) {
      this.setState({
        refreshing: nextProps.refreshing
      })
    }
  }

  componentDidMount() {
    let parentNode = ReactDOM.findDOMNode(this.scrollContent).parentNode
    this.setState({
      parentNode: this.state.nesting ? parentNode.parentNode : parentNode
    })
  }

  handleTouchStart = e => {
    this.setState({
      startPos: e.touches[0].pageY
    })
  }

  handleTouchMove = e => {
    if (
      this.state.refreshing === false &&
      this.state.parentNode.scrollTop === 0
    ) {
      let _pullHeight = e.touches[0].pageY - this.state.startPos
      if (_pullHeight > this.state.minHeight) {
        this.setState({
          refreshing: true
        })
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
        {this.state.refreshing ? <RefreshLoading orient="down" /> : null}
        <div
          ref={el => (this.scrollContent = el)}
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
