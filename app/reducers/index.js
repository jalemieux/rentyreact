//index.js
import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import monthly from './monthly'
import dummy from './dummy'
//import affordability from './affordability'



const reducer = combineReducers({
  monthly,
  form: reduxFormReducer,
  //dummy,
})

export default reducer




