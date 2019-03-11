import React, {Component} from 'react'
import * as styles from './style.less'

class MenuDragreact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items,
      source: null,
      itemSizes: [],
      move: null
    }
  }
  componentDidMount() {
    let itemDoms = document.querySelectorAll('.draggableBox')
    console.log(itemDoms)
    let itemSizes = [...itemDoms].map(itemDom => {
      let {clientHeight, clientWidth} = itemDom
      return {h: clientHeight, w: clientWidth}
    })
    this.setState({
      itemSizes: itemSizes
    })
  }
  render() {
    let {items} = this.props
    return (
      <>
        {items.map((item, index) => {
          return (
            <div
              className="draggableBox"
              key={index}
              onTouchStart={e => this.handleTouchStart(e, index)}
              onTouchEnd={e => this.handleTouchEnd(e, index)}
              onTouchMove={e => this.handleTouchMove(e, index)}
            >
              {item}
            </div>
          )
        })}
      </>
    )
  }
  getItemIndex(e) {
    var sum = 0,
      i = 0,
      offset = e.clientY,
      len = this.state.itemSizes.length
    for (i = 0; i < len; ) {
      let h = this.state.itemSizes[i].h
      sum += h
      if (offset - sum <= 0) {
        break
      }
      i++
    }
    return i < len ? i : len - 1
  }
  setItem(targetIndex) {
    if (targetIndex !== this.state.source) {
        let items = this.state.items;
        [items[targetIndex], items[this.state.source]] = [
          items[this.state.source],
          items[targetIndex]
        ]
        this.setState({
          items: items,
          move: targetIndex
        })
      }
  }
  handleTouchStart = (e, index) => {
    console.log('start', index)
    this.setState({source: index})
    e.touches[0].target.classList.add('draggingBox')
  }
  handleTouchEnd = (e, index) => {
    let target = e.changedTouches[0]
    let moveIndex = this.getItemIndex(target)
    console.log('end', moveIndex)
    this.setItem(moveIndex)
  }
  handleTouchMove = (e, index) => {
    // e.preventDefault()
    let target = e.changedTouches[0]
    let moveIndex = this.getItemIndex(target)
    console.log('move', moveIndex)
    this.setItem(moveIndex)
  }
}
export default MenuDragreact
