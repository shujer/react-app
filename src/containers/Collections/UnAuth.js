import React, {Component} from 'react'
import LoginButton from '@components/LoginButton'
import Image from '@assets/icons/collections/ic_empty_collecitonset.png'

class UnAuth extends Component {
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
          <small>登录查看收藏内容</small>
        </div>

        <LoginButton />
      </div>
    )
  }
}

export default UnAuth
