import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RefreshLoading from '@components/RefreshLoading'

class PullDownRefresh extends Component {
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

  componentDidMount() {
    this.setState({
      offsetTop: ReactDOM.findDOMNode(this.ptr).offsetTop
    })
  }

  handleTouchStart = e => {
    // console.log('start')
    this.setState({
      startPos: e.touches[0].pageY
    })
  }

  handleTouchMove = e => {
    // console.log('move')
    let top = ReactDOM.findDOMNode(this.ptr).getBoundingClientRect().top
    if (top >= this.state.offsetTop) {
      let _pullHeight = e.touches[0].pageY - this.state.startPos
      if (_pullHeight > 60 && this.state.pullHeight === 0) {
        this.ptr.style.top = '30px'
        this.setState({
          loadingContent: <RefreshLoading orient="up" />,
          pullHeight: _pullHeight
        })
      }
    }
  }

  handleTouchEnd = e => {
    // console.log('end')
    if (this.state.pullHeight !== 0) {
      this.props
        .onRefresh({more: false})
        .then(() => {})
        .catch(e => {
          console.error(e)
        })
        .finally(() => {
          this.ptr.style.top = '0px'
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
        <div>{this.state.loadingContent}</div>
        <div
          ref={el => (this.ptr = el)}
          style={{
            overflowY: 'auto',
            position: 'relative',
            transition: 'top .4s ease-in-out',
            top: '0px',
            width: '100%'
          }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {this.state.dataSource}
        </div>
      </>
    )
  }
}

export default PullDownRefresh
