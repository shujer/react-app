#### 掘金主页

[偶尔掉落博客](https://juejin.im/user/5bc472bcf265da0aac700838/posts)

#### Restful API 设计

- `/` 首页
- `/timeline/:category` 首页
- `/activity` 活动
- `/xiaoce` 小册
- `/explore` 搜索
- `/auth` 登录
- `/register` 注册
- `/recommended` 首页特别推荐
- `/user/:id` 个人主页
  - `/user/:id/following` 关注的人
  - `/user/:id/followers` 关注者
  - `/user/:id/activities` 动态
  - `/user/:id/pins` 沸点
  - `/user/:id/posts` 原创文章
  - `/user/:id/shares` 分享的文章
  - `/user/:id/likes` 赞过的文章
  - `/user/:id/tags` 关注的标签
  - `/user/:id/collections` 收藏集
    - `?type=created` 创建的
    - `?type=following` 关注的
  - `/user/settings/profile` 编辑主页设置
  - `/user/:id/xiaoce`
    - `?type=wrote` 攥写的
    - `?type=bought` 已购的
  - `/user/:id/praise` 赞过的沸点
- `/post/:id` 文章详情页
- `/feedback`意见反馈
- `/collection/:id` 收藏集
- `/editor/drafts` 草稿

  - `/editor/drafts/new` 写文章

- 鉴权页面
- `/profile` 个人主页
  - `/profile/notification` 消息中心
  - `/profile/likes` 我赞过的
  - `profile/collections` 收藏集
  - `profile/xiaoxe` 已购小册
  - `profile/posts` 阅读过的文章
  - `/profile/subscribe` 标签管理
    - `/subscribed` 已关注标签
    - `/all` 所有标签

#### [已完成页面](<(https://github.com/SusieChang/react-app/tree/master./doc/%E6%95%88%E6%9E%9C%E5%9B%BE)>)

<table width="100%">
    <tr>
        <td width="33%" height="100%">
            <img src="./doc/效果图/localhost_3000_(iPhone 5_SE).png" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/localhost_3000_home(iPhone 5_SE).png" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/localhost_3000_auth(iPhone 5_SE).png" alt="img" />
        </td>
    <tr>
        <td width="33%" height="100%">
            <img src="./doc/效果图/localhost_3000_profile(iPhone 5_SE).png" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/localhost_3000_profile_unauth(iPhone 5_SE).png" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/localhost_3000_register(iPhone 5_SE).png" alt="img" />
        </td>
    </tr>
        <td width="33%" height="100%">
            <img src="./doc/效果图/localhost_3000_settings(iPhone 5_SE) .png" alt="img" />
        </td>
    </tr>
    <tr>
    </tr>
</table>
