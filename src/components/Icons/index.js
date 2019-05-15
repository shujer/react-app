import React from 'react'
import './style.less'
import LikeImg from '@assets/icons/pin/pin_like_detail.png'
import UnLikeImg from '@assets/icons/pin/pin_unlike_detail.png'
import SharePinImg from '@assets/icons/pin/pin_share_detail.png'
import CommentImg from '@assets/icons/comment/ic_comment_border.png'

export const LikeIcon = props => {
  let {isLike, style} = props
  let src = isLike ? LikeImg : UnLikeImg
  return <img src={src} alt="" {...style}  width="14" height="14" align="center"/>
}

export const ShareIcon = props => {
  let {style} = props
  return <img src={SharePinImg} alt="" {...style}  width="14" height="14" align="center" />
}


export const CommentIcon = props => {
  let {style} = props
  return <img src={CommentImg} alt="" {...style} width="14" height="14" align="center"/>
}