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
    const hei =
      document.documentElement.clientHeight -
      ReactDOM.findDOMNode(this.ptr).offsetTop
    this.setState({
      height: hei
    })
  }
  handleTouchStart = e => {
    console.log('start')
    this.setState({
      startPos: e.touches[0].pageY
    })
  }

  handleTouchMove = e => {
    console.log('move')
    let _movePos = e.touches[0].pageY
    let _pullHeight = _movePos - this.state.startPos
    let offsetTop = e.target.offsetTop
    if (offsetTop < this.state.height) {
      if (_pullHeight > 60 && this.state.pullHeight < 60) {
        this.ptr.style.top = '30px'
        this.setState({
          loadingContent: <RefreshLoading />,
          pullHeight: _pullHeight
        })
      }
    }
  }

  handleTouchEnd = e => {
    console.log('end')
    this.props.onRefresh().then(() => {
      this.ptr.style.top = '0px'
      this.setState({
        loadingContent: null,
        pullHeight: 0
      })
    })
  }

  render() {
    return (
      <>
        <div>{this.state.loadingContent}</div>
        <div
          ref={el => (this.ptr = el)}
          style={{
            overflowY: 'scroll',
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
      </>
    )
  }
}

export default PullDownRefresh
