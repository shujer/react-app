import React from 'react'
import { Link } from 'react-router-dom'
import './style.less'

const Tag = ({ title, id}) => {
  return (
    <Link to={`/topic/${id}`} className='taglink' title={`/topic/${id}`} >
      <small>{title}</small>
    </Link>
  )
}

export default Tag
