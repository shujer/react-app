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

const Auth = Loadable({
  loader: () => import('@containers/Auth'),
  loading: () => <TabLoading />
})

const Register = Loadable({
  loader: () => import('@containers/Register'),
  loading: () => <TabLoading />
})

const Settings = Loadable({
  loader: () => import('@containers/Settings'),
  loading: () => <TabLoading />
})

const Feedback = Loadable({
  loader: () => import('@containers/Feedback'),
  loading: () => <TabLoading />
})


const routes = [
  {path: '/timeline/:category', exact: true, component: Home},
  {path: '/auth', exact: true, component: Auth},
  {path: '/register', exact: true, component: Register},
  {path: '/settings', exact: true, component: Settings},
  {path: '/post/:id', component: Post},
  {path: '/recommended', component: TabPicker},
  {path: '/activity', component: Activity},
  {path: '/explore', component: Explore},
  {path: '/feedback', component: Feedback},
  {path: '/xiaoce', component: Xiaoce},
  {
    path: '/collection/:id',
    component: Xiaoce
  },
  {
    path: '/profile',
    component: Profile,
    routes: [
      {
        path: '/profile/notification',
        component: Profile
      },
      {
        path: '/profile/likes',
        component: Profile
      },
      {
        path: '/profile/collections',
        component: Profile
      },
      {
        path: '/profile/xiaoxe/',
        component: Profile
      },
      {
        path: '/profile/posts',
        component: Profile
      },
      {
        path: '/profile/subscrib',
        component: Profile
      }
    ]
  },
  {
    path: '/user/:id',
    component: Profile,
    routes: [
      {
        path: '/user/:id/following',
        component: Profile
      },
      {
        path: '/user/:id/followers',
        component: Profile
      },
      {
        path: '/user/:id/activities',
        component: Profile
      },
      {
        path: '/user/:id/pins',
        component: Profile
      },
      {
        path: '/user/:id/posts',
        component: Profile
      },
      {
        path: '/user/:id/shares',
        component: Profile
      },
      {
        path: '/user/:id/likes',
        component: Profile
      },
      {
        path: '/user/:id/tags',
        component: Profile
      },
      {
        path: '/user/:id/collections',
        component: Profile
      },
      {
        path: '/user/settings/profile',
        component: Profile
      },
      {
        path: '/user/:id/xiaoce',
        component: Profile
      }
    ]
  }
]

export default routes
