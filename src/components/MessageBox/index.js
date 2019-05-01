import React from 'react'
import JujinIcon from '@assets/icons/profile/juejinjiang.jpg'
import EmptyIcon from '@assets/icons/profile/empty_avatar_user.png'
import './style.less'

function filterXSS(content) {
  return content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

let LeftBox = ({item}) => (
  <div className="leftBox">
    <div className="messageAvatar">
      <img src={JujinIcon} alt="..." />
    </div>
    <div className="messageBox">
      <div className="messageTriangle" />
      <div
        className="messageContent"
        dangerouslySetInnerHTML={{
          __html: filterXSS(item.content)
        }}
      />
    </div>
  </div>
)

let RightBox = ({item, user}) => (
  <div className="rightBox">
    <div className="messageBox">
      <div
        className="messageContent"
        dangerouslySetInnerHTML={{
          __html:filterXSS(item.content)
        }}
      />
      <div className="messageTriangle" />
    </div>
    <div className="messageAvatar">
      <img src={user.largeAvatar || EmptyIcon} alt="..." />
    </div>
  </div>
)

const MessageBox = props => {
  let {item, user = {}} = props
  return (
    <>
      {item.role === 'left' ? (
        <LeftBox item={item} />
      ) : (
        <RightBox item={item} user={user} />
      )}
    </>
  )
}

export default MessageBox
