import React from 'react'
import Loadable from 'react-loadable'
import HomeLoading from '@components/Loading/Home'
import PostLoading from '@components/Loading/Post'

const Home = Loadable({
  loader: () => import('@containers/Home'),
  loading: () => <HomeLoading />
})

const Post = Loadable({
  loader: () => import('@containers/Post'),
  loading: () => <PostLoading />
})

const routes = [
  {path: '/', exact: true, component: Home},
  {path: '/post', component: Post}
]

export default routes;