import React, {Component} from 'react'
import {List, Switch} from 'antd-mobile'
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
        <span>{item.title}</span>
      </div>
    </List.Item>
  )
}

@withNavBarBasicLayout('首页特别展示')
class TabPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: [
        {title: '前端', show: true},
        {title: '设计', show: true},
        {title: '后端', show: true},
        {title: '人工智能', show: false},
        {title: '运维', show: false},
        {title: 'Android', show: false},
        {title: 'iOS', show: false},
        {title: '产品', show: true},
        {title: '工具资源', show: false}
      ]
    }
  }

  componentWillMount() {
    let tabs = this.state.tabs,
      len = tabs.length,
      tmp = []
    for (let i = len - 1; i >= 0; i--) {
      if (tabs[i]['show'] === false) {
        tmp.unshift(...tabs.splice(i, 1))
      }
    }
    this.setState({
      tabs: [...tabs, ...tmp]
    })
  }
  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }
    const items = reorder(
      this.state.tabs,
      result.source.index,
      result.destination.index
    )
    this.setState({
      tabs: items
    })
  }

  onToggleShow = item => {
    item.show = !item.show
    this.setState({})
  }

  render() {
    let items = this.state.tabs
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

export default TabPicker
