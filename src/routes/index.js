import React from 'react'
import Loadable from 'react-loadable'
import HomeLoading from '@components/Loading/Home'
import TabPicker from '@containers/TabPicker'

let Loading = props => <div />

const Home = Loadable({
  loader: () => import('@containers/Home'),
  loading: () => <HomeLoading />
})

const routes = [
  {path: '/timeline/:category', exact: true, guestComponent: Home},
  {
    path: '/auth',
    exact: true,
    guestComponent: Loadable({
      loader: () => import('@containers/Auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/register',
    exact: true,
    guestComponent: Loadable({
      loader: () => import('@containers/Register'),
      loading: () => <Loading />
    })
  },
  {
    path: '/settings',
    exact: true,
    guestComponent: Loadable({
      loader: () => import('@containers/Settings/guest'),
      loading: () => <Loading />
    }),
    authComponent: Loadable({
      loader: () => import('@containers/Settings/auth'),
      loading: () => <Loading />
    }),
    requiredAuth: true
  },
  {
    path: '/post/:id',
    guestComponent: Loadable({
      loader: () => import('@containers/Post'),
      loading: () => <Loading />
    })
  },
  {
    path: '/pin/:id',
    guestComponent: Loadable({
      loader: () => import('@containers/Pin'),
      loading: () => <Loading />
    })
  },
  {path: '/recommended', guestComponent: TabPicker},
  {
    path: '/activity/:category/:id?',//id参数可选
    guestComponent: Loadable({
      loader: () => import('@containers/Activity'),
      loading: () => <Loading />
    })
  },
  {
    path: '/explore',
    guestComponent: Loadable({
      loader: () => import('@containers/Explore'),
      loading: () => <Loading />
    })
  },
  {
    path: '/feedback',
    guestComponent: Loadable({
      loader: () => import('@containers/Feedback'),
      loading: () => <Loading />
    })
  },
  {
    path: '/xiaoce',
    guestComponent: Loadable({
      loader: () => import('@containers/Xiaoce/guest'),
      loading: () => <Loading />
    }),
    requiredAuth: true,
    authComponent: Loadable({
      loader: () => import('@containers/Xiaoce/auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/profile',
    guestComponent: Loadable({
      loader: () => import('@containers/Profile/guest'),
      loading: () => <Loading />
    }),
    requiredAuth: true,
    authComponent: Loadable({
      loader: () => import('@containers/Profile/auth'),
      loading: () => <Loading />
    })
  },
  {
    path: '/user/:id',
    guestComponent: Loadable({
      loader: () => import('@containers/User'),
      loading: () => <Loading />
    }),
    routes: [
      {
        path: '/user/:id/:tag',
        guestComponent: Loadable({
          loader: () => import('@containers/User'),
          loading: () => <Loading />
        })
      }
    ]
  },
  {
    path: '/joinus',
    guestComponent: Loadable({
      loader: () => import('@containers/JoinUs'),
      loading: () => <Loading />
    })
  }
]

export default routes
