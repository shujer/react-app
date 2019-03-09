import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {List, TextareaItem, Toast} from 'antd-mobile'
import {createForm, formShape} from 'rc-form'

class CommentForm extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({value: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <List>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          rows={1}
        />
        <span className="iconfont icon-dianzan" />

      </List>
    )
  }
}

// CommentForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   likeNums: PropTypes.number.isRequired,
//   commentNums: PropTypes.number.isRequired
// }

export default CommentForm
