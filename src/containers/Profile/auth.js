import React, {Component} from 'react'
import {NavBar, WhiteSpace} from 'antd-mobile'
import ProfileAvatarBar from './ProfileAvatarBar/auth'
import ProfileList from './ProfileList/auth'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import {connect} from 'react-redux'

@withTabBarBasicLayout
class ProfileContainer extends Component {
  render() {
    let {userDetail} = this.props
    return (
      <>
        <div>
          <NavBar mode="dark">我</NavBar>
          <WhiteSpace />
          <ProfileAvatarBar user={userDetail} />
          <WhiteSpace />
          <ProfileList user={userDetail} />
        </div>
      </>
    )
  }
}

const mapState = state => ({
  isLogin: state.auth.isLogin,
  userDetail: state.auth.userDetail
})

const mapDispatch = ({auth: {logout}}) => ({
  logout: () => logout()
})

export default connect(
  mapState,
  mapDispatch
)(ProfileContainer)
