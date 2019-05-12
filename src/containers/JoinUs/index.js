import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'

@withNavBarRightLayout('稀土 - 加入我们')
class JoinUs extends Component {
  constructor() {
    super()
    this.state = {
      iFrameHeight: '0px'
    }
  }

  render() {
    return (
      <iframe
        style={{
          width: '100%',
          height: this.state.iFrameHeight,
          overflow: 'visible'
        }}
        onLoad={() => {
          const obj = ReactDOM.findDOMNode(this)
          this.setState({
            iFrameHeight: obj.contentWindow.document.body.scrollHeight + 'px'
          })
        }}
        ref="iframe"
        src="/xitu/稀土 － 加入我们.html"
        width="100%"
        scrolling="no"
        frameBorder="0"
      />
    )
  }
}

export default JoinUs
