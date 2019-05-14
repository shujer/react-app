import React from 'react'
import {Route} from 'react-router-dom'
import store from '@store'

let isLogin = store.dispatch.auth.getAuth().then(data => data).catch(err=>{})

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <>{
          isLogin && route.requiredAuth ? (
            <route.authComponent {...props} routes={route.routes} />
          ) : (
            <route.guestComponent {...props} routes={route.routes} />
          )
        }</>
      )}
    />
  )
}
