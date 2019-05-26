import React, {Component} from 'react'
import LoginButton from '@components/LoginButton'
import Image from '@assets/icons/post/entry_image_default.png'

class LoginInfo extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 80px)'
        }}
      >
        <div>
          <img src={Image} alt="info" width={50} />
        </div>
        <div style={{padding: '10px 0 10px 0'}}>
          <small>需要您登录，登录后使用更多功能</small>
        </div>

        <LoginButton />
      </div>
    )
  }
}

export default LoginInfo
