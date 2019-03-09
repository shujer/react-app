import React from 'react'
import CommentList from '@components/CommentList'
import './style.less'

const PostContainer = () => {
    return (
        <div className="loadingArticle">
        <CommentList></CommentList>
        </div>
    )
}

export default PostContainer