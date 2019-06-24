import React, {Component} from 'react'
import {FollowIcon, UnFollowIcon} from '@components/Icons'
import {Icon} from 'antd-mobile'

let UnfollowButton = props => (
  <div
    className="UnfollowButton"
    onClick={() => {
      props.submit()
    }}
    style={{
      width: '5rem',
      height: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      border: '1px solid #66C300',
      backgroundColor: '#66C300',
      marginRight: '.5rem',
      fontSize: '12px'
    }}
  >
    <UnFollowIcon />
    {'已关注'}
  </div>
)

let FollowButton = props => (
  <div
    className="followButton"
    onClick={() => {
      props.submit()
    }}
    style={{
      width: '5rem',
      height: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#66C300',
      border: '1px solid #66C300',
      backgroundColor: '#fff',
      marginRight: '.5rem',
      fontSize: '12px'
    }}
  >
    <FollowIcon />
    {'关注'}
  </div>
)

let Loading = props => (
  <div
    style={{
      width: '5rem',
      height: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px'
    }}
  >
    <Icon type="loading" />
  </div>
)

const Button = props => {
return <div></div>
}

export default Button
