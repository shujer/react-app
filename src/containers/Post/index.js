import React, {Component} from 'react'
import CommentList from '@components/CommentList'
import withPageTransition from '@layouts/TransitionLayout'
import './style.less'

@withPageTransition
class PostContainer extends Component {
  render() {
    return (
      <div className="loadingArticle">
        <CommentList />
      </div>
    )
  }
}

export default PostContainer
