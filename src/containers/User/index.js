import React, {Component} from 'react'
import {WhiteSpace, NavBar, Icon} from 'antd-mobile'
import Tabs from '@components/Tabs'
import ShareActionSheet from '@components/ShareActionSheet'
import {connect} from 'react-redux'
import ShareIcon from '@assets/icons/profile/ic_share_white.png'
import DataIcon from '@assets/icons/profile/icon_profile_data.png'

const tabs = [
  {tag: 'activities', title: '动态'},
  {tag: 'posts', title: '专栏'},
  {tag: 'pins', title: '沸点'},
  {tag: 'shares', title: '分享'},
  {tag: 'more', title: '更多'}
]

class User extends Component {
  state = {
    user: {},
    id: ''
  }

  componentWillMount() {
    let {
      match: {
        params: {id}
      }
    } = this.props
    this.props.getUserInfo({ids: id})
  }

  goBack = () => {
    this.props.history.goBack('')
  }
  render() {
    return (
      <div className="wrap">
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
          style={{color: '#fff'}}
          rightContent={[
            <img
              src={DataIcon}
              alt="..."
              width={18}
              height={18}
              style={{marginRight: '22px'}}
              key="0"
            />,
            <ShareActionSheet
              key="1"
              icon={<img src={ShareIcon} alt="..." width={20} height={20} />}
            />
          ]}
        >
          {'个人主页'}
        </NavBar>
        <Tabs tabs={tabs} mode="light">
          {tabs.map((val, index) => {
            return (
              <div className="tabItem" key={index}>
                Content of {val.tag}
              </div>
            )
          })}
        </Tabs>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user.user
})

const mapDispatch = ({user: {getUserInfo}}) => ({
  getUserInfo: playload => getUserInfo(playload)
})

export default connect(
  mapState,
  mapDispatch
)(User)
