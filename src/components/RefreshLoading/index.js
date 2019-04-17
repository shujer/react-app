import React from 'react'
import {Icon} from 'antd-mobile'
import entryDefault from '@assets/icons/post/entry_image_default.png'
import './style.less'
const Loading = props => {
  let {orient} = props
  return (
    <>
      {orient === 'up' ? (
        <div className="refreshTop">
          <Icon type="loading" />
        </div>
      ) : (
        <div className="refreshDown">
          <img src={entryDefault} alt="loading" />
        </div>
      )}
    </>
  )
}

export default Loading
