import React from 'react'
import {handleStrOverflow} from '@utils/stringHelper'

export default ({str, type = 'small', len = 15, style = {}}) => {
  return React.createElement(
    type,
    {style: {whiteSpace: 'nowrap', ...style}},
    str ? handleStrOverflow(str, len) : ''
  )
}
