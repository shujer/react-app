import React from 'react'
import {withRouter} from 'react-router-dom'
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
  let {userLikes, collectionSetCount, purchasedBookletCount, viewedEntriesCount, subscribedTagsCount} = props.user
  return (
    <>
      <List>
        <Item thumb={NotificationIcon} extra="" onClick={() => {}}>
          消息中心
        </Item>
        <Item thumb={UserLiked} extra={<small>{`${userLikes || 0}篇`}</small>} onClick={() => {}}>
          我赞过的
        </Item>
        <Item thumb={UserCollectionset} extra={<small>{`${collectionSetCount||0}个`}</small>} onClick={() => {}}>
          收藏集
        </Item>
        <Item thumb={UserBuy} extra={<small>{`${purchasedBookletCount||0}本`}</small>} onClick={() => {}}>
          已购小册
        </Item>
        <Item thumb={UserDataRead} extra={<small>{`${viewedEntriesCount||0}篇`}</small>} onClick={() => {}}>
          阅读过的文章
        </Item>
        <Item thumb={TagIcon} extra={<small>{`${subscribedTagsCount||0}个`}</small>} onClick={() => {}}>
          标签管理
        </Item>
      </List>
      <WhiteSpace />
      <List>
        <Item thumb={NightIcon} onClick={() => {}}>
          夜间模式
        </Item>
        <Item thumb={FeedBackIcon} onClick={() => {props.history.push('/feedback')}}>
          意见反馈
        </Item>
        <Item thumb={SettingsIcon} onClick={() => {props.history.push('/settings')}}>
          设置
        </Item>
      </List>
    </>
  )
}
export default withRouter(ProfileList)
