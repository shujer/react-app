import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {List, Modal} from 'antd-mobile'
import './style.less'

const prompt = Modal.prompt;

class CommentInput extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({value: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  handleFocus = e => {
    prompt(
      '登录',
      '请使用手机号或邮箱登录',
      (login, password) =>
        console.log(`login: ${login}, password: ${password}`),
      'login-password',
      null,
      ['请输入手机号或邮箱登录', '请输入密码']
    )
  }

  render() {
    return (
      <List>
        <div className="container">
          <textarea
            className="deactiveInput"
            placeholder="输入评论..."
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            rows={1}
          />
          <span className="postStatus">
            <small className="like">
              <i className="iconfont icon-dianzan" />
              {this.props.post.likeCount}
            </small>
            <small className="count">
              <i className="iconfont icon-reply1" />
              {this.props.post.commentCount}
            </small>
          </span>
        </div>
      </List>
    )
  }
}

// CommentForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   likeNums: PropTypes.number.isRequired,
//   commentNums: PropTypes.number.isRequired
// }

export default CommentInput
