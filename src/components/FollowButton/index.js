import React from 'react'
import Icon from '@assets/icons/profile/icon_add_tag.png'

const FollowButton = props => {
  return (
    <div
      className="followButton"
      style={{
        width: '5rem',
        height: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color:"#66C300",
        border:'1px solid #66C300',
        backgroundColor:'#fff',
        marginRight:".5rem",
        fontSize:"12px"
      }}
    >
      <img src={Icon} alt="+" style={{width:'12px', height:'12px',marginRight:"5px"}} />
      {'关注'}
    </div>
  )
}

export default FollowButton
