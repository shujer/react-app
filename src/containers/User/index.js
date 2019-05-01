import React, {Component} from 'react'
import {Tabs, WhiteSpace, NavBar, Icon} from 'antd-mobile'
import {StickyContainer, Sticky} from 'react-sticky'
import ShareActionSheet from '@components/ShareActionSheet'
import withNavBarRightLayout from '@layouts/withNavBarRightLayout'
import ShareIcon from '@assets/icons/profile/ic_share_white.png'
import DataIcon from '@assets/icons/profile/icon_profile_data.png'

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
const tabs = [
  {tag: 'activities',title:'动态'},
  {tag: 'posts',title:'专栏'},
  {tag: 'pins',title:'沸点'},
  {tag: 'shares',title:'分享'},
  {tag: 'more',title:'更多'}
]

@withNavBarRightLayout('个人主页')
class User extends Component {
  componentDidMount() {}
  goBack = () => {
    this.props.history.goBack('')
  }
  render() {
    return (
      <div>
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
        <StickyContainer>
          <Tabs tabs={tabs} initalPage={'t2'} renderTabBar={renderTabBar}>
            {tabs.map((val, index) => {
              return (
                <div className="tabItem" key={index}>
                  Content of {val.tag}
                </div>
              )
            })}
          </Tabs>
        </StickyContainer>
        <WhiteSpace />
      </div>
    )
  }
}

export default User
