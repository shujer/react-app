import React, {Component} from 'react'
import {InputItem, Toast} from 'antd-mobile'
import {createForm} from 'rc-form'
import Logo from '@assets/icons/ic_login_logo.png'
import './style.less'

let inputPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9]{2,})+$|^1[34578]\d{9}$/

class LoginForm extends Component {
  handleClick = () => {
    this.inputRef.focus()
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (!error) {
        this.props.handleLogin({...value})
      } else {
        if (error['verifyText']) {
          Toast.info('请输入正确的手机号或邮箱', 2)
        } else {
          Toast.info('输入错误', 2)
        }
      }
    })
  }
  handleRegister = () => {
    this.props.handleRegister()
  }
  render() {
    const {getFieldProps} = this.props.form
    return (
      <div className="loginContainer">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <InputItem
          {...getFieldProps('verifyText', {
            rules: [{required: true, pattern: inputPattern}]
          })}
          placeholder="手机号/邮箱"
          ref={el => (this.inputRef = el)}
        />
        <InputItem
          {...getFieldProps('password', {
            rules: [{required: true}]
          })}
          type="password"
          placeholder="密码"
          ref={el => (this.inputRef = el)}
        />
        <div className="submitButton" onClick={this.submit}>
          登录
        </div>
        <div className="info">
          <span>忘记密码？</span>
          <span onClick={this.handleRegister}>注册账号</span>
        </div>
      </div>
    )
  }
}

export default createForm()(LoginForm)
