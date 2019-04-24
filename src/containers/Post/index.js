import React, {Component} from 'react'
import {connect} from 'react-redux'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'
import './style.less'
import '@assets/highlight/default.min.css'

@withNavBarBasicLayout('post')
class PostContainer extends Component {
  componentWillMount() {
    this.props.getPostDetailAsync({id: this.props.match.params.id})
  }
  render() {
    return (
      <div className="postContainer">
        <div className="postDetail"
          dangerouslySetInnerHTML={{__html: this.props.postDetail.content}}
        />
      </div>
    )
  }
}

const mapState = state => ({
  postDetail: state.post.postDetail
})

const mapDispatch = ({post: {getPostDetailAsync}}) => ({
  getPostDetailAsync: playload => getPostDetailAsync(playload)
})

export default connect(
  mapState,
  mapDispatch
)(PostContainer)
