import React from 'react'
import {Icon} from 'antd-mobile'
const style = {
  height: '40px',
  position: 'absolute',
  zIndex: '999',
  width: '100%',
  textAlign: 'center',
  padding:"9px 0"
}
const Loading = () => {
  return (
    <div style={style}>
      <Icon type="loading"/>
    </div>
  )
}

export default Loading
