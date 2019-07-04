import React from 'react'
import LikeButton from '@components/LikeButton'
import ShortStr from '@components/ShortStr'
import UserLink from '@components/AvatarBar/UserLink'
import AvatarBar from '@components/AvatarBar'
import { getTimefromNow } from '@utils/timeHelper'
import { CommentIcon } from '@components/Icons'
import { List } from 'antd-mobile'
import './style.less'
const comments = [
  {
    id: '5d1df501f265da339783ac4f',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content:
      '你们说吧 如果你会怎么做！被裁的同事 有两个有点傻 直接签字走了 而大部分还是不行 打算仲裁！而我们被留下的几个更难，六月份工资要三个月后才能发，7 8 9 月暂时按照80%来发！两选择 要么留下 有可能后几个月的钱都是问题！要么走人，走人六月份工资也暂时拿不到，然后自己找工作',
    userId: '57a942dbc4c971005a364502',
    respUser: '',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: null,
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T12:45:53.035Z',
    updatedAt: '2019-07-04T12:45:53.035Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1de17ef265da339783ac26',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '留下因为工资低？😂',
    userId: '58d1cbde44d904006852006b',
    respUser: '',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '58d1cbde44d904006852006b',
      username: '万能背锅侠',
      avatarLarge: '',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 422,
      collectedEntriesCount: 17,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: null,
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T11:22:38.934Z',
    updatedAt: '2019-07-04T11:22:38.934Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1ddd286fb9a0025c1df088',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '是不是准备埋一波雷，随时删库跑路呀😀',
    userId: '578e3a735bbb50005b8bab22',
    respUser: '',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '578e3a735bbb50005b8bab22',
      username: '茂茂',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/1ac9fa4ba0d481d22fe2290bd6ddadd1.jpg',
      selfDescription: '',
      jobTitle: 'Web前端开发工程师',
      company: '',
      viewedEntriesCount: 2111,
      collectedEntriesCount: 568,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: null,
    likesCount: 2,
    picList: [],
    createdAt: '2019-07-04T11:04:08.840Z',
    updatedAt: '2019-07-04T11:04:08.840Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1dcf2ff265da339783abf8',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '还不如被裁呢，然后和大伙一起去仲裁。',
    userId: '58d8e71e44d90400687c9e20',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '58d8e71e44d90400687c9e20',
      username: '绿蒿添梅',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2019/5/7/16a90be601540e6c?w=191\u0026h=179\u0026f=jpeg\u0026s=11552',
      selfDescription: '',
      jobTitle: '非著名Android开发',
      company: '',
      viewedEntriesCount: 1210,
      collectedEntriesCount: 2,
      level: 1,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 1,
    picList: [],
    createdAt: '2019-07-04T10:04:31.752Z',
    updatedAt: '2019-07-04T10:04:31.752Z',
    replyCount: 1,
    topComment: [
      {
        id: '5d1df37f6fb9a0025c1df0ba',
        targetId: '5d1dc1ea6fb9a00259a1761b',
        content:
          '是啊 可是人家不裁你😭\u0000\u0000\u0000\u0000就算裁了 补偿估计暂时不会有',
        userId: '57a942dbc4c971005a364502',
        respUser: '58d8e71e44d90400687c9e20',
        firstComment: '5d1dcf2ff265da339783abf8',
        respComment: '5d1dcf2ff265da339783abf8',
        userInfo: {
          objectId: '57a942dbc4c971005a364502',
          username: 'Kevinlx',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
          selfDescription: '',
          jobTitle: '',
          company: '',
          viewedEntriesCount: 346,
          collectedEntriesCount: 1,
          level: 0,
          currentUserFollowed: false
        },
        respUserInfo: {
          objectId: '58d8e71e44d90400687c9e20',
          username: '绿蒿添梅',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2019/5/7/16a90be601540e6c?w=191\u0026h=179\u0026f=jpeg\u0026s=11552',
          selfDescription: '',
          jobTitle: '非著名Android开发',
          company: '',
          viewedEntriesCount: 1210,
          collectedEntriesCount: 2,
          level: 1,
          currentUserFollowed: false
        },
        likesCount: 0,
        picList: [],
        createdAt: '2019-07-04T12:39:27.109Z',
        updatedAt: '2019-07-04T12:39:27.109Z',
        replyCount: 0,
        topComment: null,
        isLiked: false
      }
    ],
    isLiked: false
  },
  {
    id: '5d1dce9b6fb9a0025c1df068',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '到底怎么做呢',
    userId: '5cb0146df265da03a85aafda',
    respUser: '',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '5cb0146df265da03a85aafda',
      username: '晟夏的叶',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2019/6/28/16b9c7dd08f8bf7c?w=1620\u0026h=1080\u0026f=jpeg\u0026s=67548',
      selfDescription:
        '公众号：晟夏的叶，专注于分享linux下c/c++开发经验，c++面试题，linux下服务器开发技术，python下django开发相关技术',
      jobTitle: '后端开发',
      company: '',
      viewedEntriesCount: 105,
      collectedEntriesCount: 24,
      level: 1,
      currentUserFollowed: false
    },
    respUserInfo: null,
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T10:02:03.172Z',
    updatedAt: '2019-07-04T10:02:03.172Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1dcb3f518825028179b51b',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '那就是你多了60%的活却少了80%工资？不走还等着过年啊😂',
    userId: '5b28cff0e51d4558a75e7689',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '5b28cff0e51d4558a75e7689',
      username: 'jhyc',
      avatarLarge: '',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 418,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T09:47:43.981Z',
    updatedAt: '2019-07-04T09:47:43.981Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1dcaf16fb9a0025c1df05e',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '劳动仲裁走一波？',
    userId: '5be28c3ff265da6118012e6d',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '5be28c3ff265da6118012e6d',
      username: '夜雨清尘',
      avatarLarge: 'https://mirror-gold-cdn.xitu.io/168e095d76d74c1fbf4',
      selfDescription: 'null',
      jobTitle: '前端划水师',
      company: '好未来集团',
      viewedEntriesCount: 291,
      collectedEntriesCount: 75,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T09:46:25.537Z',
    updatedAt: '2019-07-04T09:46:25.537Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1dca9d6fb9a0025c1df05c',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '明天又将是新的一天',
    userId: '585346b261ff4b0068489b61',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '585346b261ff4b0068489b61',
      username: '老是被糖吃掉',
      avatarLarge: 'https://mirror-gold-cdn.xitu.io/168e083a436d097d44a',
      selfDescription: '喜欢买书hhh',
      jobTitle: 'front-end',
      company: '',
      viewedEntriesCount: 689,
      collectedEntriesCount: 49,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T09:45:01.662Z',
    updatedAt: '2019-07-04T09:45:01.662Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1dc964f265da339783abea',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '还不如被裁了，拿着赔偿找新工作',
    userId: '5b3eefa95188251a8d36c8a5',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '5b3eefa95188251a8d36c8a5',
      username: '天大寒砚冰坚',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2019/2/8/168cd743c48042a0?w=903\u0026h=903\u0026f=jpeg\u0026s=264426',
      selfDescription: '',
      jobTitle: '前端劝退师',
      company: '回头是岸',
      viewedEntriesCount: 175,
      collectedEntriesCount: 11,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T09:39:48.394Z',
    updatedAt: '2019-07-04T09:39:48.394Z',
    replyCount: 3,
    topComment: [
      {
        id: '5d1dc9f8518825028179b515',
        targetId: '5d1dc1ea6fb9a00259a1761b',
        content: '题主说没赔偿',
        userId: '57b9019b5bbb50005b782c08',
        respUser: '5b3eefa95188251a8d36c8a5',
        firstComment: '5d1dc964f265da339783abea',
        respComment: '5d1dc964f265da339783abea',
        userInfo: {
          objectId: '57b9019b5bbb50005b782c08',
          username: 'sankin',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2019/6/29/16ba0bd6630a0911?w=512\u0026h=512\u0026f=jpeg\u0026s=168092',
          selfDescription: 'Idea thinking and practice.',
          jobTitle: 'Web Developer',
          company: '.',
          viewedEntriesCount: 2563,
          collectedEntriesCount: 289,
          level: 0,
          currentUserFollowed: false
        },
        respUserInfo: {
          objectId: '5b3eefa95188251a8d36c8a5',
          username: '天大寒砚冰坚',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2019/2/8/168cd743c48042a0?w=903\u0026h=903\u0026f=jpeg\u0026s=264426',
          selfDescription: '',
          jobTitle: '前端劝退师',
          company: '回头是岸',
          viewedEntriesCount: 175,
          collectedEntriesCount: 11,
          level: 0,
          currentUserFollowed: false
        },
        likesCount: 0,
        picList: [],
        createdAt: '2019-07-04T09:42:16.436Z',
        updatedAt: '2019-07-04T09:42:16.436Z',
        replyCount: 0,
        topComment: null,
        isLiked: false
      },
      {
        id: '5d1df3c4518825028179b573',
        targetId: '5d1dc1ea6fb9a00259a1761b',
        content: '是的没有！如果去仲裁 也许会有机会 但是能拿到钱会是什么时候呢',
        userId: '57a942dbc4c971005a364502',
        respUser: '57b9019b5bbb50005b782c08',
        firstComment: '5d1dc964f265da339783abea',
        respComment: '5d1dc9f8518825028179b515',
        userInfo: {
          objectId: '57a942dbc4c971005a364502',
          username: 'Kevinlx',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
          selfDescription: '',
          jobTitle: '',
          company: '',
          viewedEntriesCount: 346,
          collectedEntriesCount: 1,
          level: 0,
          currentUserFollowed: false
        },
        respUserInfo: {
          objectId: '57b9019b5bbb50005b782c08',
          username: 'sankin',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2019/6/29/16ba0bd6630a0911?w=512\u0026h=512\u0026f=jpeg\u0026s=168092',
          selfDescription: 'Idea thinking and practice.',
          jobTitle: 'Web Developer',
          company: '.',
          viewedEntriesCount: 2563,
          collectedEntriesCount: 289,
          level: 0,
          currentUserFollowed: false
        },
        likesCount: 0,
        picList: [],
        createdAt: '2019-07-04T12:40:36.259Z',
        updatedAt: '2019-07-04T12:40:36.259Z',
        replyCount: 0,
        topComment: null,
        isLiked: false
      }
    ],
    isLiked: false
  },
  {
    id: '5d1dc6076fb9a0025c1df04c',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '衫裤跑路！欧嘞嘞，欧拉拉！😂',
    userId: '58983ee8128fe100656267e2',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '58983ee8128fe100656267e2',
      username: '探花',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2019/6/5/16b262f11946c8b2?w=393\u0026h=372\u0026f=png\u0026s=204657',
      selfDescription: '',
      jobTitle: '前端小探花',
      company: '',
      viewedEntriesCount: 271,
      collectedEntriesCount: 0,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 1,
    picList: [],
    createdAt: '2019-07-04T09:25:27.894Z',
    updatedAt: '2019-07-04T09:25:27.894Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  },
  {
    id: '5d1dc604518825028179b50b',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '怎么做',
    userId: '5ce4f324f265da1bcb4f026f',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '5ce4f324f265da1bcb4f026f',
      username: '喵唔',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2019/6/27/16b9704bcf83f3a2?w=1080\u0026h=1102\u0026f=jpeg\u0026s=151897',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 1,
      collectedEntriesCount: 0,
      level: 0,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T09:25:24.278Z',
    updatedAt: '2019-07-04T09:25:24.278Z',
    replyCount: 1,
    topComment: [
      {
        id: '5d1dc6906fb9a0025c1df04e',
        targetId: '5d1dc1ea6fb9a00259a1761b',
        content: '悲伤一阵子😂',
        userId: '57a942dbc4c971005a364502',
        respUser: '5ce4f324f265da1bcb4f026f',
        firstComment: '5d1dc604518825028179b50b',
        respComment: '5d1dc604518825028179b50b',
        userInfo: {
          objectId: '57a942dbc4c971005a364502',
          username: 'Kevinlx',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
          selfDescription: '',
          jobTitle: '',
          company: '',
          viewedEntriesCount: 346,
          collectedEntriesCount: 1,
          level: 0,
          currentUserFollowed: false
        },
        respUserInfo: {
          objectId: '5ce4f324f265da1bcb4f026f',
          username: '喵唔',
          avatarLarge:
            'https://user-gold-cdn.xitu.io/2019/6/27/16b9704bcf83f3a2?w=1080\u0026h=1102\u0026f=jpeg\u0026s=151897',
          selfDescription: '',
          jobTitle: '',
          company: '',
          viewedEntriesCount: 1,
          collectedEntriesCount: 0,
          level: 0,
          currentUserFollowed: false
        },
        likesCount: 0,
        picList: [],
        createdAt: '2019-07-04T09:27:44.261Z',
        updatedAt: '2019-07-04T09:27:44.261Z',
        replyCount: 0,
        topComment: null,
        isLiked: false
      }
    ],
    isLiked: false
  },
  {
    id: '5d1dc51b518825028179b508',
    targetId: '5d1dc1ea6fb9a00259a1761b',
    content: '所以你到底想好了怎么做',
    userId: '5bcd9b1e6fb9a05cde1d8fe2',
    respUser: '57a942dbc4c971005a364502',
    firstComment: '',
    respComment: '',
    userInfo: {
      objectId: '5bcd9b1e6fb9a05cde1d8fe2',
      username: '天晴朗好风光',
      avatarLarge: 'https://mirror-gold-cdn.xitu.io/168e0955b64626d01b3',
      selfDescription: '一个没有信仰的coder',
      jobTitle: 'java小菜鸟',
      company: '',
      viewedEntriesCount: 865,
      collectedEntriesCount: 10,
      level: 1,
      currentUserFollowed: false
    },
    respUserInfo: {
      objectId: '57a942dbc4c971005a364502',
      username: 'Kevinlx',
      avatarLarge:
        'https://user-gold-cdn.xitu.io/2016/11/29/2fa26cadb0854449847aa91bc9a11dfc.jpg',
      selfDescription: '',
      jobTitle: '',
      company: '',
      viewedEntriesCount: 346,
      collectedEntriesCount: 1,
      level: 0,
      currentUserFollowed: false
    },
    likesCount: 0,
    picList: [],
    createdAt: '2019-07-04T09:21:31.153Z',
    updatedAt: '2019-07-04T09:21:31.153Z',
    replyCount: 0,
    topComment: null,
    isLiked: false
  }
]

