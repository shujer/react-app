import React from 'react'
import {withRouter} from 'react-router-dom'
import {List, WhiteSpace} from 'antd-mobile'
import {
  NoticeIcon,
  UserDataLikeIcon,
  CollectionSetIcon,
  BuyIcon,
  UserReadIcon,
  TagIcon,
  FeedBacIcon,
  SettingIcon
} from '@components/Icons'
let Item = List.Item

const ProfileList = props => {
  let handleUnlogin = () => {
    props.history.push('/auth')
  }
  return (
    <>
      <List>
        <Item thumb={<NoticeIcon/>} extra="" onClick={handleUnlogin}>
          消息中心
        </Item>
        <Item thumb={<UserDataLikeIcon/>} extra={`0篇`} onClick={handleUnlogin}>
          我赞过的
        </Item>
        <Item thumb={<CollectionSetIcon/>} extra={`0个`} onClick={handleUnlogin}>
          收藏集
        </Item>
        <Item thumb={<BuyIcon/>} extra={`0本`} onClick={handleUnlogin}>
          已购小册
        </Item>
        <Item thumb={<UserReadIcon/>} extra={`0篇`} onClick={handleUnlogin}>
          阅读过的文章
        </Item>
        <Item thumb={<TagIcon/>} extra={`0个`} onClick={handleUnlogin}>
          标签管理
        </Item>
      </List>
      <WhiteSpace />
      <List>
        <Item
          thumb={<FeedBacIcon/>}
          onClick={() => props.history.push('/feedback')}
        >
          意见反馈
        </Item>
        <Item thumb={<SettingIcon/>} onClick={() => {props.history.push('/settings')}}>
          设置
        </Item>
      </List>
    </>
  )
}
export default withRouter(ProfileList)