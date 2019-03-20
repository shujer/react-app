import React, {Component} from 'react'
import {InputItem} from 'antd-mobile'
import {createForm} from 'rc-form'
import GithubIcon from '@assets/icons/icon_github.png'
import WechatIcon from '@assets/icons/icon_wechat.png'
import WeiboIcon from '@assets/icons/icon_weibo.png'
import Logo from '@assets/icons/ic_login_logo.png'
import './style.less'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'

@withNavBarBasicLayout('')
class Auth extends Component {
  handleClick = () => {
    this.inputRef.focus()
  }
  render() {
    const {getFieldProps} = this.props.form
    return (
      <div className="authContainer">
        <main>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="form">
            <InputItem
              {...getFieldProps('verifyText')}
              placeholder="手机号/邮箱"
              ref={el => (this.inputRef = el)}
            />
            <InputItem
              {...getFieldProps('password')}
              type="password"
              placeholder="密码"
              ref={el => (this.inputRef = el)}
            />
            <div className="submitButton">登录</div>
            <div className="info">
              <span>忘记密码？</span>
              <span>注册账号</span>
            </div>
          </div>
        </main>
        <footer>
          <div className="splitLine">
            <div className="line" />
            <div className="detail">其他账号登录</div>
          </div>
          <div className="thirdAuth">
            <div>
              <img src={WeiboIcon} alt="weibo" />
              <span>微博</span>
            </div>
            <div>
              <img src={WechatIcon} alt="weibo" />
              <span>微信</span>
            </div>
            <div>
              <img src={GithubIcon} alt="weibo" />
              <span>Github</span>
            </div>
          </div>
          掘金·juejin.im
        </footer>
      </div>
    )
  }
}

export default createForm()(Auth)
