import React from 'react'
import {Route} from 'react-router-dom'
import store from '@store'

store.dispatch.auth.getAuth()

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <>{
          store.getState().auth.isLogin && route.requiredAuth ? (
            <route.other {...props} routes={route.routes} />
          ) : (
            <route.component {...props} routes={route.routes} />
          )
        }</>
      )}
    />
  )
}
