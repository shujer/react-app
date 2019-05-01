import React from 'react'
import {ActionSheet} from 'antd-mobile'
import './style.less'
const Icons = {
  message: 'message_card',
  wechat: 'share_wechat',
  cicle: 'share_circle',
  qq: 'share_qq',
  weibo: 'share_weibo',
  report: 'option_report_entry',
  collect: 'option_collection',
  link: 'share_link',
  earth: 'share_earth'
}

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(
//   window.navigator.userAgent
// )
// let wrapProps
// if (isIPhone) {
//   wrapProps = {
//     onTouchStart: e => e.preventDefault()
//   }
// }

class ShareActionSheet extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: 'none'
    }
  }

  shareList = [
    {url: 'message', title: '消息卡片'},
    {url: 'wechat', title: '微信'},
    {url: 'cicle', title: '朋友圈'},
    {url: 'qq', title: 'QQ'},
    {url: 'weibo', title: '微博'}
  ].map(obj => ({
    icon: (
      <img
        src={require('@assets/icons/share/' + Icons[obj.url] + '.png')}
        alt={obj.title}
        style={{width: '100%'}}
      />
    ),
    title: obj.title
  }))
  otherList = [
    {url: 'collect', title: '收藏'},
    {url: 'report', title: '报告'},
    {url: 'link', title: '复制链接'},
    {url: 'earth', title: '浏览器打开'}
  ].map(obj => ({
    icon: (
      <img
        src={require('@assets/icons/share/' + Icons[obj.url] + '.png')}
        alt={obj.title}
        style={{width: 21}}
      />
    ),
    title: obj.title
  }))
  showShareActionSheetMulpitleLine = () => {
    const data = [[...this.shareList], [...this.otherList]]
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: data,
        message: ''
      },
      (buttonIndex, rowIndex) => {
        this.setState({
          clicked:
            buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel'
        })
      }
    )
  }

  render() {
    return <div onClick={this.showShareActionSheetMulpitleLine}>{this.props.icon}</div>
  }
}

export default ShareActionSheet
