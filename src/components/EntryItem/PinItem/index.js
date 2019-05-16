import React from 'react'
import {withRouter} from 'react-router-dom'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import ShortStr from '@components/ShortStr'
import {getTimefromNow} from '@utils/timeHelper'
import FollowButton from '@components/FollowButton'
import ShareActionSheet from '@components/ShareActionSheet'
import {LikeIcon, CommentIcon, ShareIcon} from '@components/Icons'
import {Icon} from 'antd-mobile'
import './style.less'

const PinItem = ({item, ...props}) => {
  let {user} = item
  return (
    <div className="pinEntry">
      <AvatarBar
        size="medium"
        className="avatarBar"
        user={user}
        appendContent={[
          <UserLink {...user} />,
          <ShortStr
            str={
              user
                ? `${user.jobTitle} @  ${user.company} · ${getTimefromNow(
                    item.createdAt
                  )}`
                : ''
            }
            len={15}
          />
        ]}
        extraContent={[
          <FollowButton style={{marginRight: '1rem'}} />,
          <ShareActionSheet icon={<Icon key="1" type="ellipsis" size="sm" />} />
        ]}
      />
      <div
        className="content"
        onClick={() => {
          props.history.push(`/pin/${item.objectId}`)
        }}
      >
        <div className="short">{item.content}</div>
      </div>
      <div className="pinfooter">
        <small>
          <LikeIcon isLiked={item.isLiked || false} /> {item.isLiked || '点赞'}
        </small>
        <small
          onClick={() => {
            props.history.push(`/pin/${item.objectId}`)
          }}
        >
          <CommentIcon /> {item.commentCount || '评论'}
        </small>
        <ShareActionSheet icon={<small><ShareIcon/>{' 分享'}</small>} />
      </div>
    </div>
  )
}

export default withRouter(PinItem)
