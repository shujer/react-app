import React from 'react'
import {List, WhiteSpace} from 'antd-mobile'
import NotificationIcon from '@assets/icons/profile/ic_notification.png'
import UserLiked from '@assets/icons/profile/user_liked_pin.png'
import UserCollectionset from '@assets/icons/profile/user_collectionset.png'
import UserBuy from '@assets/icons/profile/user_buy.png'
import UserDataRead from '@assets/icons/profile/ic_user_data_read.png'
import TagIcon from '@assets/icons/profile/ic_dynamic_tag.png'
import NightIcon from '@assets/icons/profile/ic_night.png'
import FeedBackIcon from '@assets/icons/profile/icon_feed_back.png'
import SettingsIcon from '@assets/icons/profile/settings.png'
let Item = List.Item

const ProfileList = props => {
  let push = props.history.push
  let [userLikes, userCollectionset, userBuy, userRead, tagNum] = [0, 0, 0, 0, 0]
  return (
    <>
      <List>
        <Item thumb={NotificationIcon} extra="" onClick={() => {}}>
          消息中心
        </Item>
        <Item thumb={UserLiked} extra={`${userLikes}篇`} onClick={() => {}}>
          我赞过的
        </Item>
        <Item thumb={UserCollectionset} extra={`${userCollectionset}个`} onClick={() => {}}>
          收藏集
        </Item>
        <Item thumb={UserBuy} extra={`${userBuy}本`} onClick={() => {}}>
          已购小册
        </Item>
        <Item thumb={UserDataRead} extra={`${userRead}篇`} onClick={() => {}}>
          阅读过的文章
        </Item>
        <Item thumb={TagIcon} extra={`${tagNum}个`} onClick={() => {}}>
          标签管理
        </Item>
      </List>
      <WhiteSpace />
      <List>
        <Item thumb={NightIcon} onClick={() => {}}>
          夜间模式
        </Item>
        <Item thumb={FeedBackIcon} onClick={() => {push('/feedback')}}>
          意见反馈
        </Item>
        <Item thumb={SettingsIcon} onClick={() => {push('/settings')}}>
          设置
        </Item>
      </List>
    </>
  )
}
export default ProfileList
