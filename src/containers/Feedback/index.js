import React, {Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'
import MessageBox from '@components/MessageBox'
import io from 'socket.io-client'
import './style.less'
let config = {transports: ['websocket']}
let socket = io.connect('ws://localhost:8989/feedback', config)

class Feedback extends Component {
  state = {
    messages: [],
    input:""
  }

  componentDidMount() {
    socket.on('reply', ({message}) => {
      this.setMessage({message,role:"left"})
    })
    socket.on('feedback', ({message}) => {
      this.setMessage({message,role:"left"})
    })
    socket.emit('user feedback', {message: 'first'}, function(data) {
      console.log('发送成功')
    })
  }

  setMessage = ({message:content, role}) => {
    this.setState({
      messages: [...this.state.messages, {content, role}]
    },
    () => {
      this.scrollToBottom()
    })
  }

  scrollToBottom = () => {
    this.scrollContent.scrollTop =  this.scrollContent.scrollHeight
  }

  handleSend = e => {
    let value = this.input.value
    if(!value.trim()) {
      return;
    }
    this.setState({
      messages: [...this.state.messages, {content: value, role: 'right'}]
    },() => {
      this.input.value=""
      this.scrollToBottom()
      socket.emit('new reply', {message: value}, function(data) {
        console.log('发送成功')
      })
    })
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="wrap FeedContainer" >
        <NavBar
        className="header"
          icon={<Icon type="left" />}
          mode="light"
          onLeftClick={this.goBack}
        >
          掘金酱
        </NavBar>
        <div className="main scroll_content" ref={el => (this.scrollContent = el)}>
          {this.state.messages.map((val, index) => (
            <MessageBox item={val} key={index} />
          ))}
        </div>
        <div className="footer">
          <textarea type="text" placehoder="发送消息" rows={1} ref={el => (this.input = el)}/>
          <button onClick={this.handleSend}>Send</button>
        </div>
      </div>
    )
  }
}

export default Feedback
