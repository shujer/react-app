import React, {useState} from 'react'
import RefreshIcon from '@assets/icons/hot/refresh_icon.png'
import Moment from '@components/Moment'
import {sortByKey} from '@utils/listHelper'
import {List} from 'antd-mobile'
import './style.less'

const HotPost = props => {
  return (
    <List>
      {props.items.slice(0, 3).map((item, index) => (
        <List.Item key={index} className="HotEntry">
          <h4>{item.title}</h4>
          <small>
            {}人赞 · {item.user.username} · <Moment date={item.createdAt} />
          </small>
        </List.Item>
      ))}
    </List>
  )
}
export default HotPost
