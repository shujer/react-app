import React from 'react'
import './style.less'
const Level = ({level, size, ...props}) =>
  level ? (
    <i
      className={`level-${level} juejin-icon-${size || 'md'}`}
      style={{marginRight: '12px'}}
    />
  ) : null
export default Level
