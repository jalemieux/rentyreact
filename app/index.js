import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './containers/App'
import AffordabilityContainer from './containers/AffordabilityContainer'
import RentalIncomeContainer from './containers/RentalIncomeContainer'
import reducers from './reducers'

import { state as initialState } from './api/state'



const store = createStore(
  combineReducers(Object.assign(reducers, { routing: routerReducer })),
  initialState
)

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AffordabilityContainer} />
        <Route path="affordability" component={AffordabilityContainer}/>
        <Route path="cashflow" component={RentalIncomeContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)


// const store = createStore(
//   reducer, 
//   initialState,
// );


// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// )