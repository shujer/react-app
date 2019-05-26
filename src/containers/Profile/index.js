import React, {Component} from 'react'
import {NavBar, WhiteSpace} from 'antd-mobile'
import ProfileAvatarBar from './ProfileAvatarBar/guest'
import ProfileList from './ProfileList/guest'
import WithAuthProfileAvatarBar from './ProfileAvatarBar/auth'
import WithAuthProfileList from './ProfileList/auth'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import {connect} from 'react-redux'

@withTabBarBasicLayout
class ProfileContainer extends Component {
  render() {
    let {isLogin, userDetail} = this.props
    return (
      <>
        <div>
          <NavBar mode="dark">我</NavBar>
          <WhiteSpace />
          {isLogin ? (
            <WithAuthProfileAvatarBar user={userDetail} />
          ) : (
            <ProfileAvatarBar />
          )}
          <WhiteSpace />
          {isLogin ? (
            <WithAuthProfileList user={userDetail} />
          ) : (
            <ProfileList />
          )}
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
