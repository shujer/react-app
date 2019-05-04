import React from 'react'
import {Icon} from 'antd-mobile'
import entryDefault from '@assets/icons/post/entry_image_default.png'
import './style.less'
const Loading = props => {
  let {orient} = props
  return (
    <>
      {orient === 'down' ? (
        <div className="refreshTop">
          <Icon type="loading" />
        </div>
      ) : (
        <div className="refreshBottom">
          {/* <img src={entryDefault} alt="loading" /> */}
          <Icon type="loading" />
        </div>
      )}
    </>
  )
}

export default Loading
