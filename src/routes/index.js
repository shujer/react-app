import React from 'react'
import Loadable from 'react-loadable'
import HomeLoading from '@components/Loading/Home'
import TabPicker from '@containers/TabPicker'
import {Icon} from 'antd-mobile'

let Loading = props => <div />

const Home = Loadable({
  loader: () => import('@containers/Home'),
  loading: () => <HomeLoading />
})

const routes = [
  {path: '/timeline/:category', exact: true, component: Home},
  {
    path: '/auth',
    exact: true,
    component: Loadable({
      loader: () => import('@containers/Auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/register',
    exact: true,
    component: Loadable({
      loader: () => import('@containers/Register'),
      loading: () => <Loading />
    })
  },
  {
    path: '/settings',
    exact: true,
    component: Loadable({
      loader: () => import('@containers/Settings/guest'),
      loading: () => <Loading />
    }),
    other: Loadable({
      loader: () => import('@containers/Settings/auth'),
      loading: () => <Loading />
    }),
    requiredAuth: true
  },
  {
    path: '/post/:id',
    component: Loadable({
      loader: () => import('@containers/Post'),
      loading: () => <Loading />
    })
  },
  {path: '/recommended', component: TabPicker},
  {
    path: '/activity',
    component: Loadable({
      loader: () => import('@containers/Activity'),
      loading: () => <Loading />
    })
  },
  {
    path: '/explore',
    component: Loadable({
      loader: () => import('@containers/Explore'),
      loading: () => <Loading />
    })
  },
  {
    path: '/feedback',
    component: Loadable({
      loader: () => import('@containers/Feedback'),
      loading: () => <Loading />
    })
  },
  {
    path: '/xiaoce',
    component: Loadable({
      loader: () => import('@containers/Xiaoce/guest'),
      loading: () => <Loading />
    }),
    requiredAuth: true,
    other: Loadable({
      loader: () => import('@containers/Xiaoce/auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/profile',
    component: Loadable({
      loader: () => import('@containers/Profile/guest'),
      loading: () => <Loading />
    }),
    requiredAuth: true,
    other: Loadable({
      loader: () => import('@containers/Profile/auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/user/:id',
    component: Loadable({
      loader: () => import('@containers/User'),
      loading: () => <Loading />
    }),
    routes: [
      {
        path: '/user/:id/:tag',
        component: Loadable({
          loader: () => import('@containers/User'),
          loading: () => <Loading />
        })
      }
    ]
  },
  {
    path: '/joinus',
    component: Loadable({
      loader: () => import('@containers/JoinUs'),
      loading: () => <Loading />
    })
  }
]

export default routes
