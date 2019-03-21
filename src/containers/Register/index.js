import React, {Component} from 'react'
import {InputItem, Toast} from 'antd-mobile'
import {createForm} from 'rc-form'
import './style.less'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'

@withNavBarBasicLayout('')
class Auth extends Component {
  handleClick = () => {
    this.inputRef.focus()
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      if (!error) {
        //await
        Toast.success('submit sucess', 1)
      } else {
        if (error['verifyText']) {
          Toast.info('请输入正确的手机号或', 2)
        } else {
          Toast.info('输入错误', 2)
        }
      }
    })
  }
  msgVerifyCodeSend = () => {
    this.props.form.validateFields((error, value) => {
      if (!error) {
        //await
        Toast.info('验证码已发送', 1)
      } else {
        if (error['verifyText']) {
          Toast.info('请输入正确的手机号', 2)
        } else {
          Toast.info('输入错误', 2)
        }
      }
    })
  }
  render() {
    const {getFieldProps} = this.props.form
    return (
      <div className="registerContainer">
        <div className="form">
          <InputItem
            {...getFieldProps('verifyText', {
              rules: [{required: true, pattern: /^1[34578]\d{9}$/}]
            })}
            placeholder="手机号"
            ref={el => (this.inputRef = el)}
          />
          <InputItem
            {...getFieldProps('username', {
              rules: [{required: true}]
            })}
            placeholder="用户名"
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
          <InputItem
            className="msgInput"
            {...getFieldProps('verifyCode')}
            type="text"
            placeholder="短信验证码"
            ref={el => (this.inputRef = el)}
          />
          <span className="msgSendButton" onClick={this.msgVerifyCodeSend}>发送验证码</span>
          <div className="submitButton" onClick={this.submit}>
            注册
          </div>
        </div>
      </div>
    )
  }
}

export default createForm()(Auth)
