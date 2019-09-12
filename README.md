#### 写在前面的话

这个项目是我着手学习 React 做的第一个项目，大概有一个多月没有维护了吧，现在看之前的代码就是不忍直视。虽然只有几个 star 还是感谢 follow 这个项目的小伙伴，这个项目可能后面暂时不维护了，或者说后面我要着手使用 ts 和 React Hooks 完全重构之前的代码。还没有学习 React Hooks 的小伙伴也赶紧行动起来吧

#### 介绍

持续更新中...  
这个项目是一边学 React 一边做的，项目的一些代码可能后面要继续优化  
因为 webapp 和原生客户端还是有一些差别，一些 UI 可能没有完全还原，等这个做完后面应该会学一下 RN 再进行改版

#### 掘金主页

[偶尔掉落博客](https://juejin.im/user/5bc472bcf265da0aac700838/posts)

#### 启动

```bash
# 安装
yarn install
# 启动数据端口
npm run dev:server
# 启动前端
npm run start
```
#### 已完成
- 首页列表展示 √
- 沸点列表展示 √
- 小册列表展示 √
- 用户个人页面及其他用户页面 √
- 客服回复 √
- 搜索 × 待完善
- 分享 ×
- 首页及沸点展示标签 √
- 文章详情页 √
- 沸点详情页 √
- 话题页面 √
- 评论功能 × 待完善
- 登录/鉴权/退出登录 √
- 注册 × 待完善
- 用户关注 √
- 用户点赞 √
- 小册购买 ×


#### [部分效果展示](<(https://github.com/SusieChang/react-app/tree/master./doc/%E6%95%88%E6%9E%9C%E5%9B%BE)>)

<table width="100%">
    <tr>
        <td width="33%" height="100%">
            <img src="./doc/效果图/home.gif" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/login.gif" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/pick.gif" alt="img" />
        </td>
    <tr>
        <td width="33%" height="100%">
            <img src="./doc/效果图/message.gif" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/post.gif" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/postdata.gif" alt="img" />
        </td>
    </tr>
    <tr>
        <td width="33%" height="100%">
            <img src="./doc/效果图/explore.gif" alt="img" />
        </td>
        <td width="33%" height="100%">
            <img src="./doc/效果图/follow.gif" alt="img" />
        </td>
    </tr>
</table>

---

一些后端接口部分参考了[这个作者](https://github.com/Kim09AI/react-juejin/blob/master/server/config/index.js)
