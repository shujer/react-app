import React, {Component} from 'react'
import RefreshLoading from '@components/RefreshLoading'

class PullUpRefresh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startPos: 0,
      pullHeight: 0,
      loadingContent: null,
      dataSource: this.props.dataSource || []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource !== this.props.dataSource) {
      this.setState({
        dataSource: nextProps.dataSource
      })
    }
  }
  handleTouchStart = e => {
    // console.log('start')
    console.log(this.ptr.offsetHeight)
    this.setState({
      startPos: e.touches[0].pageY
    })
  }

  handleTouchMove = e => {
    if (this.state.pullHeight === 0) {
      let offset = this.ptr.offsetHeight - e.target.offsetTop
      if (offset < this.ptr.clientHeight) {
        this.setState({
          loadingContent: <RefreshLoading />,
          pullHeight: offset
        })
      }
    }
  }

  handleTouchEnd = e => {
    if (this.state.pullHeight !== 0) {
      // console.log('end')
      this.props
        .onRefresh()
        .then(() => {})
        .catch(e => {
          console.error(e)
        })
        .finally(() => {
          this.setState({
            loadingContent: null,
            pullHeight: 0
          })
        })
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
            transition: 'top .5s ease-in-out',
            top: '0px',
            width: '100%'
          }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {this.state.dataSource}
        </div>
        <div
          ref={el => {
            this.rload = el
          }}
        >
          {this.state.loadingContent}
        </div>
      </>
    )
  }
}

export default PullUpRefresh
