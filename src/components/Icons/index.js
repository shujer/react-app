import React from 'react'
import LikeImg from '@assets/icons/pin/pin_like_detail.png'
import UnLikeImg from '@assets/icons/pin/pin_unlike_detail.png'
import SharePinImg from '@assets/icons/pin/pin_share_detail.png'
import CommentImg from '@assets/icons/comment/ic_comment_border.png'
import ArrowImg from '@assets/icons/profile/profile_arrow.png'
import ShareWhiteImg from '@assets/icons/profile/ic_share_white.png'
import FollowImg from '@assets/icons/profile/icon_add_tag.png'
import UnFollowImg from  '@assets/icons/profile/add_icon_tag_followed.png'
import UserDataComment from '@assets/icons/profile/ic_user_data_comment.png'


export const UserDataCommentIcon = props => {
  return (
    <img
      src={UserDataComment}
      alt=""
      width="12"
      height="12"
      align="center"
      {...props.style}
    />
  )
}


export const UnFollowIcon = props => {
  return (
    <img
      src={UnFollowImg}
      alt=""
      width="12"
      height="12"
      align="center"
      {...props.style}
    />
  )
}

export const FollowIcon = props => {
  return (
    <img
      src={FollowImg}
      alt=""
      width="12"
      height="12"
      align="center"
      {...props.style}
    />
  )
}

export const ShareWhiteIcon = props => {
  return (
    <img
      src={ShareWhiteImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const ArrowIcon = props => {
  return (
    <img
      src={ArrowImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const LikeIcon = props => {
  let {isLike, style} = props
  let src = isLike ? LikeImg : UnLikeImg
  return (
    <img src={src} alt="" {...style} width="14" height="14" align="center" />
  )
}

export const ShareIcon = props => {
  let {style} = props
  return (
    <img
      src={SharePinImg}
      alt=""
      {...style}
      width="14"
      height="14"
      align="center"
    />
  )
}

export const CommentIcon = props => {
  let {style} = props
  return (
    <img
      src={CommentImg}
      alt=""
      {...style}
      width="14"
      height="14"
      align="center"
    />
  )
}
