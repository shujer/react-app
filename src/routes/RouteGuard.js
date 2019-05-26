import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import store from '@store'

store.dispatch.auth.getAuth()

/**
 * role指示当前页面的权限，可能情况有：
 * 1. 只有用户能访问 ['auth']
 * 2. 只有游客能访问 ['guest']
 * 2. 用户和游客都可访问  ['auth', 'guest']
 */
export function RouteGuard(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <>
          {store.getState().auth.isLogin ? (
            route.meta.role.includes('auth') ||
            (route.meta.role.includes('auth') &&
              route.meta.role.includes('guest')) ? (
              <route.component {...props} routes={route.routes} />
            ) : (
              <Redirect from={props.location.pathname} to={'/'} />
            )
          ) : route.meta.role.includes('guest') ? (
            <route.component {...props} routes={route.routes} />
          ) : (
            <Redirect from={props.location.pathname} to={'/auth'} />
          )}
        </>
      )}
    />
  )
}
