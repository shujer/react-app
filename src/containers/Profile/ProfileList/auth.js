import React from 'react'
import {withRouter} from 'react-router-dom'
import {List, WhiteSpace, Toast} from 'antd-mobile'
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
        <Item
          thumb={<i className="juejin-icon-md profile-notification" />}
          extra=""
          onClick={() => {}}
        >
          消息中心
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-data-like" />}
          extra={<small>{`${userLikes || 0}篇`}</small>}
          onClick={() => {}}
        >
          我赞过的
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-collectionset" />}
          extra={<small>{`${collectionSetCount || 0}个`}</small>}
          onClick={() => {}}
        >
          收藏集
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-buy" />}
          extra={<small>{`${purchasedBookletCount || 0}本`}</small>}
          onClick={() => {}}
        >
          已购小册
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-data-read" />}
          extra={<small>{`${viewedEntriesCount || 0}篇`}</small>}
          onClick={() => {}}
        >
          阅读过的文章
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-dynamic-tag" />}
          extra={<small>{`${subscribedTagsCount || 0}个`}</small>}
          onClick={() => {}}
        >
          标签管理
        </Item>
      </List>
      <WhiteSpace />
      <List>
        <Item
          thumb={<i className="juejin-icon-md profile-night" />}
          onClick={() => {
            Toast.info('功能尚未开发', 1.5)
          }}
        >
          夜间模式
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-feed-back" />}
          onClick={() => {
            props.history.push('/feedback')
          }}
        >
          意见反馈
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-settings" />}
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
