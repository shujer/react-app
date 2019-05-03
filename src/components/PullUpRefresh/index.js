import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RefreshLoading from '@components/RefreshLoading'

/**
 * nesting: 是否嵌套在其他拉动组件中
 */
class PullUpRefresh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startPos: 0,
      refreshing: false,
      nesting: this.props.nesting || false
    }
  }

  componentDidMount() {
    let parentNode = ReactDOM.findDOMNode(this.scrollContent).parentNode
    parentNode = this.state.nesting ? parentNode.parentNode : parentNode
    this.setState({
      parentNode: parentNode,
      hei: parentNode.clientHeight
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      refreshing: false
    })
  }

  handleTouchMove = e => {
    if (this.state.refreshing === false) {
      let offset =
        this.state.parentNode.scrollHeight -
        this.state.parentNode.scrollTop -
        this.state.hei
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
          ref={el => (this.scrollContent = el)}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {this.props.children}
        </div>
        {this.state.refreshing ? <RefreshLoading orient="up" /> : null}
      </>
    )
  }
}

export default PullUpRefresh
