import React, {Component} from 'react'
import {Toast, List, WhiteSpace} from 'antd-mobile'
import {connect} from 'react-redux'

class Search extends Component {
  handleSearch = () => {
    this.props.history.push('/search')
  }

  render() {
    return (
      <div className="wrap">
        <div className="header">search</div>
      </div>
    )
  }
}

const mapState = state => ({
  entryList: state.home.entryList
})

const mapDispatch = ({home: {getEntryByListAsync}}) => ({
  getEntryByListAsync: playload => getEntryByListAsync(playload)
})

export default connect(
  mapState,
  mapDispatch
)(Search)
