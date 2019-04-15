import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import withTabBarBasicLayout from '@layouts/withTabBarBasicLayout'
import PullToRefreshList from '@components/PullToRefreshList'
import NavList from '@components/NavList'

let entrylist= [
  {
      "collectionCount": 18,
      "isEvent": false,
      "commentsCount": 0,
      "gfw": false,
      "buildTime": 1553177742.2721,
      "checkStatus": true,
      "objectId": "5c9377bc6fb9a070ee428aba",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177703,
              "ngxCached": true,
              "title": "JavaScript",
              "id": "55964d83e4b08a686cc6b353"
          },
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:15:42.270Z",
      "rankIndex": 38.340854270901,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c9376506fb9a070fc623b2c",
      "verifyCreatedAt": "2019-03-21T11:38:36.868Z",
      "createdAt": "2019-03-21T11:38:36.868Z",
      "user": {
          "community": {
              "github": {
                  "username": "15751165579",
                  "avatarLarge": "https://avatars0.githubusercontent.com/u/17818249?v=4",
                  "uid": "17818249"
              },
              "wechat": {
                  "nickname": "valar_cC"
              }
          },
          "collectedEntriesCount": 43,
          "company": "",
          "followersCount": 3511,
          "followeesCount": 8,
          "role": "editor",
          "postedPostsCount": 30,
          "isAuthor": true,
          "postedEntriesCount": 14,
          "totalCommentsCount": 130,
          "ngxCachedTime": 1553177742,
          "ngxCached": true,
          "viewedEntriesCount": 2694,
          "jobTitle": "大前端工程师",
          "subscribedTagsCount": 23,
          "totalCollectionsCount": 4814,
          "username": "descire",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/5/28/163a64ba4279f889?w=1239&h=1209&f=png&s=115753",
          "objectId": "57c5ae26c4c9710061a1defc"
      },
      "author": "",
      "screenshot": "https://user-gold-cdn.xitu.io/2019/3/21/169a00a26cabf2b9?w=900&h=383&f=png&s=69612",
      "original": true,
      "hotIndex": 557.0669,
      "content": "通常情况下，HTML 中的图片资源会自上而下依次加载，而部分图片只有在用户向下滚动页面的场景下才能被看见，否则这部分图片的流量就白白浪费了。 所以，对于那些含有大量图片资源的网站，会采用“按需加载”的方式，也就是当图片资源出现在视口区域内，才会被加载，这样可能会影响一丢丢用户体…",
      "title": "图片懒加载的前世今生",
      "lastCommentTime": "1970-01-01T00:00:00.Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 375,
      "summaryInfo": "  通常情况下，HTML 中的图片资源会自上而下依次加载，而部分图片只有在用户向下滚动页面的场景下才能被看见，否则这部分图片的流量就白白浪费了。   所以，对于那些含有大量图片资源的网站，会采用“按需加载”的方式，也就是当图片资源出现在视口区域内，才会被加载，这样可能会影响一丢丢用户体验，但是能大...",
      "isCollected": false
  },
  {
      "collectionCount": 6,
      "isEvent": false,
      "commentsCount": 0,
      "gfw": false,
      "buildTime": 1553177763.1952,
      "checkStatus": true,
      "objectId": "5c93043cf265da60de1ae53d",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177722,
              "ngxCached": true,
              "title": "架构",
              "id": "55cdb52740ac79db3570607f"
          },
          {
              "ngxCachedTime": 1553177736,
              "ngxCached": true,
              "title": "后端",
              "id": "5597a063e4b08a686ce57030"
          }
      ],
      "updatedAt": "2019-03-21T14:16:03.186Z",
      "rankIndex": 4.1185306967498,
      "hot": false,
      "autoPass": true,
      "originalUrl": "http://blog.didispace.com/20160917-microservices-note/",
      "verifyCreatedAt": "2019-03-21T03:25:48.316Z",
      "createdAt": "2019-03-21T03:25:48.316Z",
      "user": {
          "community": {
              "github": {
                  "username": "dyc87112",
                  "avatarLarge": "https://avatars0.githubusercontent.com/u/3391170?v=4",
                  "uid": "3391170"
              }
          },
          "collectedEntriesCount": 23,
          "company": "关注我，每日技术干货推送，每月福利免费领取！",
          "followersCount": 2546,
          "followeesCount": 6,
          "role": "editor",
          "postedPostsCount": 39,
          "isAuthor": false,
          "postedEntriesCount": 37,
          "totalCommentsCount": 20,
          "ngxCachedTime": 1553177763,
          "ngxCached": true,
          "viewedEntriesCount": 116,
          "jobTitle": "",
          "subscribedTagsCount": 29,
          "totalCollectionsCount": 681,
          "username": "程序猿DD_",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2019/3/21/1699f0e5d13e9789?w=568&h=568&f=jpeg&s=33909",
          "objectId": "58e10d35570c350057a277bc"
      },
      "author": "",
      "screenshot": null,
      "original": false,
      "hotIndex": 396.0943,
      "content": "今天重读了Martin Fowler的《Microservices》，在此记录一下对九大特性的理解。 组件，是一个可以独立更换和升级的单元。就像PC中的CPU、内存、显卡、硬盘一样，独立且可以更换升级而不影响其他单元。 在“微服务”架构中，需要我们对服务进行组件化分解。服务，是…",
      "title": "《微服务》九大特性重读笔记",
      "lastCommentTime": "1970-01-01T00:00:00.Z",
      "type": "article",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "backend",
          "id": "5562b419e4b00c57d9b94ae2",
          "name": "后端",
          "ngxCachedTime": 1553177711
      },
      "viewsCount": 334,
      "summaryInfo": "今天重读了Martin Fowler的《Microservices》，在此记录一下对九大特性的理解。 组件，是一个可以独立更换和升级的单元。就像PC中的CPU、内存、显卡、硬盘一样，独立且可以更换升级而不影响其他单元。 在“微服务”架构中，需要我们对服务进行组件化分解。服务，是一种进程外的组件，它...",
      "isCollected": false
  },
  {
      "collectionCount": 62,
      "isEvent": false,
      "commentsCount": 15,
      "gfw": false,
      "buildTime": 1553177742.4066,
      "checkStatus": true,
      "objectId": "5c92e44b5188252daa18f0de",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:15:42.405Z",
      "rankIndex": 21.865135289978,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c92e385e51d450ce11df1d1",
      "verifyCreatedAt": "2019-03-21T03:03:42.691Z",
      "createdAt": "2019-03-21T03:03:42.691Z",
      "user": {
          "community": null,
          "collectedEntriesCount": 39,
          "company": "",
          "followersCount": 27,
          "followeesCount": 9,
          "role": "guest",
          "postedPostsCount": 6,
          "isAuthor": false,
          "postedEntriesCount": 0,
          "totalCommentsCount": 18,
          "ngxCachedTime": 1553177688,
          "ngxCached": true,
          "viewedEntriesCount": 548,
          "jobTitle": "web前端工程师",
          "subscribedTagsCount": 28,
          "totalCollectionsCount": 334,
          "username": "大漠火狼",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/4/15/162c79f54b6da258?w=256&h=256&f=jpeg&s=21755",
          "objectId": "5ad2d884518825556e5e882a"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 2213.3315,
      "content": "",
      "title": "JS面试之数组的几个不low操作",
      "lastCommentTime": "2019-03-21T21:00:04.378Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 1516,
      "summaryInfo": "",
      "isCollected": false
  },
  {
      "collectionCount": 6,
      "isEvent": false,
      "commentsCount": 2,
      "gfw": false,
      "buildTime": 1553177461.606,
      "checkStatus": true,
      "objectId": "5c92db556fb9a070ef60a1f5",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:11:01.604Z",
      "rankIndex": 3.1467662374431,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c8e5a086fb9a070bc3f02f9",
      "verifyCreatedAt": "2019-03-21T03:00:06.235Z",
      "createdAt": "2019-03-21T03:00:06.235Z",
      "user": {
          "community": {
              "wechat": {
                  "avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJDSY5xBJ2PH6cYQ8t8H9eSAMcRcgn6tINDNk23PFAynU7gmJrHvRVJISRibRvyMjfFeOO0UJ8zNNA/132"
              }
          },
          "collectedEntriesCount": 64,
          "company": "lg",
          "followersCount": 165,
          "followeesCount": 42,
          "role": "guest",
          "postedPostsCount": 8,
          "isAuthor": false,
          "postedEntriesCount": 0,
          "totalCommentsCount": 64,
          "ngxCachedTime": 1553177778,
          "viewedEntriesCount": 2027,
          "jobTitle": "前端小洋葱",
          "subscribedTagsCount": 36,
          "totalCollectionsCount": 403,
          "username": "snowLu",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/12/26/167e98a390f33011?w=220&h=220&f=jpeg&s=9620",
          "objectId": "5b0f50af6fb9a00a19290094"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 321.5385,
      "content": "上一篇文章中介绍了几种常见链表的含义，今天介绍下如何写出正确的链表代码。 我们一般设计的链表有两个类。Node 类用来表示节点，LinkedList 类提供了一些辅助方法，比如说结点的增删改查，以及显示列表元素等方法。 接下来看看如何用 js 代码表示一个链表。 Node 类包…",
      "title": "JavaScript数据结构之链表--设计",
      "lastCommentTime": "2019-03-21T10:53:45.549Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 239,
      "summaryInfo": "上一篇文章中介绍了几种常见链表的含义，今天介绍下如何写出正确的链表代码。 我们一般设计的链表有两个类。 类用来表示节点， 类提供了一些辅助方法，比如说结点的增删改查，以及显示列表元素等方法。接下来看看如何用 代码表示一个链表。 类包含两个属性： 用来保存节点上的数据， 用来保存指向下一个节点的链接...",
      "isCollected": false
  },
  {
      "collectionCount": 226,
      "isEvent": false,
      "commentsCount": 28,
      "gfw": false,
      "buildTime": 1553177741.9389,
      "checkStatus": true,
      "objectId": "5c92f6395188252dab3eb8b6",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177748,
              "ngxCached": true,
              "title": "面试",
              "id": "55979fe6e4b08a686ce562fe"
          },
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:15:41.937Z",
      "rankIndex": 76.518253203894,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c92f499f265da612647b754",
      "verifyCreatedAt": "2019-03-21T02:49:12.314Z",
      "createdAt": "2019-03-21T02:49:12.314Z",
      "user": {
          "community": null,
          "collectedEntriesCount": 68,
          "company": "字节跳动",
          "followersCount": 3794,
          "followeesCount": 27,
          "role": "guest",
          "postedPostsCount": 8,
          "isAuthor": false,
          "postedEntriesCount": 2,
          "totalCommentsCount": 254,
          "ngxCachedTime": 1553177746,
          "ngxCached": true,
          "viewedEntriesCount": 2113,
          "jobTitle": "FE",
          "subscribedTagsCount": 46,
          "totalCollectionsCount": 4308,
          "username": "郭东东",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2017/8/4/ad5ffaa6dc9e5ee11e31ebb3031c903e",
          "objectId": "57726622165abd005492ee87"
      },
      "author": "",
      "screenshot": "https://user-gold-cdn.xitu.io/2019/3/21/1699e117ba6de740?w=800&h=600&f=png&s=423939",
      "original": true,
      "hotIndex": 8003.8637,
      "content": "大家知道，React 现在已经在前端开发中占据了主导的地位。优异的性能，强大的生态，让其无法阻挡。博主面的 5 家公司，全部是 React 技术栈。据我所知，大厂也大部分以 React 作为主技术栈。React 也成为了面试中并不可少的一环。 React 也是现如今最流行的前端…",
      "title": "(中篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂",
      "lastCommentTime": "2019-03-21T22:10:38.163Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 5601,
      "summaryInfo": "大家知道，React 现在已经在前端开发中占据了主导的地位。优异的性能，强大的生态，让其无法阻挡。博主面的 5 家公司，全部是 React 技术栈。据我所知，大厂也大部分以 React 作为主技术栈。React 也成为了面试中并不可少的一环。 React 也是现如今最流行的前端框架，也是很多大厂面...",
      "isCollected": false
  },
  {
      "collectionCount": 215,
      "isEvent": false,
      "commentsCount": 39,
      "gfw": false,
      "buildTime": 1553177763.6935,
      "checkStatus": true,
      "objectId": "5c923452f265da610358776a",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          },
          {
              "ngxCachedTime": 1553177744,
              "ngxCached": true,
              "title": "运维",
              "id": "5602d88360b27db45a7f3bdc"
          }
      ],
      "updatedAt": "2019-03-21T14:16:03.692Z",
      "rankIndex": 21.294321480359,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c9232a8e51d45729b3b71e1",
      "verifyCreatedAt": "2019-03-20T12:38:42.833Z",
      "createdAt": "2019-03-20T12:38:42.833Z",
      "user": {
          "community": null,
          "collectedEntriesCount": 207,
          "company": "",
          "followersCount": 4115,
          "followeesCount": 33,
          "role": "editor",
          "postedPostsCount": 12,
          "isAuthor": false,
          "postedEntriesCount": 47,
          "totalCommentsCount": 164,
          "ngxCachedTime": 1553177763,
          "ngxCached": true,
          "viewedEntriesCount": 3962,
          "jobTitle": "",
          "subscribedTagsCount": 6,
          "totalCollectionsCount": 5292,
          "username": "shanyue",
          "avatarLarge": "https://leancloud-gold-cdn.xitu.io/bdfecd06f90e24f88946.jpeg?imageView/2/w/100/h/100/q/80/format/png",
          "objectId": "56a34361816dfa005925a654"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 8249.6187,
      "content": "刚开始调研服务器渲染写了一个 demo，正好对诗词感兴趣，就做了一个关于诗词的站点，越写越大，demo 变成了 DEMO，总的来说还是特别简单。随手挂到了服务器下。 有了前端自然需要服务器端支持，遵循着简单方便好用易于上手的原则，在 parse-server 与 graphql…",
      "title": "当我有一台云服务器时，我做了些什么",
      "lastCommentTime": "2019-03-21T22:15:43.237Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "backend",
          "id": "5562b419e4b00c57d9b94ae2",
          "name": "后端",
          "ngxCachedTime": 1553177711
      },
      "viewsCount": 5902,
      "summaryInfo": "刚开始调研服务器渲染写了一个 demo，正好对诗词感兴趣，就做了一个关于诗词的站点，越写越大，demo 变成了 DEMO，总的来说还是特别简单。随手挂到了服务器下。 技术栈 👉 Next.js + React + ApolloClient + Docker + Docker Compose 有了前...",
      "isCollected": false
  },
  {
      "collectionCount": 29,
      "isEvent": false,
      "commentsCount": 6,
      "gfw": false,
      "buildTime": 1553177705.1319,
      "checkStatus": true,
      "objectId": "5c91f0906fb9a070d6138c4e",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177719,
              "ngxCached": true,
              "title": "算法",
              "id": "55cd843d60b203b0519307a9"
          },
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:15:05.130Z",
      "rankIndex": 2.0462221269936,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://segmentfault.com/a/1190000007115162",
      "verifyCreatedAt": "2019-03-20T07:49:36.365Z",
      "createdAt": "2019-03-20T07:49:36.365Z",
      "user": {
          "community": null,
          "collectedEntriesCount": 37,
          "company": "360",
          "followersCount": 1245,
          "followeesCount": 10,
          "role": "editor",
          "postedPostsCount": 14,
          "isAuthor": false,
          "postedEntriesCount": 15,
          "totalCommentsCount": 110,
          "ngxCachedTime": 1553177736,
          "ngxCached": true,
          "viewedEntriesCount": 1777,
          "jobTitle": "前端工程师",
          "subscribedTagsCount": 31,
          "totalCollectionsCount": 2869,
          "username": "慕晨同学",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/8/25/1657094c37a50788?w=514&h=300&f=jpeg&s=10309",
          "objectId": "57f686e075c4cd3c59817ba4"
      },
      "author": "",
      "screenshot": null,
      "original": false,
      "hotIndex": 1061.9296,
      "content": "在codewars上做了一道斐波那契数列求和的题目，做完之后做了一些简单的优化和用另一种方法实现。 以上函数使用递归的方式进行斐波那契数列求和，但效率十分低，很多值会重复求值。题目要求使用 memoization方案进行优化。 memoization方案在《JavaScript…",
      "title": "斐波那契数列求和的js方案以及优化",
      "lastCommentTime": "2019-03-21T19:17:20.992Z",
      "type": "article",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 739,
      "summaryInfo": "在codewars上做了一道斐波那契数列求和的题目，做完之后做了一些简单的优化和用另一种方法实现。  以上函数使用递归的方式进行斐波那契数列求和，但效率十分低，很多值会重复求值。题目要求使用 memoization方案进行优化。 memoization方案在《JavaScript模式》和《Java...",
      "isCollected": false
  },
  {
      "collectionCount": 10,
      "isEvent": false,
      "commentsCount": 0,
      "gfw": false,
      "buildTime": 1553177705.0654,
      "checkStatus": true,
      "objectId": "5c91dadef265da611b1ecca0",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177775,
              "ngxCached": true,
              "title": "Java",
              "id": "559a7207e4b08a686d25703e"
          },
          {
              "ngxCachedTime": 1553177736,
              "ngxCached": true,
              "title": "后端",
              "id": "5597a063e4b08a686ce57030"
          }
      ],
      "updatedAt": "2019-03-21T14:15:05.064Z",
      "rankIndex": 2.1719389697084,
      "hot": false,
      "autoPass": true,
      "originalUrl": "http://blog.didispace.com/Spring-Boot%E5%BF%AB%E9%80%9F%E5%BC%80%E5%8F%91%E5%88%A9%E5%99%A8%EF%BC%9ASpring-Boot-CLI/",
      "verifyCreatedAt": "2019-03-20T06:17:03.665Z",
      "createdAt": "2019-03-20T06:17:03.665Z",
      "user": {
          "community": {
              "github": {
                  "username": "dyc87112",
                  "avatarLarge": "https://avatars0.githubusercontent.com/u/3391170?v=4",
                  "uid": "3391170"
              }
          },
          "collectedEntriesCount": 23,
          "company": "关注我，每日技术干货推送，每月福利免费领取！",
          "followersCount": 2546,
          "followeesCount": 6,
          "role": "editor",
          "postedPostsCount": 39,
          "isAuthor": false,
          "postedEntriesCount": 37,
          "totalCommentsCount": 20,
          "ngxCachedTime": 1553177763,
          "ngxCached": true,
          "viewedEntriesCount": 116,
          "jobTitle": "",
          "subscribedTagsCount": 29,
          "totalCollectionsCount": 681,
          "username": "程序猿DD_",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2019/3/21/1699f0e5d13e9789?w=568&h=568&f=jpeg&s=33909",
          "objectId": "58e10d35570c350057a277bc"
      },
      "author": "",
      "screenshot": null,
      "original": false,
      "hotIndex": 1225.9907,
      "content": "Spring Boot CLI（Command Line Interface）是一个命令行工具，您可以用它来快速构建Spring原型应用。通过Spring Boot CLI，我们可以通过编写Groovy脚本来快速的构建出Spring Boot应用，并通过命令行的方式将其运行起来…",
      "title": "Spring Boot快速开发利器：Spring Boot CLI",
      "lastCommentTime": "1970-01-01T00:00:00.Z",
      "type": "article",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "backend",
          "id": "5562b419e4b00c57d9b94ae2",
          "name": "后端",
          "ngxCachedTime": 1553177711
      },
      "viewsCount": 1123,
      "summaryInfo": "Spring Boot CLI（Command Line Interface）是一个命令行工具，您可以用它来快速构建Spring原型应用。通过Spring Boot CLI，我们可以通过编写Groovy脚本来快速的构建出Spring Boot应用，并通过命令行的方式将其运行起来。下来，我们来学习一...",
      "isCollected": false
  },
  {
      "collectionCount": 127,
      "isEvent": false,
      "commentsCount": 30,
      "gfw": false,
      "buildTime": 1553177622.6655,
      "checkStatus": true,
      "objectId": "5c91d3a9f265da611a565290",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          },
          {
              "ngxCachedTime": 1553177691,
              "ngxCached": true,
              "title": "强化学习",
              "id": "5907f48da0bb9f00650d1c03"
          }
      ],
      "updatedAt": "2019-03-21T14:13:42.664Z",
      "rankIndex": 7.4392845153405,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://www.zhangxinxu.com/life/2019/03/study/",
      "verifyCreatedAt": "2019-03-20T05:46:17.816Z",
      "createdAt": "2019-03-20T05:46:17.816Z",
      "user": {
          "community": {
              "weibo": {
                  "selfDescription": "我其实本想做个生物学者的。个人网站：http://www.zhangxinxu.com",
                  "uid": "1263362863",
                  "blogAddress": "http://weibo.com/zhangxinxu",
                  "username": "张鑫旭",
                  "avatarLarge": "http://tva2.sinaimg.cn/crop.0.0.180.180.180/4b4d632fjw1e8qgp5bmzyj2050050aa8.jpg"
              }
          },
          "collectedEntriesCount": 5,
          "company": "阅文集团",
          "followersCount": 6100,
          "followeesCount": 7,
          "role": "editor",
          "postedPostsCount": 14,
          "isAuthor": false,
          "postedEntriesCount": 11,
          "totalCommentsCount": 252,
          "ngxCachedTime": 1553177695,
          "ngxCached": true,
          "viewedEntriesCount": 232,
          "jobTitle": "前端打杂师",
          "subscribedTagsCount": 1,
          "totalCollectionsCount": 2528,
          "username": "张鑫旭",
          "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e085917dba213947",
          "objectId": "595315e7f265da6c322dc6c6"
      },
      "author": "",
      "screenshot": "https://user-gold-cdn.xitu.io/2019/3/20/16999a2cb1469d76?w=484&h=300&f=jpeg&s=17488",
      "original": false,
      "hotIndex": 4314.5911,
      "content": "很多人有学不进去，没时间学的问题，加上之前断断续续有很多人咨询我关于如何学习的问题，我觉得可以好好讲讲我对于学习这件事的一些经验和看法。",
      "title": "学不进去，没时间学怎么办？",
      "lastCommentTime": "2019-03-21T22:12:54.852Z",
      "type": "article",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "article",
          "id": "5562b428e4b00c57d9b94b9d",
          "name": "阅读",
          "ngxCachedTime": 1553177771
      },
      "viewsCount": 2892,
      "summaryInfo": "这篇文章发布于 2019年03月19日，星期二，2:36 下午，归类于 散文随笔。 阅读 1074 次, 今日 400 次 招聘高峰季，最近面试了一些人，聊到关于学习话题的时候，发现很多人有学不进去，没时间学的问题，加上之前断断续续有很多人咨询我关于如何学习的问题，我觉得可以好好讲讲我对于学习这件...",
      "isCollected": false
  },
  {
      "collectionCount": 35,
      "isEvent": false,
      "commentsCount": 10,
      "gfw": false,
      "buildTime": 1553177647.3096,
      "checkStatus": true,
      "objectId": "5c91b747f265da611360367a",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177703,
              "ngxCached": true,
              "title": "JavaScript",
              "id": "55964d83e4b08a686cc6b353"
          },
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:14:07.308Z",
      "rankIndex": 3.3113708425551,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c91afdcf265da60fe7c2613",
      "verifyCreatedAt": "2019-03-20T03:45:11.130Z",
      "createdAt": "2019-03-20T03:45:11.130Z",
      "user": {
          "community": null,
          "collectedEntriesCount": 69,
          "company": "前端恶霸",
          "followersCount": 5027,
          "followeesCount": 46,
          "role": "editor",
          "postedPostsCount": 33,
          "isAuthor": false,
          "postedEntriesCount": 2,
          "totalCommentsCount": 317,
          "ngxCachedTime": 1553177773,
          "ngxCached": true,
          "viewedEntriesCount": 5188,
          "jobTitle": "公众号",
          "subscribedTagsCount": 64,
          "totalCollectionsCount": 2701,
          "username": "dendoink",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2019/1/23/168799008cdf2228?w=819&h=819&f=jpeg&s=410288",
          "objectId": "585a2f52128fe10069ba1b95"
      },
      "author": "",
      "screenshot": "https://user-gold-cdn.xitu.io/2019/3/20/169993200cdd5ddc?w=1508&h=1170&f=png&s=2818709",
      "original": true,
      "hotIndex": 2128.2367,
      "content": "在学习前端的时候，我总是能听到很多高级词汇，比如今天会聊到的 函数式编程(Functional Programming) & 高阶函数 (Higher-order function) 。 但是当你真正的理解什么是 函数式编程 & 高阶函数 的时候，也许会发现，你几乎每天都会用到…",
      "title": "[前端漫谈_3] 从 filter 聊到 Promise",
      "lastCommentTime": "2019-03-21T15:59:11.097Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 1726,
      "summaryInfo": "在学习前端的时候，我总是能听到很多高级词汇，比如今天会聊到的 & 。但是当你真正的理解什么是 & 的时候，也许会发现，你几乎每天都会用到它，只是你不知道那就是高阶函数 / 函数式编程。 在 中，函数是一种值，举个例子： 我们把一个函数作为值，赋给了变量 ,这在我们的代码中很常见对吗？ 粗看很不好理...",
      "isCollected": false
  },
  {
      "collectionCount": 80,
      "isEvent": false,
      "commentsCount": 40,
      "gfw": false,
      "buildTime": 1553177749.2468,
      "checkStatus": true,
      "objectId": "5c91955cf265da611e176f37",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:15:49.245Z",
      "rankIndex": 9.7247351249023,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c919465e51d455c835448c1",
      "verifyCreatedAt": "2019-03-20T03:05:21.107Z",
      "createdAt": "2019-03-20T03:05:21.107Z",
      "user": {
          "community": {
              "weibo": {
                  "selfDescription": "mui开源框架作者",
                  "uid": "1314636567",
                  "blogAddress": "http://weibo.com/hbcui1984",
                  "username": "崔红保",
                  "avatarLarge": "http://tva3.sinaimg.cn/crop.0.0.1242.1242.180/4e5bc317jw8etwk0bckqyj20yi0yiq6q.jpg"
              },
              "github": {
                  "username": "hbcui1984",
                  "avatarLarge": "https://avatars3.githubusercontent.com/u/177226?v=4",
                  "uid": "177226"
              }
          },
          "collectedEntriesCount": 10,
          "company": "DCloud",
          "followersCount": 120,
          "followeesCount": 24,
          "role": "guest",
          "postedPostsCount": 6,
          "isAuthor": false,
          "postedEntriesCount": 0,
          "totalCommentsCount": 67,
          "ngxCachedTime": 1553177752,
          "ngxCached": true,
          "viewedEntriesCount": 369,
          "jobTitle": "前端架构师",
          "subscribedTagsCount": 44,
          "totalCollectionsCount": 241,
          "username": "CHB",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/3/28/1626cb04ba5685c9?w=1372&h=572&f=jpeg&s=254259",
          "objectId": "5ab8e77f51882555712c5c35"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 6459.0405,
      "content": "多次论证、数月研发，我们重写部分Vue底层、重构uni-app框架，实现了微信端性能翻倍及更多Vue语法支持。 随着使用uni-app的开发者愈来愈多，业务复杂度不断增加，不少开发者抱怨uni-app支持的vue语法少，某些场景性能有问题（特别是页面存在复杂组件的情况），这些问…",
      "title": "全新重构，uni-app实现微信端性能翻倍",
      "lastCommentTime": "2019-03-21T21:45:27.820Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 5457,
      "summaryInfo": "多次论证、数月研发，我们重写部分底层、重构框架，实现了微信端性能翻倍及更多VUE语法支持。 在初期借鉴了，实现了微信小程序端的快速兼容，感谢美团点评团队对于开源社区的贡献！ 随着使用的开发者愈来愈多，业务复杂度不断增加，不少开发者抱怨支持的vue语法少，某些场景性能有问题（特别是页面存在复杂组件的...",
      "isCollected": false
  },
  {
      "collectionCount": 124,
      "isEvent": false,
      "commentsCount": 11,
      "gfw": false,
      "buildTime": 1553176973.4919,
      "checkStatus": true,
      "objectId": "5c91852d5188252db64521a8",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177703,
              "ngxCached": true,
              "title": "JavaScript",
              "id": "55964d83e4b08a686cc6b353"
          },
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:02:53.490Z",
      "rankIndex": 6.2009121959944,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c8a5a286fb9a049d05e9bd4",
      "verifyCreatedAt": "2019-03-20T00:11:25.232Z",
      "createdAt": "2019-03-20T00:11:25.232Z",
      "user": {
          "community": {
              "wechat": {
                  "avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLOzNmktbnuJkYTia5Dicb7nENsdUbuE6pFsxvQAtZHichDWaFWqoG4zMZyJ6TXicEib8VYOV0yI7IBYrQ/132"
              },
              "github": {
                  "username": "wanqihua",
                  "avatarLarge": "https://avatars1.githubusercontent.com/u/31650943?v=4",
                  "uid": "31650943"
              }
          },
          "collectedEntriesCount": 57,
          "company": "",
          "followersCount": 1956,
          "followeesCount": 30,
          "role": "editor",
          "postedPostsCount": 9,
          "isAuthor": false,
          "postedEntriesCount": 0,
          "totalCommentsCount": 246,
          "ngxCachedTime": 1553177754,
          "ngxCached": true,
          "viewedEntriesCount": 3603,
          "jobTitle": "前端学徒",
          "subscribedTagsCount": 5,
          "totalCollectionsCount": 2633,
          "username": "小生方勤",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2019/1/14/1684b8cf1ed7df86?w=523&h=522&f=jpeg&s=32607",
          "objectId": "5b6d656ef265da0f7c4ff4fd"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 4718.4352,
      "content": "去年圣诞节产品提了一个活动需求，其中有一个下雪的背景动画。在做这个动画的过程中加深了对 canvas 动画的一些了解，在这里我仅是抛砖引玉的分享一下，欢迎各位大佬批评。 代码已上传至 github ，感兴趣的可以 clone 代码到本地运行。望给个 star 支持一下。 UI …",
      "title": "【前端词典】实现 Canvas 下雪背景引发的性能思考",
      "lastCommentTime": "2019-03-21T17:53:23.632Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 3421,
      "summaryInfo": "去年圣诞节产品提了一个活动需求，其中有一个下雪的背景动画。在做这个动画的过程中加深了对 canvas 动画的一些了解，在这里我仅是抛砖引玉的分享一下，欢迎各位大佬批评。 代码已上传至 github ，感兴趣的可以 clone 代码到本地运行。望给个 star 支持一下。 UI 的需求是雪花下落的方...",
      "isCollected": false
  },
  {
      "collectionCount": 15,
      "isEvent": false,
      "commentsCount": 2,
      "gfw": false,
      "buildTime": 1553177399.4073,
      "checkStatus": true,
      "objectId": "5c90f9ec6fb9a070ee42852f",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177736,
              "ngxCached": true,
              "title": "后端",
              "id": "5597a063e4b08a686ce57030"
          }
      ],
      "updatedAt": "2019-03-21T14:09:59.406Z",
      "rankIndex": 0.55053626583794,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c90e1dbf265da60ef634486",
      "verifyCreatedAt": "2019-03-19T14:30:44.607Z",
      "createdAt": "2019-03-19T14:30:44.607Z",
      "user": {
          "community": {
              "github": {
                  "username": "liuyueve",
                  "avatarLarge": "https://avatars1.githubusercontent.com/u/39432700?v=4",
                  "uid": "39432700"
              }
          },
          "collectedEntriesCount": 0,
          "company": "",
          "followersCount": 30,
          "followeesCount": 5,
          "role": "guest",
          "postedPostsCount": 11,
          "isAuthor": false,
          "postedEntriesCount": 0,
          "totalCommentsCount": 2,
          "ngxCachedTime": 1553177688,
          "ngxCached": true,
          "viewedEntriesCount": 103,
          "jobTitle": "",
          "subscribedTagsCount": 2,
          "totalCollectionsCount": 31,
          "username": "吾乃上将军邢道荣",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2019/2/21/1691004fbff04e8c?w=406&h=240&f=jpeg&s=10568",
          "objectId": "5c6dfca2e51d4511dd3fc67b"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 620.3416,
      "content": "springboot作为一个基于spring开发的框架，自然也继承了spring的容器属性。容器中的bean自然成为了springboot各种功能的基础。本节就来分析一下springboot如何将各种bean加载进容器中。 开始分析之前首先我们先概览一下springboot框架…",
      "title": "SpringBoot源码解析-Bean的加载与自动化配置",
      "lastCommentTime": "2019-03-20T13:59:44.913Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "article",
          "id": "5562b428e4b00c57d9b94b9d",
          "name": "阅读",
          "ngxCachedTime": 1553177771
      },
      "viewsCount": 458,
      "summaryInfo": "springboot作为一个基于spring开发的框架，自然也继承了spring的容器属性。容器中的bean自然成为了springboot各种功能的基础。本节就来分析一下springboot如何将各种bean加载进容器中。 开始分析之前首先我们先概览一下springboot框架究竟加载了多少bea...",
      "isCollected": false
  },
  {
      "collectionCount": 51,
      "isEvent": false,
      "commentsCount": 60,
      "gfw": false,
      "buildTime": 1553177647.7297,
      "checkStatus": true,
      "objectId": "5c90e73e6fb9a070ba31379b",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177703,
              "ngxCached": true,
              "title": "JavaScript",
              "id": "55964d83e4b08a686cc6b353"
          },
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:14:07.728Z",
      "rankIndex": 2.9400976456972,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c90e6f65188252d6f4313e1",
      "verifyCreatedAt": "2019-03-19T12:57:34.897Z",
      "createdAt": "2019-03-19T12:57:34.897Z",
      "user": {
          "community": {
              "weibo": {
                  "selfDescription": "",
                  "uid": "5547207024",
                  "blogAddress": "http://weibo.com/superzhaoyang",
                  "username": "简书胡七筒",
                  "avatarLarge": "http://tva3.sinaimg.cn/crop.0.0.100.100.180/0063pvX2jw8epzq9gtxs7j302s02sq2r.jpg"
              },
              "wechat": {
                  "avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epYE0fu1icDZPRU5Lw4oZ4PT3v0FqtrJH5OEU9iaeSd7hgXAVmonmKIaqC8qf4gtI96fNuw8bJaCWtg/132"
              }
          },
          "collectedEntriesCount": 103,
          "company": "你猜",
          "followersCount": 3819,
          "followeesCount": 133,
          "role": "editor",
          "postedPostsCount": 61,
          "isAuthor": false,
          "postedEntriesCount": 1,
          "totalCommentsCount": 3429,
          "ngxCachedTime": 1553177729,
          "ngxCached": true,
          "viewedEntriesCount": 8481,
          "jobTitle": "码文字的程序猿",
          "subscribedTagsCount": 35,
          "totalCollectionsCount": 4552,
          "username": "胡七筒",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/11/6/166e86bef47561bd?w=1080&h=1080&f=jpeg&s=128436",
          "objectId": "5a6ebfcff265da3e303cc08c"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 3495.6576,
      "content": "盛夏已来，街边烧烤店的生意日渐红火，光着膀子吃串喝扎啤的人多了起来。 午夜时分，下了地铁，我便拉着华妹在马路上时而狂奔飞驰，时而闲庭信步。午夜压马路对于交流感情很有帮助，言语中满是亲昵的味道。 在路过一家便利店时，我以请华妹吃伊利小布丁为由，进店偷偷买了盒小杜塞进兜里，以备不时…",
      "title": "程序猿生存指南-60 一晌贪欢",
      "lastCommentTime": "2019-03-21T20:32:41.386Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "article",
          "id": "5562b428e4b00c57d9b94b9d",
          "name": "阅读",
          "ngxCachedTime": 1553177771
      },
      "viewsCount": 2683,
      "summaryInfo": "盛夏已来，街边烧烤店的生意日渐红火，光着膀子吃串喝扎啤的人多了起来。 午夜时分，下了地铁，我便拉着华妹在马路上时而狂奔飞驰，时而闲庭信步。午夜压马路对于交流感情很有帮助，言语中满是亲昵的味道。 在路过一家便利店时，我以请华妹吃伊利小布丁为由，进店偷偷买了盒小杜塞进兜里，以备不时之需。 在漫步了几个...",
      "isCollected": false
  },
  {
      "collectionCount": 19,
      "isEvent": false,
      "commentsCount": 4,
      "gfw": false,
      "buildTime": 1553171984.0415,
      "checkStatus": true,
      "objectId": "5c90d8515188252d58537e06",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177668,
              "ngxCached": true,
              "title": "Go",
              "id": "555e9a80e4b00c57d9955de2"
          },
          {
              "ngxCachedTime": 1553177736,
              "ngxCached": true,
              "title": "后端",
              "id": "5597a063e4b08a686ce57030"
          }
      ],
      "updatedAt": "2019-03-21T12:39:44.040Z",
      "rankIndex": 0.64343699215419,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c8f9f8ef265da612c3a34b9",
      "verifyCreatedAt": "2019-03-19T11:53:53.923Z",
      "createdAt": "2019-03-19T11:53:53.923Z",
      "user": {
          "community": {
              "github": {
                  "username": "keets2012",
                  "avatarLarge": "https://avatars0.githubusercontent.com/u/13324388?v=4",
                  "uid": "13324388"
              }
          },
          "collectedEntriesCount": 25,
          "company": "",
          "followersCount": 10255,
          "followeesCount": 12,
          "role": "editor",
          "postedPostsCount": 69,
          "isAuthor": false,
          "postedEntriesCount": 74,
          "totalCommentsCount": 83,
          "ngxCachedTime": 1553177778,
          "viewedEntriesCount": 570,
          "jobTitle": "Senior工程师",
          "subscribedTagsCount": 9,
          "totalCollectionsCount": 4095,
          "username": "aoho",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/1/17/16104a64f70fcc44?w=368&h=368&f=jpeg&s=63519",
          "objectId": "59b5ecb56fb9a00a5c3c278b"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 740.9633,
      "content": "在前面的文章，我们介绍了Go Modules。Go module支持了Versioned Go，并初步解决了包依赖管理的问题。 新的工作模式也带来了一些问题，在大陆地区我们无法直接通过 go get 命令获取到一些第三方包，最常见的就是 golang.org/x 下面的各种优秀…",
      "title": "Go的包管理工具（四）：Go Module Proxy",
      "lastCommentTime": "2019-03-20T09:07:53.966Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "backend",
          "id": "5562b419e4b00c57d9b94ae2",
          "name": "后端",
          "ngxCachedTime": 1553177711
      },
      "viewsCount": 528,
      "summaryInfo": "在前面的文章，我们介绍了。Go module支持了Versioned Go，并初步解决了包依赖管理的问题。 新的工作模式也带来了一些问题，在大陆地区我们无法直接通过 命令获取到一些第三方包，最常见的就是 下面的各种优秀的包。一旦工作在模块下， 将不再关心 GOPATH 或是 vendor 下的包，...",
      "isCollected": false
  },
  {
      "collectionCount": 85,
      "isEvent": false,
      "commentsCount": 9,
      "gfw": false,
      "buildTime": 1553177158.9603,
      "checkStatus": true,
      "objectId": "5c90d82b5188252da9012944",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177703,
              "ngxCached": true,
              "title": "JavaScript",
              "id": "55964d83e4b08a686cc6b353"
          },
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T14:05:58.959Z",
      "rankIndex": 1.6880846381397,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c90d8085188252db75694dc",
      "verifyCreatedAt": "2019-03-19T11:53:16.083Z",
      "createdAt": "2019-03-19T11:53:16.083Z",
      "user": {
          "community": {
              "weibo": {
                  "avatar_url": "http://tva1.sinaimg.cn/crop.0.0.200.200.180/005SpQEcjw8f6iv9rb0dej305k05kwee.jpg",
                  "uid": "5384746884",
                  "nickname": "不想写前端的Encounter"
              }
          },
          "collectedEntriesCount": 210,
          "company": "腾讯",
          "followersCount": 906,
          "followeesCount": 18,
          "role": "editor",
          "postedPostsCount": 17,
          "isAuthor": true,
          "postedEntriesCount": 7,
          "totalCommentsCount": 97,
          "ngxCachedTime": 1553177733,
          "ngxCached": true,
          "viewedEntriesCount": 1573,
          "jobTitle": "前端工程师",
          "subscribedTagsCount": 37,
          "totalCollectionsCount": 3380,
          "username": "counterxing",
          "avatarLarge": "https://leancloud-gold-cdn.xitu.io/NhcImRe2HnZEbWrYkIn3I90MuAQ6KcHjwyP4VBFE",
          "objectId": "587a050661ff4b0065f1951c"
      },
      "author": "",
      "screenshot": "https://user-gold-cdn.xitu.io/2019/3/19/16995cc1fa4bb5ea?w=500&h=317&f=jpeg&s=10749",
      "original": true,
      "hotIndex": 2084.8986,
      "content": "本文首先描述笔者所处的项目组的 Web 打印项目的需求背景，然后描述笔者在实践 Web 打印项目的过程中遇到了诸多问题，阐述 Web 打印的问题解决思路，最后给出了另外一种 Web 打印的需求解决方案，即使用Headless browser生成图片并打印的方案。预计阅读时间5 …",
      "title": "Web打印探秘",
      "lastCommentTime": "2019-03-20T11:41:12.631Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 1187,
      "summaryInfo": "本文首先描述笔者所处的项目组的 Web 打印项目的需求背景，然后描述笔者在实践 Web 打印项目的过程中遇到了诸多问题，阐述 Web 打印的问题解决思路，最后给出了另外一种 Web 打印的需求解决方案，即使用生成图片并打印的方案。预计阅读时间5 ~ 10分钟。 于是，为了解决上述需求，笔者大概写了...",
      "isCollected": false
  },
  {
      "collectionCount": 26,
      "isEvent": false,
      "commentsCount": 16,
      "gfw": false,
      "buildTime": 1553173301.5065,
      "checkStatus": true,
      "objectId": "5c9077726fb9a070b70be5ba",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T13:01:41.505Z",
      "rankIndex": 0.49223994113764,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c9077166fb9a070e14aec76",
      "verifyCreatedAt": "2019-03-19T06:46:41.872Z",
      "createdAt": "2019-03-19T06:46:41.872Z",
      "user": {
          "community": {
              "github": {
                  "username": "BengBu-YueZhang",
                  "avatarLarge": "https://avatars3.githubusercontent.com/u/24958677?v=4",
                  "uid": "24958677"
              }
          },
          "collectedEntriesCount": 37,
          "company": "好未来",
          "followersCount": 10,
          "followeesCount": 8,
          "role": "guest",
          "postedPostsCount": 11,
          "isAuthor": false,
          "postedEntriesCount": 0,
          "totalCommentsCount": 19,
          "ngxCachedTime": 1553177757,
          "ngxCached": true,
          "viewedEntriesCount": 901,
          "jobTitle": "前端",
          "subscribedTagsCount": 1,
          "totalCollectionsCount": 60,
          "username": "利维亚的杰洛特",
          "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e0869c9ae31dcc26",
          "objectId": "5971a626f265da6c50303ae2"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 697.4028,
      "content": "数据结构和算法的知识博大精深, 这里只是对这几种数据结构做一些简单的介绍。并对leetcode上部分相关的简单和中等题做出解答。还请各位看官见谅 二叉树是一种典型的树状结构, 二叉树每一个节点最多有两个子树的结构。以下是遍历二叉树的几种方式, 总的来说使用递归的方式, 还是非常…",
      "title": "数据结构的故事之二叉树, 前缀树, N叉树",
      "lastCommentTime": "2019-03-20T16:58:15.821Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 355,
      "summaryInfo": "数据结构和算法的知识博大精深, 这里只是对这几种数据结构做一些简单的介绍。并对leetcode上部分相关的简单和中等题做出解答。还请各位看官见谅 二叉树是一种典型的树状结构, 二叉树每一个节点最多有两个子树的结构。以下是遍历二叉树的几种方式, 总的来说使用递归的方式, 还是非常好理解的。 前序遍历...",
      "isCollected": false
  },
  {
      "collectionCount": 16,
      "isEvent": false,
      "commentsCount": 0,
      "gfw": false,
      "buildTime": 1553170321.0915,
      "checkStatus": true,
      "objectId": "5c907822f265da60e17cf33d",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T12:12:01.090Z",
      "rankIndex": 0.48706274342247,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c907742f265da60c95b63af",
      "verifyCreatedAt": "2019-03-19T06:46:26.087Z",
      "createdAt": "2019-03-19T06:46:26.087Z",
      "user": {
          "community": {
              "weibo": {
                  "selfDescription": "https://icepy.me，厨子/摩旅/程序猿",
                  "uid": "2455876310",
                  "blogAddress": "http://weibo.com/u/2455876310",
                  "username": "子曰五溪",
                  "avatarLarge": "http://tvax1.sinaimg.cn/crop.0.0.1002.1002.180/9261b2d6ly8fu7s604og1j20ru0ruq45.jpg"
              },
              "github": {
                  "username": "icepy",
                  "avatarLarge": "https://avatars0.githubusercontent.com/u/3321837?v=4",
                  "uid": "3321837"
              }
          },
          "collectedEntriesCount": 5,
          "company": "",
          "followersCount": 5980,
          "followeesCount": 1,
          "role": "guest",
          "postedPostsCount": 1,
          "isAuthor": false,
          "postedEntriesCount": 214,
          "totalCommentsCount": 172,
          "ngxCachedTime": 1553177674,
          "ngxCached": true,
          "viewedEntriesCount": 810,
          "jobTitle": "厨子/摩旅/编程 | front end developer",
          "subscribedTagsCount": 69,
          "totalCollectionsCount": 6039,
          "username": "子曰五溪",
          "avatarLarge": "https://lc-gold-cdn.xitu.io/u3UiRbBpJ6MtyCtZZRwZFwB",
          "objectId": "56d08dcfdf0eea79dc943244"
      },
      "author": "",
      "screenshot": "https://user-gold-cdn.xitu.io/2019/3/19/169945304b92687a?w=1490&h=828&f=png&s=60788",
      "original": true,
      "hotIndex": 668.0468,
      "content": "这篇文章的出发点是为了帮助前端开发者串联 ES6前后的 JavaScript 知识，并且可以快速了解 JavaScript 语言的最新进展。 JavaScript 在当下处于特权地位，因为它是唯一可以在浏览器中运行的语言，并且是被高度集成和优化过的。 JavaScript 在未…",
      "title": "ES5 to ESNext —  自 2015 以来 JavaScript 新增的所有新特性",
      "lastCommentTime": "1970-01-01T00:00:00.Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 506,
      "summaryInfo": "这篇文章的出发点是为了帮助前端开发者串联 ES6前后的 JavaScript 知识，并且可以快速了解 JavaScript 语言的最新进展。 JavaScript 在当下处于特权地位，因为它是唯一可以在浏览器中运行的语言，并且是被高度集成和优化过的。 JavaScript 在未来有着极好的发展空间...",
      "isCollected": false
  },
  {
      "collectionCount": 26,
      "isEvent": false,
      "commentsCount": 0,
      "gfw": false,
      "buildTime": 1553173063.0137,
      "checkStatus": true,
      "objectId": "5c906b3c6fb9a070d4199b70",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177688,
              "ngxCached": true,
              "title": "前端",
              "id": "5597a05ae4b08a686ce56f6f"
          }
      ],
      "updatedAt": "2019-03-21T12:57:43.012Z",
      "rankIndex": 0.79625725030399,
      "hot": false,
      "autoPass": false,
      "originalUrl": "https://juejin.im/post/5c906a9fe51d45311207ce8b",
      "verifyCreatedAt": "2019-03-19T04:20:19.936Z",
      "createdAt": "2019-03-19T04:20:19.936Z",
      "user": {
          "community": null,
          "collectedEntriesCount": 169,
          "company": "",
          "followersCount": 42744,
          "followeesCount": 10,
          "role": "guest",
          "postedPostsCount": 739,
          "isAuthor": true,
          "postedEntriesCount": 356,
          "totalCommentsCount": 567,
          "ngxCachedTime": 1553177743,
          "ngxCached": true,
          "viewedEntriesCount": 3158,
          "jobTitle": "",
          "subscribedTagsCount": 75,
          "totalCollectionsCount": 20939,
          "username": "腾讯云加社区",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2017/12/15/1605950722bb7b3e?w=659&h=640&f=jpeg&s=43951",
          "objectId": "58afa29aac502e0069c5d756"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 1179.9141,
      "content": "在定位外网问题时，最怕的是遇到无法复现或者是偶现的问题，我们无法在用户的设备上通过抓包、打断点或日志来分析问题，只能靠仅有的页面截图和用户的片面描述作为线索。此时，也只能结合“猜想法”和“排除法”进行分析定位，排查了半天也很有可能没有结果，最后只能回复“可能是缓存或者app的原…",
      "title": "如何优雅地定位外网问题？",
      "lastCommentTime": "1970-01-01T00:00:00.Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "frontend",
          "id": "5562b415e4b00c57d9b94ac8",
          "name": "前端",
          "ngxCachedTime": 1553177679
      },
      "viewsCount": 917,
      "summaryInfo": "在定位外网问题时，最怕的是遇到无法复现或者是偶现的问题，我们无法在用户的设备上通过抓包、打断点或日志来分析问题，只能靠仅有的页面截图和用户的片面描述作为线索。此时，也只能结合“猜想法”和“排除法”进行分析定位，排查了半天也很有可能没有结果，最后只能回复“可能是缓存或者app的原因，请清下缓存或者重...",
      "isCollected": false
  },
  {
      "collectionCount": 12,
      "isEvent": false,
      "commentsCount": 0,
      "gfw": false,
      "buildTime": 1553177084.7101,
      "checkStatus": true,
      "objectId": "5c9066d85188252db177242b",
      "entryView": "",
      "subscribersCount": 0,
      "ngxCachedTime": 1553177778,
      "verifyStatus": true,
      "tags": [
          {
              "ngxCachedTime": 1553177670,
              "ngxCached": true,
              "title": "掘金翻译计划",
              "id": "56b5a7f3df0eea00544e1993"
          },
          {
              "ngxCachedTime": 1553177775,
              "ngxCached": true,
              "title": "Python",
              "id": "559a7227e4b08a686d25744f"
          },
          {
              "ngxCachedTime": 1553177739,
              "ngxCached": true,
              "title": "人工智能",
              "id": "57be7c18128fe1005fa902de"
          },
          {
              "ngxCachedTime": 1553177736,
              "ngxCached": true,
              "title": "后端",
              "id": "5597a063e4b08a686ce57030"
          }
      ],
      "updatedAt": "2019-03-21T14:04:44.708Z",
      "rankIndex": 0.24813461671458,
      "hot": false,
      "autoPass": true,
      "originalUrl": "https://juejin.im/post/5c9066b3f265da612e6d5770",
      "verifyCreatedAt": "2019-03-19T03:49:44.664Z",
      "createdAt": "2019-03-19T03:49:44.664Z",
      "user": {
          "community": {
              "wechat": {
                  "avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKr3ZPRg8ECLu7JicPa3LC5DBH9McEtiaGzicdiaibWCvOykfd7XkeZ0qQzIxFiaDnJts8TRPlG4uX6NwmA/132"
              },
              "github": {
                  "username": "EmilyQiRabbit",
                  "avatarLarge": "https://avatars0.githubusercontent.com/u/23472093?v=4",
                  "uid": "23472093"
              }
          },
          "collectedEntriesCount": 2,
          "company": "",
          "followersCount": 1674,
          "followeesCount": 0,
          "role": "editor",
          "postedPostsCount": 18,
          "isAuthor": false,
          "postedEntriesCount": 0,
          "totalCommentsCount": 230,
          "ngxCachedTime": 1553177672,
          "ngxCached": true,
          "viewedEntriesCount": 125,
          "jobTitle": "前端",
          "subscribedTagsCount": 63,
          "totalCollectionsCount": 421,
          "username": "玉儿Qi",
          "avatarLarge": "https://user-gold-cdn.xitu.io/2018/4/9/162a78bb26356d08?w=720&h=1008&f=jpeg&s=305747",
          "objectId": "5a4b4f915188252bca053c71"
      },
      "author": "",
      "screenshot": "",
      "original": true,
      "hotIndex": 397.6375,
      "content": "“一张照片包含了万千信息”，这句话常常被人们引用。但是一张图能表达的信息要更多。以图的形式可视化数据，帮助我们获得了更可行的见解，并基于此作出更好的数据驱动的决策。 但是，为了真正理解图到底是什么，以及为什么我们要使用它，我们还需要知道图论的概念。知道了这个，可以帮助我们更好的…",
      "title": "[译] 基于 Python 的图论和网络分析",
      "lastCommentTime": "1970-01-01T00:00:00.Z",
      "type": "post",
      "english": false,
      "category": {
          "ngxCached": true,
          "title": "ai",
          "id": "57be7c18128fe1005fa902de",
          "name": "人工智能",
          "ngxCachedTime": 1553177734
      },
      "viewsCount": 275,
      "summaryInfo": "“一张照片包含了万千信息”，这句话常常被人们引用。但是一张图能表达的信息要更多。以图的形式可视化数据，帮助我们获得了更可行的见解，并基于此作出更好的数据驱动的决策。 但是，为了真正理解图到底是什么，以及为什么我们要使用它，我们还需要知道图论的概念。知道了这个，可以帮助我们更好的编程。 如果你之前曾...",
      "isCollected": false
  }
]

@withTabBarBasicLayout('home')
class HomeContainer extends Component {
  state = {
    selectedTab: 0
  }
  handleTabChange = index => {
    this.setState({
      selectedTab: index
    })
  }
  render() {
    const {tabList} = this.props
    const tabs = [
      {title: '推荐', show: true},
      {title: '关注', show: true},
      ...tabList
    ].filter(val => val.show === true)

    

    return (
      <div>
        <NavList
          tabs={tabs}
          onCaretClick={this.goToTab}
          showCaret={true}
          selectedTab={this.state.selectedTab}
          onTabChange={this.handleTabChange}
        />
        <PullToRefreshList items={entrylist}/>
      </div>
    )
  }

  goToTab = () => {
    this.props.history.push({
      pathname: '/recommended'
    })
  }
}

const mapState = state => ({
  tabList: state.home.tabList
})

const mapDispatch = ({home: {getTabListAsync}}) => ({
  getTabListAsync: () => getTabListAsync()
})

export default connect(
  mapState,
  mapDispatch
)(HomeContainer)

HomeContainer.propTypes = {
  tabList: PropTypes.array.isRequired,
  getTabListAsync: PropTypes.func.isRequired
}
