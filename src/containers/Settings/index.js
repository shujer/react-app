import React, {Component} from 'react'
import {List, WhiteSpace, Switch, Modal} from 'antd-mobile'
import {createForm} from 'rc-form'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'
import {Redirect} from 'react-router-dom'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import './style.less'

const Item = List.Item
const alert = Modal.alert

@withNavBarBasicLayout('设置')
class Setting extends Component {
  state = {
    weiboChecked: false,
    wechatChecked: false,
    githubChecked: false,
    imgChecked: false,
    pasteChecked: false
  }
  handleLogout = () => {
    let {logout} = this.props
    logout().then(() => {
      this.props.history.replace('/auth')
    })
  }
  render() {
    const {getFieldProps} = this.props.form
    let {currentState} = this.props
    return (
      <>
        {currentState === 'profile' ? (
          <>
            {' '}
            <List>
              <Item extra="未设置">邮箱</Item>
              <Item extra="未设置">手机号</Item>
              <Item>修改账户密码</Item>
            </List>
            <WhiteSpace />
            <List>
              <Item
                extra={
                  <Switch
                    {...getFieldProps('weiboChecked', {
                      initialValue: this.state.weiboChecked,
                      valuePropName: 'checked',
                      onChange: val => {
                        console.log(val)
                      }
                    })}
                    onClick={checked => {
                      this.props.form.setFieldsValue({
                        weiboChecked: checked
                      })
                    }}
                  />
                }
              >
                绑定新浪微博
              </Item>
              <Item
                extra={
                  <Switch
                    {...getFieldProps('wechatChecked', {
                      initialValue: this.state.wechatChecked,
                      valuePropName: 'checked',
                      onChange: val => {
                        console.log(val)
                      }
                    })}
                    onClick={checked => {
                      this.props.form.setFieldsValue({
                        wechatChecked: checked
                      })
                    }}
                  />
                }
              >
                绑定微信
              </Item>
              <Item
                extra={
                  <Switch
                    {...getFieldProps('githubChecked', {
                      initialValue: this.state.githubChecked,
                      valuePropName: 'checked',
                      onChange: val => {
                        console.log(val)
                      }
                    })}
                    onClick={checked => {
                      this.props.form.setFieldsValue({
                        githubChecked: checked
                      })
                    }}
                  />
                }
              >
                绑定Github
              </Item>
            </List>
            <WhiteSpace />
            <List>
              <Item>清除缓存</Item>
              <Item>推送消息设置</Item>
              <Item
                extra={
                  <Switch
                    {...getFieldProps('imgChecked', {
                      initialValue: this.state.imgChecked,
                      valuePropName: 'checked',
                      onChange: val => {
                        console.log(val)
                      }
                    })}
                    onClick={checked => {
                      this.props.form.setFieldsValue({
                        imgChecked: checked
                      })
                    }}
                  />
                }
              >
                移动网络下首页不显示图片
              </Item>
              <Item
                extra={
                  <Switch
                    {...getFieldProps('pasteChecked', {
                      initialValue: this.state.pasteChecked,
                      valuePropName: 'checked',
                      onChange: val => {
                        console.log(val)
                      }
                    })}
                    onClick={checked => {
                      this.props.form.setFieldsValue({
                        pasteChecked: checked
                      })
                    }}
                  />
                }
              >
                自动检查粘贴板快速分享
              </Item>
            </List>
            <WhiteSpace />
            <List>
              <Item>关于</Item>
            </List>
            <WhiteSpace />
            <List>
              <Item
                className="logoutItem"
                onClick={() =>
                  alert('确定退出？', '', [
                    {text: '取消', onPress: () => console.log('cancel')},
                    {text: '确定', onPress: () => this.handleLogout()}
                  ])
                }
              >
                退出登录
              </Item>
            </List>
            <WhiteSpace />
            <footer>掘金 5.7.6 · juejin.im</footer>
            <WhiteSpace />
          </>
        ) : (
          <Redirect to="/" />
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

export default connect(
  mapState,
  mapDispatch
)(createForm()(Setting))

Setting.propTypes = {
  currentState: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
}
