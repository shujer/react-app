import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'

const withNavBarBasicLayout = title => {
  return WrappedComponent => {
    return class extends Component {
      render() {
        return (
          <div className="transition-item">
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={this.goBack}
            >
              {title}
            </NavBar>
            <WrappedComponent {...this.props} />
          </div>
        )
      }
      goBack = () => {
        this.props.history.goBack()
      }
    }
  }
}
export default withNavBarBasicLayout
