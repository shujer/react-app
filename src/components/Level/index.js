import React from 'react'
const Level = ({level, ...props}) =>
  level ? (
    <img
      src={require('@assets/icons/level/ic_user_lv' + level + '.png')}
      alt={level}
      {...props}
    />
  ) : null
export default Level
