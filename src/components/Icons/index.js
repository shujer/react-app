import React from 'react'
import LikeImg from '@assets/icons/pin/user_liked_pin.png'
import UnLikeImg from '@assets/icons/pin/pin_unlike_detail.png'
import SharePinImg from '@assets/icons/pin/pin_share_detail.png'
import CommentImg from '@assets/icons/comment/ic_comment_border.png'
import ArrowImg from '@assets/icons/profile/profile_arrow.png'
import NotificationImg from '@assets/icons/profile/ic_notification.png'
import CollectionSetImg from '@assets/icons/profile/user_collectionset.png'
import BuyImg from '@assets/icons/profile/user_buy.png'
import UserReadImg from '@assets/icons/profile/ic_user_data_read.png'
import TagImg from '@assets/icons/profile/ic_dynamic_tag.png'
import NightImg from '@assets/icons/profile/ic_night.png'
import FeedBackImg from '@assets/icons/profile/icon_feed_back.png'
import SettingsImg from '@assets/icons/profile/settings.png'
import BlogImg from '@assets/icons/profile/icon_profile_blog.png'
import DataImg from '@assets/icons/profile/icon_profile_data.png'
import ShareWhiteImg from '@assets/icons/profile/ic_share_white.png'
import FollowImg from '@assets/icons/profile/icon_add_tag.png'
import UnFollowImg from  '@assets/icons/profile/add_icon_tag_followed.png'
import UserDataLike from '@assets/icons/profile/ic_user_data_like.png'
import UserDataRead from '@assets/icons/profile/ic_user_data_read.png'
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

export const UserDataReadIcon = props => {
  return (
    <img
      src={UserDataRead}
      alt=""
      width="12"
      height="12"
      align="center"
      {...props.style}
    />
  )
}

export const UserDataLikeIcon = props => {
  return (
    <img
      src={UserDataLike}
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

export const DataIcon = props => {
  return (
    <img
      src={DataImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const BlogIcon = props => {
  return (
    <img
      src={BlogImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const NoticeIcon = props => {
  return (
    <img
      src={NotificationImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const SettingIcon = props => {
  return (
    <img
      src={SettingsImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const FeedBacIcon = props => {
  return (
    <img
      src={FeedBackImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const NightIcon = props => {
  return (
    <img
      src={NightImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const TagIcon = props => {
  return (
    <img
      src={TagImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const UserReadIcon = props => {
  return (
    <img
      src={UserReadImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const BuyIcon = props => {
  return (
    <img
      src={BuyImg}
      alt=""
      width="14"
      height="14"
      align="center"
      {...props.style}
    />
  )
}

export const CollectionSetIcon = props => {
  return (
    <img
      src={CollectionSetImg}
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
  let {isLiked, style} = props
  let src = isLiked ? LikeImg : UnLikeImg
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
