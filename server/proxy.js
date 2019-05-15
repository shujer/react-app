
const JujinApi = {
  timeline: 'https://timeline-merger-ms.juejin.im/v1/',
  webapi: 'https://web-api.juejin.im/',
  tag: 'https://gold-tag-ms.juejin.im/v1/',
  xiaoce: 'https://xiaoce-timeline-api-ms.juejin.im/v1/',
  post: 'https://post-storage-api-ms.juejin.im/v1/',
  comment: 'https://comment-wrapper-ms.juejin.im/v1/',
  juejin: 'https://juejin.im/',
  user: 'https://user-storage-api-ms.juejin.im/v1/',
  like: 'https://user-like-wrapper-ms.juejin.im/v1/',
  follow: 'https://follow-api-ms.juejin.im/v1/',
  notification: 'https://user-notification-api-ms.juejin.im/v1/',
  lccro: 'https://lccro-api-ms.juejin.im/v1',
  sms: 'https://user-storage-api-ms.juejin.im/v2/',
  shortMsg: 'https://short-msg-ms.juejin.im/v1/'
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
    '^/api/follow': '/',
    '^/api/notification': '/',
    '^/api/lccro': '/',
    '^/api/shortMsg': '/',
    '^/api/sms': '/',
  },
  router: function({url}) {
    return getRealApi(url)
  }
}

module.exports = proxyTable
