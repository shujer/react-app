import React from 'react'
import Loadable from 'react-loadable'
import HomeLoading from '@components/Loading/Home'
import PostLoading from '@components/Loading/Post'
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
  loading: () => <PostLoading />
})

const Explore = Loadable({
  loader: () => import('@containers/Explore'),
  loading: () => <PostLoading />
})

const Xiaoce = Loadable({
  loader: () => import('@containers/Xiaoce'),
  loading: () => <PostLoading />
})

const Profile = Loadable({
  loader: () => import('@containers/Profile'),
  loading: () => <PostLoading />
})


const routes = [
  {path: '/', exact: true, component: Home},
  {path: '/home', exact: true, component: Home},
  {path: '/post', component: Post},
  {path: '/tabs', component: TabPicker},
  {path: '/activity', component: Activity},
  {path: '/explore', component: Explore},
  {path: '/xiaoce', component: Xiaoce},
  {path: '/profile', component: Profile}
]

export default routes;