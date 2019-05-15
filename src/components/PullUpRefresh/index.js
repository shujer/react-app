import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RefreshLoading from '@components/RefreshLoading'
import PropTypes from 'prop-types'

/**
 * nesting: 是否嵌套在其他拉动组件中
 */
class PullUpRefresh extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startPos: 0,
      refreshing: false,
      useBodyScroll: this.props.useBodyScroll || false
    }
  }

  componentDidMount() {
    let scrollContainer
    if (this.state.useBodyScroll) {
      var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat'
      scrollContainer = isCSS1Compat ? document.documentElement : document.body
    } else {
      scrollContainer = ReactDOM.findDOMNode(this.scrollContent).parentNode
    }
    this.setState({
      scrollContainer: scrollContainer,
      clientHeight: scrollContainer.clientHeight
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
        this.state.scrollContainer.scrollHeight -
        this.state.scrollContainer.scrollTop -
        this.state.clientHeight
      if (offset <= 0) {
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
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (this.state.refreshing) {
        this.setState({
          refreshing: false
        })
      }
    }, 8000)
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

PullUpRefresh.propTypes = {
  onRefresh: PropTypes.func.isRequired
}
