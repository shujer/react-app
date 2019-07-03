import React from 'react'

var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler)
    } else {
      element['on' + type] = handler
    }
  }
}

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    // 更新异常
    return { hasError: true }
  }

  componentDidCatch () {
    this.setState({
      hasError: true
    })
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    if (navigator && !navigator.onLine) {
      return <h1>Offline.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
