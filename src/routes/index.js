import React from 'react'
import Loadable from 'react-loadable'
import HomeLoading from '@components/Loading/Home'
import TabPicker from '@containers/TabPicker'
import TopicPicker from '@containers/TopicPicker'
import { Icon } from 'antd-mobile'

let Loading = props => (
  <div
    style={{
      position: 'fixed',
      top: '50px',
      left: '50%',
      transform: 'translate3d(-50%, 0, 0)'
    }}
  >
    <Icon type='loading' />
  </div>
)

const Home = Loadable({
  loader: () => import('@containers/Home'),
  loading: () => <HomeLoading />
})

const routes = [
  {
    path: '/timeline/:category',
    exact: true,
    component: Home,
    meta: { role: ['auth', 'guest'] }
  },
  {
    path: '/auth',
    exact: true,
    meta: { role: ['guest'] },
    component: Loadable({
      loader: () => import('@containers/Auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/register',
    exact: true,
    meta: { role: ['guest'] },
    component: Loadable({
      loader: () => import('@containers/Register'),
      loading: () => <Loading />
    })
  },
  {
    path: '/settings',
    exact: true,
    component: Loadable({
      loader: () => import('@containers/Settings'),
      loading: () => <Loading />
    }),
    meta: { role: ['auth', 'guest'] }
  },
  {
    path: '/post/:id',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/Post'),
      loading: () => <Loading />
    })
  },
  {
    path: '/postdata/:id',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/PostData'),
      loading: () => <Loading />
    })
  },
  {
    path: '/pin/:id',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/Pin'),
      loading: () => <Loading />
    })
  },
  {
    path: '/topic/:id',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/Topic'),
      loading: () => <Loading />
    })
  },
  { path: '/recommended', component: TabPicker, meta: { role: ['auth', 'guest'] } },
  {
    path: '/topicList/recommended',
    exact: true,
    component: TopicPicker,
    meta: { role: ['auth', 'guest'] }
  },
  {
    path: '/activity/:category/:id?', // id参数可选
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/Activity'),
      loading: () => <Loading />
    })
  },
  {
    path: '/explore',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/Explore'),
      loading: () => <Loading />
    })
  },
  {
    path: '/search',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/Search'),
      loading: () => <Loading />
    })
  },
  {
    path: '/feedback',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/Feedback'),
      loading: () => <Loading />
    })
  },
  {
    path: '/xiaoce',
    exact: true,
    component: Loadable({
      loader: () => import('@containers/Xiaoce'),
      loading: () => <Loading />
    }),
    meta: { role: ['auth', 'guest'] }
  },
  {
    path: '/profile',
    exact: true,
    component: Loadable({
      loader: () => import('@containers/Profile'),
      loading: () => <Loading />
    }),
    meta: { role: ['auth', 'guest'] }
  },

  {
    path: '/user/:id',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/User'),
      loading: () => <Loading />
    }),
    routes: [
      {
        path: '/user/:id/:tag',
        meta: { role: ['auth', 'guest'] },
        component: Loadable({
          loader: () => import('@containers/User'),
          loading: () => <Loading />
        })
      }
    ]
  },
  {
    path: '/joinus',
    meta: { role: ['auth', 'guest'] },
    component: Loadable({
      loader: () => import('@containers/JoinUs'),
      loading: () => <Loading />
    })
  }
]

export default routes
