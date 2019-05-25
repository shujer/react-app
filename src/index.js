import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import {Router, Switch, Redirect} from 'react-router-dom'
import {RouteGuard} from './routes/RouteGuard'

import store, {history} from './store'
import {Provider} from 'react-redux'

import './index.less'
import './common.less'
import '@assets/css/iconfont.css'
import * as serviceWorker from './serviceWorker'

const RouterConfig = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {routes.map((route, i) => (
          <RouteGuard key={i} {...route} />
        ))}
        <Redirect from="/activity/" to="/activity/all" />
        <Redirect from="/" to="/timeline/all" />
        <Redirect from="/timeline/" to="/timeline/all" />
      </Switch>
    </Router>
  </Provider>
)

ReactDOM.render(<RouterConfig />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.unregister()
