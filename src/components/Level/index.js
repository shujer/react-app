import React from 'react'
const Level = ({level, height}) =>
  level ? (
    <img
      src={require('@assets/icons/level/ic_user_lv' + level + '.png')}
      alt={level}
      style={{height: height || '12px'}}
    />
  ) : null
export default Level
