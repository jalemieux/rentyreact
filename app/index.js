import React from 'react'
import { Router, 
  Route, 
  IndexRoute, 
  hashHistory, 
  browserHistory } from 'react-router'

import ReactDOM from 'react-dom'

import { createStore, 
  applyMiddleware, 
  combineReducers } from 'redux'

import { Provider } from 'react-redux'

import { 
  syncHistoryWithStore,
  routerMiddleware,
 routerReducer } from 'react-router-redux'


import thunkMiddleware from 'redux-thunk'

import ExampleContainer from './containers/ExampleContainer'

import AppContainer from './containers/AppContainer'
import SignInContainer from './containers/SignInContainer'
import { authenticate } from './hoc/authenticate'
import Home from './components/Home'
// import AffordabilityContainer from './containers/AffordabilityContainer'
// import RentalIncomeContainer from './containers/RentalIncomeContainer'
// import About from './components/About'
// import NotFound from './components/NotFound'
//import AccountContainer from './containers/AccountContainer'
// import FormZ from './components/FormZ'


import { reducers } from './reducers'
import { state as initialState } from './api/state'

import { createLogger } from 'redux-logger'




const store = createStore(
  combineReducers( Object.assign({}, reducers, {
    routing: routerReducer
  })),
  //combineReducers( reducers ),
  initialState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    createLogger(), // neat middleware that logs actions
    routerMiddleware(browserHistory)
  )
)

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
 <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer} >
        <IndexRoute component={Home} />
        <Route path="/auth" component={authenticate(ExampleContainer)} />
      </Route>
      <Route path="/signin" component={SignInContainer} />
      
      {/*
      <Route path="/" component={AppContainer}>
        <Route path="signin" component={SignInContainer} />
        <IndexRoute component={AffordabilityContainer} />
          <Route path="affordability" component={AffordabilityContainer}/>
          <Route path="cashflow" component={RentalIncomeContainer}/>
          <Route path="about" component={About} />
          <Route path="signin" component={SignInContainer} />
          <Route path="z" component={FormZ} />
          <Route path='*' component={NotFound} />
      </Route>
    */}
    </Router>
  </Provider>, 
  document.getElementById('app')

)



// import {
//   getCurrentUser,
//   getUserToken,
//   signUp, 
//   signIn
// } from './api/aws'

// signUp("me@home.com", "Qweasd123!")
//   .then( user => alert(user) )
//   .catch( err => alert(err))

// signIn("me@home.com", "Qweasd123!")
//   .then( token => {
//     console.log(token)
//   })
//   .then( () => {
//     console.log("current user: ", getCurrentUser())
//     console.log("token: ", getUserToken(getCurrentUser()))    
//   })
//   .catch( err => console.log(err))
