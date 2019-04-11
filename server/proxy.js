/**
 * API部分参考了这个博主的，感谢
 *  https://github.com/Kim09AI/react-juejin/blob/master/server/config/index.js
 */
const JujinApi = {
  timeline: 'https://timeline-merger-ms.juejin.im/v1/',
  tag: 'https://gold-tag-ms.juejin.im/v1/',
  xiaoce: 'https://xiaoce-timeline-api-ms.juejin.im/v1/',
  post: 'https://post-storage-api-ms.juejin.im/v1/',
  comment: 'https://comment-wrapper-ms.juejin.im/v1/',
  juejin: 'https://juejin.im/',
  user: 'https://user-storage-api-ms.juejin.im/v1/',
  like: 'https://user-like-wrapper-ms.juejin.im/v1/',
  follow: 'https://follow-api-ms.juejin.im/v1/',
  notification: 'https://user-notification-api-ms.juejin.im/v1/',
  lccro: 'https://lccro-api-ms.juejin.im/v1/'
}

function getRealApi(url) {
  let target = url.split('/')[2]
  return JujinApi[target]
}

const proxyTable = {
  target: 'https://juejin.im/',
  changeOrigin: true,
  pathRewrite: {
    '^/api/timeline': '/',
    '^/api/xiaoce': '/',
    '^/api/tag': '/',
    '^/api/post': '/',
    '^/api/comment': '/',
    '^/api/juejin': '/',
    '^/api/user': '/',
    '^/api/like': '/',
    '^/api/follow': '/'
  },
  router: function({url}) {
    console.log(url)
    console.log(getRealApi(url))
    return getRealApi(url)
  }
}

module.exports = proxyTable
