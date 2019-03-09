const query = {
  id: 1, //对象ID，评论ID
  pageToken: 1 //翻页值
}
const reply = {
  data: [
    {
      rootId: '6607650510172324365', //文章id
      replierId: '59131496573', //回复者id
      referId: '1613204514772039', //评论id
      id: '1613207385631827', //自己的id
      publishDate: 1538474459,
      replierScreenName: 'CodePen',
      content: 'npm config set registry https://registry.npm.taobao.org',
      publishDateStr: '2018-10-02T10:00:59',
      commentCount: 0,
      likeCount: 3
    },
    {
      rootId: '6607650510172324365',
      replierId: '3994042889',
      referId: '1613204514772039',
      id: '1613216670308520',
      publishDate: 1538483312,
      replierScreenName: 'w3ctech',
      content: '配置一下 npm 和 yarn 的代理',
      publishDateStr: '2018-10-02T12:28:32',
      commentCount: 0,
      likeCount: 2
    },
    {
      rootId: '6607650510172324365',
      replierId: '3575743061',
      referId: '1613204514772039',
      id: '1613217576926237',
      publishDate: 1538484177,
      replierScreenName: '前端观察',
      content:
        '翻墙后，再安装一遍，一般node-sass这个模块会安装失败，尽量翻墙后，再安装几遍',
      publishDateStr: '2018-10-02T12:42:57',
      commentCount: 0,
      likeCount: 1
    },
    {
      rootId: '6607650510172324365',
      replierId: '55070950287',
      referId: '1613204514772039',
      id: '1613215034422324',
      publishDate: 1538481751,
      replierScreenName: 'Web App Trend',
      content: 'cnpm了解一下',
      publishDateStr: '2018-10-02T12:02:31',
      commentCount: 0,
      likeCount: 1
    },
    {
      rootId: '6607650510172324365',
      replierId: '1456259911',
      referId: '1613204514772039',
      id: '1613214110182451',
      publishDate: 1538480869,
      replierScreenName: 'Browsershot',
      content: 'sass_binary_site "https://npm.taobao.org/mirrors/node-sass/"',
      publishDateStr: '2018-10-02T11:47:49',
      commentCount: 0,
      likeCount: 1
    },
    {
      rootId: '6607650510172324365',
      replierId: '50870487273',
      referId: '1613204514772039',
      id: '1613210625836099',
      publishDate: 1538477547,
      replierScreenName: 'TimTadder',
      content:
        'npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/😂',
      publishDateStr: '2018-10-02T10:52:27',
      commentCount: 0,
      likeCount: 0
    },

    {
      id: '1613208428773400',
      publishDate: 1538475453,
      content:
        '如楼上所说 extend 是构造一个组件的语法器.你给它参数 他给你一个组件 然后这个组件你可以作用到Vue.component 这个全局注册方法里， 也可以在任意vue模板里使用',
      commentCount: 0,
      likeCount: 1,
      publishDateStr: '2018-10-02T10:17:33',
      referId: '1613206762349576',
      replierId: '6774994956',
      rootId: '6607650510172324365',
      replierScreenName: '一只小鹿'
    },
    {
      id: '1613209325513784',
      publishDate: 1538476307,
      content:
        'Vue.extend 返回的是一个“扩展实例构造器”，也就是一个预设了部分选项的 Vue 实例构造器',
      commentCount: 0,
      likeCount: 0,
      publishDateStr: '2018-10-02T10:31:47',
      referId: '1613206762349576',
      replierId: '54600140803',
      rootId: '6607650510172324365',
      replierScreenName: 'flickr'
    },
    {
      id: '1613215838736398',
      publishDate: 1538482519,
      content: 'vue.component直接注册组件内部已经自动构造了',
      commentCount: 0,
      likeCount: 0,
      publishDateStr: '2018-10-02T12:15:19',
      referId: '1613206762349576',
      replierId: '6916355401',
      rootId: '6607650510172324365',
      replierScreenName: '站酷'
    },
    {
      id: '1613217101123645',
      publishDate: 1538483722,
      content: 'vue.extend 组件构造器 需要传入component进行注册',
      commentCount: 0,
      likeCount: 0,
      publishDateStr: '2018-10-02T12:35:22',
      referId: '1613206762349576',
      replierId: '84525550764',
      rootId: '6607650510172324365',
      replierScreenName: '创意人'
    },

    {
      rootId: '6607650510172324365',
      content:
        '如果你在 Windows 上通过 minTTY 使用 Git Bash，交互提示符并不工作。你必须通过 winpty vue.cmd create hello-world 启动这个命令。',
      commentCount: 0,
      likeCount: 1,
      publishDateStr: '2018-10-02T14:02:41',
      referId: '1613218339649608',
      id: '1613222594053155',
      replierScreenName: 'Behance',
      replierId: '6004290588',
      publishDate: 1538488961
    },
    {
      rootId: '6607650510172324365',
      content: '可以选择使用window power shell试一试😁',
      commentCount: 0,
      likeCount: 0,
      publishDateStr: '2018-10-02T12:55:19',
      referId: '1613218339649608',
      id: '1613218357371085',
      replierScreenName: '一只小仓鼠',
      replierId: '22506963222',
      publishDate: 1538484919
    },

    {
      content: `UglifyJsPlugin配置 pure_funcs: ['console.log']`,
      commentCount: 0,
      id: '1613261754469411',
      publishDateStr: '2018-10-03T00:25:11',
      rootId: '6607650510172324365',
      publishDate: 1538526311,
      replierScreenName: 'Desige Gallery',
      replierId: '69668371733',
      likeCount: 0,
      referId: '1613218025630727'
    },
    {
      referId: '1613214829688904',
      content: '可以直接在vue.config.js 中 设置 pages属性来做到',
      id: '1613986233296941',
      replierId: '62752269613',
      commentCount: 0,
      rootId: '6607650510172324365',
      likeCount: 0,
      publishDateStr: '2018-10-11T00:20:31',
      replierScreenName: 'Instantshift',
      publishDate: 1539217231
    },
    {
      replierScreenName: 'Instantshift',
      referId: '1613228443075598',
      replierId: '62752269613',
      rootId: '6607650510172324365',
      likeCount: 0,
      id: '1613986743208979',
      commentCount: 0,
      publishDateStr: '2018-10-11T00:28:37',
      publishDate: 1539217717,
      content:
        'Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本'
    },
    {
      content: 'cat node_modules/webpack/package.json',
      likeCount: 0,
      publishDate: 1542367891,
      referId: '1613223026826247',
      replierScreenName: 'AppUi',
      rootId: '6607650510172324365',
      id: '1617289944368135',
      publishDateStr: '2018-11-16T11:31:31',
      replierId: '50262266634',
      commentCount: 0
    },
    {
      replierScreenName: 'InfoQ',
      publishDate: 1539052510,
      id: '1613813514434596',
      referId: '1613213872045123',
      publishDateStr: '2018-10-09T02:35:10',
      replierId: '5511688137',
      commentCount: 0,
      rootId: '6607650510172324365',
      likeCount: 0,
      content: '一天没看书我觉都睡不着'
    }
  ],
  appCode: 'toutiao',
  pageToken: null,
  retcode: '000000',
  dataType: 'reply',
  hasNext: false
}
export default reply
