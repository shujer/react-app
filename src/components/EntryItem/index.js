import React from 'react'
import {withRouter} from 'react-router-dom'
import PostItem from './PostItem'
import PinItem from './PinItem'

const Entry = ({item, type, ...props}) => {
  switch (type) {
    case 'pin':
      return <PinItem item={item} />
    case 'post':
      return <PostItem item={item} />
    default:
      return <PostItem item={item} />
  }
}

export default withRouter(Entry)
