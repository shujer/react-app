import React, {Component} from 'react'
import {List, Switch} from 'antd-mobile'
import {connect} from 'react-redux'
import withNavBarBasicLayout from '@layouts/withNavBarBasicLayout'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const TabItem = ({item, onToggleShow}) => {
  return (
    <List.Item
      key={item.title}
      extra={
        <Switch
          color="#007FFE"
          checked={item.show}
          onChange={() => {
            onToggleShow(item)
          }}
        />
      }
    >
      <div style={{lineHeight: '3rem', height: '3rem'}}>
        <i
          className="iconfont icon-bar"
          style={{color: 'lightgray', marginRight: '1rem', fontSize: '1.5rem'}}
        />
        {item.name}
      </div>
    </List.Item>
  )
}

@withNavBarBasicLayout('首页特别展示')
class TabPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabList: this.props.tabList
    }
  }
  componentWillMount() {
    this.props.getTabListAsync().then(res => {
      this.setState({
        tabList: this.sortList(this.props.tabList)
      })
    })
  }

  sortList = tabList => {
    let len = tabList.length,
      tmp = []
    for (let i = len - 1; i >= 0; i--) {
      if (tabList[i]['show'] === false) {
        tmp.unshift(...tabList.splice(i, 1))
      }
    }
    return [...tabList, ...tmp]
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const items = reorder(
      this.state.tabList,
      result.source.index,
      result.destination.index
    )
    this.setState({tabList: items}, () => {
      this.props.resetTabListAsync(this.state.tabList)
    })
  }

  onToggleShow = item => {
    item.show = !item.show
    this.setState({}, () => {
      this.props.resetTabListAsync(this.state.tabList)
    })
  }

  render() {
    let items = this.state.tabList
    return (
      <List id="picker">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable
                    key={`item-${index}`}
                    draggableId={`item-${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TabItem item={item} onToggleShow={this.onToggleShow} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </List>
    )
  }
}

const mapState = state => ({
  tabList: state.home.tabList
})

const mapDispatch = ({home: {resetTabListAsync, getTabListAsync}}) => ({
  resetTabListAsync: tabList => resetTabListAsync({tabList: tabList}),
  getTabListAsync: () => getTabListAsync()
})

export default connect(
  mapState,
  mapDispatch
)(TabPicker)
