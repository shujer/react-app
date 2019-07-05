import React from 'react'
import { withRouter } from 'react-router-dom'
import AvatarBar from '@components/AvatarBar'
import UserLink from '@components/AvatarBar/UserLink'
import TagLink from '@components/Tag'
import LikeButton from '@components/LikeButton'
import ShortStr from '@components/ShortStr'
import { getTimefromNow } from '@utils/timeHelper'
import FollowButton from '@components/FollowButton'
import ShareActionSheet from '@components/ShareActionSheet'
import { CommentIcon, ShareIcon } from '@components/Icons'
import { Icon } from 'antd-mobile'
import './style.less'

const PinItem = ({ item, ...props }) => {
  let { user } = item
  return (
    <div className='pinEntry'>
      <AvatarBar
        size='medium'
        className='avatarBar'
        user={user}
        appendContent={[
          <UserLink {...user} />,
          <ShortStr
            str={
              user
                ? `${user.jobTitle}${' @ ' + user.company ||
                    ''} · ${getTimefromNow(item.createdAt)}`
                : ''
            }
            len={15}
          />
        ]}
        extraContent={[
          <FollowButton
            style={{ marginRight: '1rem' }}
            currentId={user.objectId}
          />,
          <ShareActionSheet
            icon={<Icon key='1' type='ellipsis' size='sm' />}
          />
        ]}
      />
      <div
        className='content'
        onClick={() => {
          props.history.push(`/pin/${item.objectId}`)
        }}
      >
        <div className='short'>{item.content}</div>
      </div>
      {item.topic ? (
        <TagLink title={item.topic.title} id={item.topic.id} />
      ) : null}
      <div className='pinfooter'>
        <small>
          <LikeButton currentId={item.objectId} />
        </small>
        <small
          onClick={() => {
            props.history.push(`/pin/${item.objectId}`)
          }}
        >
          <CommentIcon /> {item.commentCount || '评论'}
        </small>
        <ShareActionSheet
          icon={
            <small>
              <ShareIcon />
              {' 分享'}
            </small>
          }
        />
      </div>
    </div>
  )
}

export default withRouter(PinItem)
