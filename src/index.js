import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import {renderRoutes} from 'react-router-config'
import {HashRouter as Router} from 'react-router-dom'

import store from './store'
import { Provider} from 'react-redux'

import './index.less'
import '@assets/css/iconfont.css'
import * as serviceWorker from './serviceWorker'


const RouterConfig = () => (
  <Router>
    <Provider store={store}>{renderRoutes(routes)}</Provider>
  </Router>
)

ReactDOM.render(<RouterConfig />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register()
