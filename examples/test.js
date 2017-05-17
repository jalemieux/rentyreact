//test.js

import React from 'react'
import { Router, 
  Route, 
  IndexRoute, 
  hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import AppContainer from './app/containers/AppContainer'
import AffordabilityContainer from './app/containers/AffordabilityContainer'


const foo = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={AffordabilityContainer} />
          <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>
)




