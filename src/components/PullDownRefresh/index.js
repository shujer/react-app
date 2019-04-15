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
    // console.log(nextProps)
    if (nextProps.dataSource !== this.props.dataSource) {
      console.log(nextProps)
      //   this.setState({
      //     // dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource)
      //   })
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
    this.setState({
      startPos: e.touches[0].pageY
    })
  }

  handleTouchMove = e => {
    let _movePos = e.touches[0].pageY
    let _pullHeight = _movePos - this.state.startPos
    let offsetTop = e.target.offsetTop
    if (offsetTop < this.state.height) {
      if (_pullHeight > 60 && this.state.pullHeight < 60) {
        this.ptr.style.top = '40px'
        this.setState({
          loadingContent: <RefreshLoading />,
          pullHeight: _pullHeight
        })
      }
    }
  }

  handleTouchEnd = e => {
    this.ptr.style.top = '0px'
    setTimeout(() => {
      this.setState({
        loadingContent: null,
        pullHeight: 0
      })
    }, 2000)
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
