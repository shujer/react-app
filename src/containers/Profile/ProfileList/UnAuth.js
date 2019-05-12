import React from 'react'
import {withRouter} from 'react-router-dom'
import {List, WhiteSpace} from 'antd-mobile'
import NotificationIcon from '@assets/icons/profile/ic_notification.png'
import UserLiked from '@assets/icons/profile/user_liked_pin.png'
import UserCollectionset from '@assets/icons/profile/user_collectionset.png'
import UserBuy from '@assets/icons/profile/user_buy.png'
import UserDataRead from '@assets/icons/profile/ic_user_data_read.png'
import TagIcon from '@assets/icons/profile/ic_dynamic_tag.png'
import FeedBackIcon from '@assets/icons/profile/icon_feed_back.png'
import SettingsIcon from '@assets/icons/profile/settings.png'
let Item = List.Item

const ProfileList = props => {
  let handleUnlogin = () => {
    props.history.push('/auth')
  }
  return (
    <>
      <List>
        <Item thumb={NotificationIcon} extra="" onClick={handleUnlogin}>
          消息中心
        </Item>
        <Item thumb={UserLiked} extra={`0篇`} onClick={handleUnlogin}>
          我赞过的
        </Item>
        <Item thumb={UserCollectionset} extra={`0个`} onClick={handleUnlogin}>
          收藏集
        </Item>
        <Item thumb={UserBuy} extra={`0本`} onClick={handleUnlogin}>
          已购小册
        </Item>
        <Item thumb={UserDataRead} extra={`0篇`} onClick={handleUnlogin}>
          阅读过的文章
        </Item>
        <Item thumb={TagIcon} extra={`0个`} onClick={handleUnlogin}>
          标签管理
        </Item>
      </List>
      <WhiteSpace />
      <List>
        <Item
          thumb={FeedBackIcon}
          onClick={() => props.history.push('/feedback')}
        >
          意见反馈
        </Item>
        <Item thumb={SettingsIcon} onClick={handleUnlogin}>
          设置
        </Item>
      </List>
    </>
  )
}
export default withRouter(ProfileList)
