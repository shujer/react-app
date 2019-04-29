import React, {useState} from 'react'
import RefreshIcon from '@assets/icons/hot/refresh_icon.png'
import {List} from 'antd-mobile'

const HotPost = props => {
  const [start, show] = useState(0, true)
  return (
    <>
      {show ? (
        <List>
          {props.items.slice(start, 3).map((item, index) => (
            <List.Item key={index}>
              <h3 className="heading">{item.title}</h3>
              <small>{item.user.username}</small>
            </List.Item>
          ))}
        </List>
      ) : null}
    </>
  )
}
export default HotPost
