import React, {Component} from 'react'
import {InputItem, Toast} from 'antd-mobile'
import {createForm} from 'rc-form'
import './style.less'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'
import * as api from '@services/sms'

@withNavBarBasicLayout('')
class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verifyCode: ''
    }
  }

  handleClick = () => {
    this.inputRef.focus()
  }

  submit = e => {
    this.props.form.validateFields((error, value) => {
      if (!error) {
        Toast.success('submit sucess', 1)
      } else {
        if (error['phoneNumber']) {
          Toast.info('请输入正确的手机号或', 1)
        } else {
          Toast.info('输入错误', 1)
        }
      }
    })
  }

  msgVerifyCodeSend = async () => {
    let phoneNumber = this.props.form.getFieldValue('phoneNumber')
    if (phoneNumber && /^1[34578]\d{9}$/.test(phoneNumber)) {
      try {
        let {data} = await api.sendSMSVerifyCode({phoneNumber})
        this.setState({
          verifyCode: data.d
        })
      } catch (err) {
        Toast.info('验证码发送失败', 1)
      }
      Toast.info('验证码已发送', 1)
    } else {
      Toast.info('请输入正确的手机号', 2)
    }
  }

  render() {
    const {getFieldProps} = this.props.form
    return (
      <div className="registerContainer wrap">
        <div className="form">
          <InputItem
            {...getFieldProps('phoneNumber', {
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
          <span className="msgSendButton" onClick={this.msgVerifyCodeSend}>
            发送验证码
          </span>
          <div className="submitButton" onClick={this.submit}>
            注册
          </div>
        </div>
      </div>
    )
  }
}

export default createForm()(Auth)
