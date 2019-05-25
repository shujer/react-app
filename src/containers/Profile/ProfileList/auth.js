import React from 'react'
import {withRouter} from 'react-router-dom'
import {List, WhiteSpace, Toast} from 'antd-mobile'
import {
  NoticeIcon,
  UserDataLikeIcon,
  CollectionSetIcon,
  BuyIcon,
  UserReadIcon,
  TagIcon,
  NightIcon,
  FeedBacIcon,
  SettingIcon
} from '@components/Icons'
let Item = List.Item

const ProfileList = props => {
  let {
    userLikes,
    collectionSetCount,
    purchasedBookletCount,
    viewedEntriesCount,
    subscribedTagsCount
  } = props.user
  return (
    <>
      <List>
        <Item thumb={<NoticeIcon />} extra="" onClick={() => {}}>
          消息中心
        </Item>
        <Item
          thumb={<UserDataLikeIcon />}
          extra={<small>{`${userLikes || 0}篇`}</small>}
          onClick={() => {}}
        >
          我赞过的
        </Item>
        <Item
          thumb={<CollectionSetIcon />}
          extra={<small>{`${collectionSetCount || 0}个`}</small>}
          onClick={() => {}}
        >
          收藏集
        </Item>
        <Item
          thumb={<BuyIcon />}
          extra={<small>{`${purchasedBookletCount || 0}本`}</small>}
          onClick={() => {}}
        >
          已购小册
        </Item>
        <Item
          thumb={<UserReadIcon />}
          extra={<small>{`${viewedEntriesCount || 0}篇`}</small>}
          onClick={() => {}}
        >
          阅读过的文章
        </Item>
        <Item
          thumb={<TagIcon />}
          extra={<small>{`${subscribedTagsCount || 0}个`}</small>}
          onClick={() => {}}
        >
          标签管理
        </Item>
      </List>
      <WhiteSpace />
      <List>
        <Item
          thumb={<NightIcon />}
          onClick={() => {
            Toast.info('功能尚未开发', 1.5)
          }}
        >
          夜间模式
        </Item>
        <Item
          thumb={<FeedBacIcon />}
          onClick={() => {
            props.history.push('/feedback')
          }}
        >
          意见反馈
        </Item>
        <Item
          thumb={<SettingIcon />}
          onClick={() => {
            props.history.push('/settings')
          }}
        >
          设置
        </Item>
      </List>
    </>
  )
}
export default withRouter(ProfileList)
