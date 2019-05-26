import React, {Component} from 'react'
import WithAuthSettingList from './authList'
import SettingList from './guestList'
import {createForm} from 'rc-form'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'
import {connect} from 'react-redux'

import './style.less'

@withNavBarBasicLayout('设置')
class Setting extends Component {
  handleLogout = () => {
    this.props.logout().then(() => {
      this.props.history.push('/auth')
    })
  }
  render() {
    const {isLogin} = this.props
    return (
      <>
        {isLogin ? (
          <WithAuthSettingList logout={this.handleLogout} />
        ) : (
          <SettingList />
        )}
      </>
    )
  }
}

const mapState = state => ({
  isLogin: state.auth.isLogin
})

const mapDispatch = ({auth: {logout}}) => ({
  logout: () => logout()
})

export default connect(
  mapState,
  mapDispatch
)(createForm()(Setting))
