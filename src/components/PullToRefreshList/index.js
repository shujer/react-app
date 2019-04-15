/* eslint no-dupe-keys: 0 */
import React, {Component} from 'react'
import EntryItem from '@components/EntryItem'
class PullToRefreshList extends Component {
  render() {
    let {items} = this.props
    return (
      <div style={{marginTop:"43px"}}>
        {items.map((element, index) => {
          return <EntryItem item={element} key={index} />
        })}
      </div>
    )
  }
}
export default PullToRefreshList
