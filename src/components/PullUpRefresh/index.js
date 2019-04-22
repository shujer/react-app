import React, {Component} from 'react'
import RefreshLoading from '@components/RefreshLoading'

class PullUpRefresh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startPos: 0,
      refreshing: false
    }
  }

  componentDidMount(nextProps) {
    this.setState({
      hei:document.documentElement.clientHeight
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      refreshing: false
    })
  }

  handleTouchMove = e => {
    if (this.state.refreshing === false) {
      let doc = document.documentElement || document.body
      let offset = doc.scrollHeight - this.state.hei - doc.scrollTop;
      if (offset < 300) {
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
