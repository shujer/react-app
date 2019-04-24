import React, {Component} from 'react'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'
import './style.less'

@withNavBarBasicLayout("post")
class PostContainer extends Component {
  render() {
    return (
      <div className="postContainer">
      {this.props.match.params.id}
      </div>
    )
  }
}

export default PostContainer
