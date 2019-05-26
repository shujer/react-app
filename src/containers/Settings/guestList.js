import React, {Component} from 'react'
import {List, WhiteSpace, Switch, Toast} from 'antd-mobile'
import {createForm} from 'rc-form'
import './style.less'

const Item = List.Item

class Setting extends Component {
  state = {
    weiboChecked: false,
    wechatChecked: false,
    githubChecked: false,
    imgChecked: false,
    pasteChecked: false
  }

  handleNotComplete = () => {
    Toast.info('功能尚未开发', 1.5)
  }

  render() {
    const {getFieldProps} = this.props.form
    return (
      <div className="wrap">
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
          <Item onClick={() => this.props.history.push('/joinus')}>关于</Item>
        </List>
        <WhiteSpace />
        <footer className="footer">掘金 5.7.6 · juejin.im</footer>
        <WhiteSpace />
      </div>
    )
  }
}

export default (createForm()(Setting))
