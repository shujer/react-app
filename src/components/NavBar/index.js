import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'


class Bar extends Component {
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    let {title} = this.props
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={this.goBack}
      >
        {title}
      </NavBar>
    )
  }
}

export default Bar
