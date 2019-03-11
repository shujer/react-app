import React from 'react'
import {List} from 'antd-mobile'
import AvatarBar from '@components/AvatarBar'
import './style.less'

const Reply = ({reply}) => {
  return (
    <>
      <div className="replyContent">
        <span className="replierScreenName">
          {reply.replierScreenName}
        </span>
        ：{reply.content}
      </div>
    </>
  )
}

const Comment = ({userInfo, comment, replies}) => {
  const len = replies.length - 1
  return (
    <List.Item wrap align="top">
      <AvatarBar userInfo={userInfo} comment={comment} isComment/>
      <div className="commentContent">
        {comment.content}
        <div className="replyBox">
          {replies.map((val, index) => {
            return <Reply key={index} reply={val} isEnd={index === len} />
          })}
        </div>
      </div>
    </List.Item>
  )
}

const CommentList = ({comments, users, replies}) => {
  const commentlist = comments.map(val => {
    let reply = replies[val['id']] || []
    return (
      <Comment
        comment={val}
        userInfo={users[val['commenterId']]}
        replies={reply}
        key={val['id']}
      />
    )
  })
  return (
    <div className="commentList">
      {commentlist}
    </div>
  )
}

export default CommentList
