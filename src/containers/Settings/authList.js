import React, {Component} from 'react'
import {List, WhiteSpace, Switch, Modal, Toast} from 'antd-mobile'
import {createForm} from 'rc-form'
import {withRouter} from 'react-router-dom'

import './style.less'

const Item = List.Item
const alert = Modal.alert

class Setting extends Component {
  state = {
    weiboChecked: false,
    wechatChecked: false,
    githubChecked: false,
    imgChecked: false,
    pasteChecked: false
  }

  handleLogout = () => {
    this.props.logout()
  }

  handleNotComplete = () => {
    Toast.info('功能尚未开发', 1.5)
  }

  render() {
    const {getFieldProps} = this.props.form
    return (
      <>
        <List>
          <Item extra="未设置" onClick={this.handleNotComplete}>
            {'邮箱'}
          </Item>
          <Item extra="未设置" onClick={this.handleNotComplete}>
            {'手机号'}
          </Item>
          <Item onClick={this.handleNotComplete}>{'修改账户密码'}</Item>
        </List>
        <WhiteSpace />
        <List>
          <Item
            onClick={this.handleNotComplete}
            extra={
              <Switch
                disabled
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
            {'绑定新浪微博'}
          </Item>
          <Item
            onClick={this.handleNotComplete}
            extra={
              <Switch
                disabled
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
            {'绑定微信'}
          </Item>
          <Item
            onClick={this.handleNotComplete}
            extra={
              <Switch
                disabled
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
            {'绑定Github'}
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item onClick={this.handleNotComplete}>{'清除缓存'}</Item>
          <Item onClick={this.handleNotComplete}>{'推送消息设置'}</Item>
          <Item
            onClick={this.handleNotComplete}
            extra={
              <Switch
                disabled
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
            onClick={this.handleNotComplete}
            extra={
              <Switch
                disabled
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
          <Item onClick={() => this.props.history.push('/joinUs')}>关于</Item>
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
    )
  }
}

export default withRouter((createForm()(Setting)))
