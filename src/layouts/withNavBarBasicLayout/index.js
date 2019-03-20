import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'

const withNavBarBasicLayout = title => {
  return WrappedComponent => {
    return class extends Component {
      render() {
        return (
          <div style={{minHeight: '100vh', height: '100%', display: 'flex', flexDirection:'column'}}>
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={this.goBack}
            >
              {title}
            </NavBar>
            <WrappedComponent {...this.props}/>
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
