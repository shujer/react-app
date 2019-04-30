import React, {Component} from 'react'
import {connect} from 'react-redux'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'
import './style.less'
import '@assets/highlight/default.min.css'

function isEmptyObject(obj) {
  for (let key in obj) {
    return true
  }
  return false
}

@withNavBarRightLayout('文章详情页')
class PostContainer extends Component {
  componentWillMount() {
    this.props.getPostAsync({id: this.props.match.params.id})
  }
  render() {
    return (
      <div className="postContainer">
        <div
          className="postDetail"
          dangerouslySetInnerHTML={{
            __html: this.props.content ? this.props.content : ''
          }}
        />
      </div>
    )
  }
}

const mapState = state => ({
  content: state.post.content,
  postInfo: state.post.postInfo
})

const mapDispatch = ({post: {getPostAsync}}) => ({
  getPostAsync: playload => getPostAsync(playload)
})

export default connect(
  mapState,
  mapDispatch
)(PostContainer)
