import React from 'react'
import Icon from '@assets/icons/profile/icon_add_tag.png'

const FollowButton = props => {
    return (
        <div className="followButton">
            <img src={Icon} alt='+'/>关注
        </div>
    )
}

export default FollowButton