import React, {Component} from 'react'
import {FollowIcon, UnFollowIcon} from '@components/Icons'
import {Icon} from 'antd-mobile'

const machine = {
  states: {
    unfollowed: {
      'follow submit': 'follow loading'
    },
    'follow loading': {
      success: 'followed',
      failure: 'unfollow'
    },
    followed: {
      'unfollow submit': 'unfollow loading'
    },
    'unfollow loading': {
      success: 'unfollow',
      failure: 'followed'
    }
  }
}

const stateTransformer = function(currentState, stepUp) {
  let nextState
  if (machine.states[currentState][stepUp]) {
    nextState = machine.states[currentState][stepUp]
  }
  console.log(`${currentState} + ${stepUp} --> ${nextState}`)
  return nextState || currentState
}

class FollowButton extends Component {
  state = {
    currentState: this.props.isFollowed ? 'followed' : 'unfollowed'
  }
  
  componentWillReceiveProps(nextProps) {
    if (
      this.state.currentState === 'unfollow loading' ||
      this.state.currentState === 'follow loading'
    ) {
      if (nextProps.isFollowed === this.props.isFollowed) {
        this.setState({
          currentState: stateTransformer(this.state.currentState, 'failure')
        })
      } else {
        this.setState({
          currentState: stateTransformer(this.state.currentState, 'success')
        })
      }
    }
  }
  render() {
    return (
      <>
        {(() => {
          switch (this.state.currentState) {
            case 'followed':
              return (
                <div
                  onClick={() => {
                    this.setState({
                      currentState: stateTransformer(
                        this.state.currentState,
                        'submit'
                      )
                    })
                  }}
                  className="UnfollowButton"
                  style={{
                    width: '5rem',
                    height: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    border: '1px solid #66C300',
                    backgroundColor: '#66C300',
                    marginRight: '.5rem',
                    fontSize: '12px'
                  }}
                >
                  <UnFollowIcon />
                  {'已关注'}
                </div>
              )
            case 'unfollowed':
              return (
                <div
                  className="followButton"
                  onClick={() => {
                    this.setState({
                      currentState: stateTransformer(
                        this.state.currentState,
                        'submit'
                      )
                    })
                  }}
                  style={{
                    width: '5rem',
                    height: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#66C300',
                    border: '1px solid #66C300',
                    backgroundColor: '#fff',
                    marginRight: '.5rem',
                    fontSize: '12px'
                  }}
                >
                  <FollowIcon />
                  {'关注'}
                </div>
              )
            case 'follow loading':
            case 'unfollow loading':
              return (
                <div
                  style={{
                    width: '5rem',
                    height: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '12px'
                  }}
                >
                  <Icon type="loading" />
                </div>
              )
            default:
              return null
          }
        })()}
      </>
    )
  }
}

export default FollowButton
