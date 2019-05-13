import React, {Component} from 'react'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import UnAuth from './UnAuth'
import {connect} from 'react-redux'
import {Tabs, List} from 'antd-mobile'
import {StickyContainer, Sticky} from 'react-sticky'
import Entry from './Entry'

const tabs = [
  {name: '全部', title: '全部', show: true},
  {name: '已购', title: '已购', show: true}
]

function renderTabBar(props) {
  return (
    <Sticky>
      {({style}) => (
        <div style={{...style, zIndex: 1}}>
          <Tabs.DefaultTabBar {...props} />
        </div>
      )}
    </Sticky>
  )
}

let RenderContent = props => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      }}
    >
      {props.children}
    </div>
  )
}

@withTabBarBasicLayout
class XiaoceContainer extends Component {
  state = {
    selectedIndex: 0
  }
  handleTabChange = index => {
    this.setState({
      selectedIndex: index
    })
  }
  componentDidMount() {
    this.props.getAllXiaoce()
  }
  render() {
    let {books} = this.props
    return (
      <div>
        <StickyContainer>
          <Tabs
            renderTabBar={renderTabBar}
            tabBarUnderlineStyle={{
              backgroundColor: 'white',
              border: '1.5px #fff solid'
            }}
            tabBarBackgroundColor="#007FFE"
            tabBarTextStyle={{color: 'white'}}
            tabBarActiveTextColor="white"
            tabBarInactiveTextColor="white"
            tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => {
              // console.log('onChange', index, tab)
            }}
            onTabClick={(tab, index) => {
              // console.log('onTabClick', index, tab)
            }}
          >
            <List>
              {books.map((book, index) => (
                <List.Item key={index}>
                  <Entry book={book} />
                </List.Item>
              ))}
            </List>

            {this.props.isLogin ? (
              <List>
                {books
                  .filter(val => val.isBuy)
                  .map((book, index) => (
                    <List.Item key={index}>
                      <Entry book={book} />
                    </List.Item>
                  ))}
              </List>
            ) : (
              <UnAuth />
            )}
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}

const mapState = state => ({
  isLogin: state.auth.isLogin,
  books: state.xiaoce.books
})

const mapDispatch = ({xiaoce: {getAllXiaoce}}) => ({
  getAllXiaoce: () => getAllXiaoce()
})

export default connect(
  mapState,
  mapDispatch
)(XiaoceContainer)
