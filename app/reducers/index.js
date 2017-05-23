//index.js
import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import { affordability } from './affordability'
import { rentalIncome } from './rentalIncome'
import { sessionReducer } from './sessionReducer'

//import { formZReducer } from './formZ'
import { signinReducer } from './signinReducer'
import { signupReducer } from './signupReducer'
import { confirmationReducer } from './confirmationReducer'

import { exampleReducer } from './exampleReducer'


export const reducers = {
  foo: exampleReducer,
  signIn: signinReducer,
  user: sessionReducer,
  signUp: signupReducer, 
  confirmation: confirmationReducer
}

// export const reducers = combineReducers({
//   foo: exampleReducer,
//   // affordability,
//   // form: reduxFormReducer,
//   // rentalIncome,
//  foo: exampleReducer,
//   // //formZ: formZReducer , 
//   signIn: signinReducer,
// })






