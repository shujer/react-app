import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import './style.less'

const withNavBarBasicLayout = title => {
  return WrappedComponent => {
    return class extends Component {
      render() {
        return (
          <div className="wrap BasicNavBar">
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={this.goBack}
              className="header"
            >
              <h2>{title}</h2>
            </NavBar>
            <div className="content">
            <WrappedComponent {...this.props}/>
            </div>
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
