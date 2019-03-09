import React, {Component} from 'react'
import PageTransition from 'react-router-page-transition'
export default function withPageTransition(WrappedComponent) {
  return class HOC extends Component {
    render() {
      return (
        <PageTransition>
          <WrappedComponent {...this.props} />
        </PageTransition>
      )
    }
  }
}
