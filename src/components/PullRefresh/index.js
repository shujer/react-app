import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import RefreshLoading from '@components/RefreshLoading'
import PropTypes from 'prop-types'

/**
 * 整合向下刷新和向上加载组件，合理化逻辑
 * 必须指定down/up为true
 */
class PullDownRefresh extends Component {
  state = {
    startPos: 0,
    upRefreshing: false,
    downRefreshing: true,
    minHeight: this.props.minHeight || 60,
    down: this.props.down || false,
    up: this.props.up || false,
    useBodyScroll: this.props.useBodyScroll || false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.downRefreshing !== this.state.downRefreshing) {
      this.setState({
        downRefreshing: nextProps.downRefreshing
      })
    }
    if (nextProps.upRefreshing !== this.state.upRefreshing) {
      this.setState({
        upRefreshing: nextProps.upRefreshing
      })
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

  handleTouchStart = e => {
    if (this.state.down) {
      this.setState({
        startPos: e.touches[0].pageY
      })
    }
  }

  handleTouchMove = e => {
    if (
      this.state.down &&
      !this.state.downRefreshing &&
      this.state.scrollContainer.scrollTop === 0
    ) {
      let _pullHeight = e.touches[0].pageY - this.state.startPos
      if (_pullHeight > this.state.minHeight) {
        this.setState({
          downRefreshing: true
        })
      }
    }
    if (this.state.up && !this.state.upRefreshing) {
      let offset =
        this.state.scrollContainer.scrollHeight -
        this.state.scrollContainer.scrollTop -
        this.state.clientHeight
      if (offset <= 0) {
        this.setState({
          upRefreshing: true
        })
      }
    }
  }

  handleTouchEnd = e => {
    if (this.state.down && this.state.downRefreshing) {
      this.props.onDownRefresh()
    }
    if (this.state.up && this.state.upRefreshing) {
      this.props.onUpRefresh()
    }
  }

  render() {
    return (
      <>
        {this.state.downRefreshing ? <RefreshLoading orient="down" /> : null}
        <div
          ref={el => (this.scrollContent = el)}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          {this.props.children}
        </div>
        {this.state.up && this.state.upRefreshing ? (
          <RefreshLoading orient="up" />
        ) : null}
      </>
    )
  }
}

export default PullDownRefresh

PullDownRefresh.propTypes = {
  down: PropTypes.bool,
  up: PropTypes.bool,
  downRefreshing: PropTypes.bool,
  upRefreshing: PropTypes.bool
}
