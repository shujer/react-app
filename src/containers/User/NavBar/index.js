import React from 'react'
import {NavBar, Icon} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import ShareActionSheet from '@components/ShareActionSheet'
import {DataIcon, ShareWhiteIcon} from '@components/Icons'
import Level from '@components/Level'
const myNavBar = props => {
  let {user} = props
  return (
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={() => {
        props.history.goBack()
      }}
      style={{
        width: '100%',
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        position: 'fixed',
        top: 0
      }}
      rightContent={[
        <div
          key="0"
          onClick={() => {
            props.history.push(`/postdata/${props.user.objectId}`)
          }}
          style={{marginRight: '14px'}}
        >
          <DataIcon />
        </div>,
        <ShareActionSheet key="1" icon={<ShareWhiteIcon />} />
      ]}
    >
      <div className="barTitle">
        <div className="author">{user.username || ''}</div>
        <Level level={user.level || ''} height="14px" />
      </div>
    </NavBar>
  )
}

export default withRouter(myNavBar)
