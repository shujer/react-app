import React from 'react'
import {List} from 'antd-mobile'
import comment_data from '../../__mock__/comment'
import user_data from '../../__mock__/user'
import reply_data from '../../__mock__/reply'
import Avatar from '@components/Avatar/Bar'
import Line from '@components/Line'
import './style.less'

const Reply = props => {
  return (
    <>
      <div className="replyContent">
        <span className="replierScreenName">
          {props.reply.replierScreenName}
        </span>
        ：{props.reply.content}
      </div>
      {props.isEnd ? null : <Line key={1} />}
    </>
  )
}

const Comment = props => {
  const len = props.replies.length - 1
  return (
    <List.Item wrap align="top">
      <Avatar userInfo={props.userInfo} comment={props.comment} />
      <div className="commentContent">
      {props.comment.content}
        <div className="replyBox">
          {props.replies.map((val, index) => {
            return <Reply key={index} reply={val} isEnd={index === len} />
          })}
        </div>
      </div>
    </List.Item>
  )
}

const CommentList = props => {
  let comments = comment_data['data']
  let users = {},
    replys = {}
  user_data['data'].forEach(val => {
    let id = val['id'].split('_')[0]
    users[id] = val
  })
  reply_data['data'].forEach(val => {
    let id = val['referId']
    replys[id] = replys[id] ? [...replys[id], val] : [val]
  })
  const commentlist = comments.map(val => {
    let replies = replys[val['id']] || []
    return (
      <Comment
        comment={val}
        userInfo={users[val['commenterId']]}
        replies={replies}
        key={val['id']}
      />
    )
  })
  return <div className="commentList">{commentlist}</div>
}

export default CommentList
