import React, {Component} from 'react'
import {NavBar, WhiteSpace} from 'antd-mobile'
import ProfileAvatarBar from '@components/ProfileAvatarBar'
import ProfileList from './ProfileList'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import UnAuth from './UnAuth'
import {connect} from 'react-redux'

@withTabBarBasicLayout
class ProfileContainer extends Component {
  render() {
    let {isLogin, userDetail} = this.props
    return (
      <>
        {isLogin ? (
          <div>
            <NavBar mode="dark">我</NavBar>
            <WhiteSpace />
            <ProfileAvatarBar user={userDetail} />
            <WhiteSpace />
            <ProfileList user={userDetail} />
          </div>
        ) : (
          <UnAuth />
        )}
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
