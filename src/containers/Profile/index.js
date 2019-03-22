import React, {Component} from 'react'
import {NavBar, WhiteSpace} from 'antd-mobile'
import ProfileAvatarBar from '@components/ProfileAvatarBar'
import ProfileList from '@components/ProfileList'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import UnAuth from './UnAuth'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'

let userInfo = {
  uid: '57726622165abd005492ee87',
  username: '稀土掘金',
  avatarLarge:
    require('@assets/icons/profile/empty_avatar_user.png'),
  selfDescription: '',
  jobTitle: '攻城狮',
  company: '稀土星球'
}

@withTabBarBasicLayout('profile')
class ProfileContainer extends Component {
  render() {
    let {currentState} = this.props
    return (
      <>
        {currentState === 'profile' ? (
          <div>
            <NavBar mode="dark">我</NavBar>
            <WhiteSpace />
            <ProfileAvatarBar userInfo={userInfo} />
            <WhiteSpace />
            <ProfileList {...this.props}/>
          </div>
        ) : (
          <UnAuth {...this.props} />
        )}
      </>
    )
  }
}

const mapState = state => ({
  currentState: state.auth.currentState
})

const mapDispatch = ({auth: {logout}}) => ({
  logout: () => logout()
})

export default connect(mapState, mapDispatch)(ProfileContainer)

ProfileContainer.propTypes = {
  currentState: PropTypes.string.isRequired
}
