import React from 'react'
import {withRouter} from 'react-router-dom'
import {List, WhiteSpace} from 'antd-mobile'
let Item = List.Item

const ProfileList = props => {
  let handleUnlogin = () => {
    props.history.push('/auth')
  }
  return (
    <>
      <List>
        <Item
          thumb={<i className="juejin-icon-md profile-notification" />}
          extra=""
          onClick={handleUnlogin}
        >
          消息中心
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-data-like" />}
          extra={`0篇`}
          onClick={handleUnlogin}
        >
          我赞过的
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-collectionset" />}
          extra={`0个`}
          onClick={handleUnlogin}
        >
          收藏集
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-buy" />}
          extra={`0本`}
          onClick={handleUnlogin}
        >
          已购小册
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-user-data-read" />}
          extra={`0篇`}
          onClick={handleUnlogin}
        >
          阅读过的文章
        </Item>
        <Item
          thumb={<i className="juejin-icon-md profile-dynamic-tag" />}
          extra={`0个`}
          onClick={handleUnlogin}
        >
          标签管理
        </Item>
      </List>
      <WhiteSpace />
      <List>
        <Item
          thumb={<i className="juejin-icon-md profile-feed-back" />}
          onClick={() => props.history.push('/feedback')}
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
