import React, {Component} from 'react'
import RefreshLoading from '@components/RefreshLoading'
import ReactDOM from 'react-dom'

class PullUpRefresh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startPos: 0,
      pullHeight: 0,
      refreshing: false
    }
  }
  handleTouchStart = e => {
    // console.log('start')
  }

  componentDidMount() {
    this.setState({
      hei:
        document.documentElement.clientHeight -
        ReactDOM.findDOMNode(this.ptr).offsetTop
    })
  }

  handleTouchMove = e => {
    if (this.state.pullHeight === 0) {
      let offset = this.ptr.offsetHeight - e.target.offsetTop
      if (offset < this.state.hei + 100) {
        this.setState({
          refreshing: true,
          pullHeight: offset
        })
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
        <div
          ref={el => (this.ptr = el)}
          style={{
            overflowY: 'auto',
            position: 'relative',
            transition: 'top .3s ease-in-out',
            top: '0px',
            width: '100%',
            height: '100%'
          }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {this.props.children}
        </div>
        {this.state.refreshing ? <RefreshLoading orient="down" /> : null}
      </>
    )
  }
}

export default PullUpRefresh
