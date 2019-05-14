import React from 'react'
import GithubIcon from '@assets/icons/icon_github.png'
import WechatIcon from '@assets/icons/icon_wechat.png'
import WeiboIcon from '@assets/icons/icon_weibo.png'
import './style.less'

const ThirdPartyLogin = props => {
  return (
    <div>
      <div className="splitLine">
        <div className="line" />
        <div className="detail">其他账号登录</div>
      </div>
      <div className="thirdParty">
        <div >
          <img src={WeiboIcon} alt="weibo" />
          <span>微博</span>
        </div>
        <div>
          <img src={WechatIcon} alt="wechat" />
          <span>微信</span>
        </div>
        <div onClick={props.handleGithubLogin}>
          <img src={GithubIcon} alt="github" />
          <span>Github</span>
        </div>
      </div>
    </div>
  )
}

export default ThirdPartyLogin
