import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'

class Feedback extends Component {
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <NavBar icon={<Icon type="left" />} mode="light" onLeftClick={this.goBack}>
          掘金酱
        </NavBar>
      </div>
    )
  }
}

export default Feedback
