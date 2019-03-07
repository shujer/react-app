import React from 'react'
import Loadable from 'react-loadable'
import Loading from '@components/Loading'

const Home = Loadable({
  loader: () => import('@containers/Home'),
  loading: () => <Loading name="home" />,
  delay: 300
})

const Article = Loadable({
  loader: () => import('@containers/Article'),
  loading: () => <Loading name="article" />,
  delay: 300
})

const routes = [
  {path: '/', exact: true, component: Home},
  {path: '/article', component: Article}
]

export default routes;