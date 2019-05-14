import React, {Component} from 'react'
import LoginButton from '@components/LoginButton'
import Image from '@assets/icons/post/entry_image_default.png'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import Tabs from '@components/Tabs'
import {connect} from 'react-redux'
import {List} from 'antd-mobile'
import Entry from './Entry'

const tabs = [
  {name: '全部', title: '全部', show: true},
  {name: '已购', title: '已购', show: true}
]

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
  componentWillMount() {
    this.props.getAllXiaoce()
  }
  render() {
    let {books} = this.props
    return (
      <div>
        <Tabs tabs={tabs} mode="dark">
          <List>
            {books.map((book, index) => (
              <List.Item key={index}>
                <Entry book={book} />
              </List.Item>
            ))}
          </List>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              minHeight: 'calc(100vh - 80px)'
            }}
          >
            <div>
              <img src={Image} alt="info" width={50} />
            </div>
            <div style={{padding: '10px 0 10px 0'}}>
              <small>需要您登录，登录后使用更多功能</small>
            </div>

            <LoginButton />
          </div>
        </Tabs>
      </div>
    )
  }
}

const mapState = state => ({
  books: state.xiaoce.books
})

const mapDispatch = ({xiaoce: {getAllXiaoce}}) => ({
  getAllXiaoce: () => getAllXiaoce()
})

export default connect(
  mapState,
  mapDispatch
)(XiaoceContainer)
