import React from 'react'
import Loadable from 'react-loadable'
import HomeLoading from '@components/Loading/Home'
import PostLoading from '@components/Loading/Post'
import TabLoading from '@components/Loading/Tab'
import TabPicker from '@containers/TabPicker'

const Home = Loadable({
  loader: () => import('@containers/Home'),
  loading: () => <HomeLoading />
})

const Post = Loadable({
  loader: () => import('@containers/Post'),
  loading: () => <PostLoading />
})

const Activity = Loadable({
  loader: () => import('@containers/Activity'),
  loading: () => <TabLoading />
})

const Explore = Loadable({
  loader: () => import('@containers/Explore'),
  loading: () => <TabLoading />
})

const Xiaoce = Loadable({
  loader: () => import('@containers/Xiaoce'),
  loading: () => <TabLoading />
})

const Profile = Loadable({
  loader: () => import('@containers/Profile'),
  loading: () => <TabLoading />
})

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {path: '/home', exact: true, component: Home},
      {path: '/post', exact: true, component: Post},
      {path: '/tabs', exact: true, component: TabPicker},
      {path: '/activity', exact: true, component: Activity},
      {path: '/explore', exact: true, component: Explore},
      {path: '/xiaoce', exact: true, component: Xiaoce},
      {path: '/profile', exact: true, component: Profile}
    ]
  }
]

export default routes
