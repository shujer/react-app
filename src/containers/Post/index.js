import React, {Component} from 'react'
import CommentList from '@components/CommentList'
import CommentInput from '@components/CommentInput'
import AvatarBar from '@components/AvatarBar'
import post_data from '../../__mock__/post'
import comment_data from '../../__mock__/comment'
import user_data from '../../__mock__/user'
import reply_data from '../../__mock__/reply'
import './style.less'

class PostContainer extends Component {
  render() {
    const post = post_data['data'][0]
    let comments = comment_data['data']
    let users = {},
      replys = {},
      authorInfo = {},
      posterId = post['posterId'].split('_')[0]
    user_data['data'].forEach(val => {
      let id = val['id'].split('_')[0]
      users[id] = val
      if (posterId === id) {
        authorInfo = val
      }
    })
    reply_data['data'].forEach(val => {
      let id = val['referId']
      replys[id] = replys[id] ? [...replys[id], val] : [val]
    })
    return (
      <div className="postContainer">
        <AvatarBar userInfo={authorInfo} />
        <div dangerouslySetInnerHTML={{__html: post.html}} />
        <CommentList comments={comments} users={users} replies={replys} />
        <CommentInput className="postFooter" post={post} />
      </div>
    )
  }
}

export default PostContainer