const Reply = ({ reply, respUser }) => {
  let { userInfo, content, userId } = reply
  return (
    <div className='replyContainer'>
      <div className='replyContent'>
        <small>
          <strong>
            {userInfo.username}
            {respUser === userId ? '(作者)' : null}：
          </strong>
          {content}
        </small>
      </div>
    </div>
  )
}

const Comment = ({ comment }) => {
  let {
    userInfo,
    content,
    createdAt,
    topComment,
    respUser,
    id,
    replyCount
  } = comment
  console.log(comment)
  return (
    <div>
      <AvatarBar
        size='medium'
        className='avatarBar'
        user={userInfo}
        appendContent={[
          <UserLink {...userInfo} />,
          <ShortStr
            str={
              userInfo
                ? `${userInfo.jobTitle}${' @ ' + userInfo.company ||
                    ''} · ${getTimefromNow(createdAt)}`
                : ''
            }
            len={20}
          />
        ]}
        extraContent={[
          <div className="commentInfo">
            <LikeButton currentId={id} />
            <span><CommentIcon /> {replyCount || '评论'}</span>
          </div>
        ]}
      />
      <div className='commentContent'>
        <small> {content}</small>
        {topComment ? (
          <div>
            {topComment.map(item => (
              <Reply reply={item} respUser={respUser} key={item.id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

const CommentList = props => {
  // let { comments } = props
  return (
    <List>
      {comments.map(comment => (
        <List.Item key={comment.id}>
          <Comment comment={comment} />
        </List.Item>
      ))}
    </List>
  )
}

export default CommentList
