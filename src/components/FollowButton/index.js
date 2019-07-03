import React from 'react'
import { connect } from 'react-redux'
import { FollowIcon, UnFollowIcon } from '@components/Icons'
import { Icon } from 'antd-mobile'

let FollowButton = props => (
  <div
    className='UnfollowButton'
    onClick={() => {
      props.changeFollow()
    }}
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

let UnFollowButton = props => (
  <div
    className='followButton'
    onClick={() => {
      props.changeFollow()
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

let Loading = props => (
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
    <Icon type='loading' />
  </div>
)

class Button extends React.Component {
  state = {
    loading: false,
    isFollow: false
  }
  changeFollow = () => {
    this.setState({
      loading: true
    })
    this.props.changeFollow({
      followState: this.state.isFollow,
      targetId: this.props.currentId
    })
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      if (this.state.loading) {
        this.setState({
          loading: false
        })
      }
    }, 3000)
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    let isFollow = nextProps.followMap[nextProps.currentId]
    if (prevState.isFollow !== isFollow) {
      return {
        loading: false,
        isFollow
      }
    }
    return null
  }

  componentDidMount () {
    this.props.checkFollow({ targetId: this.props.currentId })
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return this.state.isFollow ? (
      <FollowButton changeFollow={this.changeFollow} />
    ) : (
      <UnFollowButton changeFollow={this.changeFollow} />
    )
  }
}

const mapState = state => ({
  followMap: state.userFollow.followMap
})

const mapDispatch = ({ userFollow: { changeFollow, checkFollow } }) => ({
  changeFollow: playload => changeFollow(playload),
  checkFollow: playload => checkFollow(playload)
})

export default connect(
  mapState,
  mapDispatch
)(Button)
