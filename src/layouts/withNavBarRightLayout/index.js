import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import ShareActionSheet from '@components/ShareActionSheet'
import './style.less'

const withNavBarRightLayout = title => {
  return WrappedComponent => {
    return class extends Component {
      render() {
        return (
          <div className="wrap RightNavBar">
            <NavBar
              className="header"
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={this.goBack}
              rightContent={
                <ShareActionSheet icon={<Icon key="1" type="ellipsis" />} />
              }
              style={{color:"black"}}
            >
              <div>{title}</div>
            </NavBar>
            <div className="content">
              <WrappedComponent {...this.props} />
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
export default withNavBarRightLayout
