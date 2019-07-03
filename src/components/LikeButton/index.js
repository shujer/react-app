import React from 'react'
import { connect } from 'react-redux'
import { LikeIcon } from '@components/Icons'
import './style.less'

let Loading = props => (
<div className="spinner"></div>
)

class Button extends React.Component {
  state = {
    loading: false,
    isLike: false
  }
  changeLike = () => {
    this.setState({
      loading: true
    })
    this.props.changeLike({
      likeState: this.state.isLike,
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
    let isLike = nextProps.likeMap[nextProps.currentId]
    if (prevState.isLike !== isLike) {
      return {
        loading: false,
        isLike
      }
    }
    return null
  }

  componentDidMount () {
    this.props.checkLike({ targetId: this.props.currentId })
  }

  render () {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <span
        onClick={() => {
          this.changeLike()
        }}
      >
        <LikeIcon isLike={this.state.isLike} />
        {'赞'}
      </span>
    )
  }
}

const mapState = state => ({
  likeMap: state.userLike.likeMap
})

const mapDispatch = ({ userLike: { changeLike, checkLike } }) => ({
  changeLike: playload => changeLike(playload),
  checkLike: playload => checkLike(playload)
})

export default connect(
  mapState,
  mapDispatch
)(Button)
