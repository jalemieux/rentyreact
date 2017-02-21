//index.js
import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import { dummy } from './dummy'
import { affordability } from './affordability'
import { rentalIncome } from './rentalIncome'


// const reducers = combineReducers({
//   affordability,	
//   form: reduxFormReducer,
//   dummy,
// })

const reducers = {
	affordability,
	form: reduxFormReducer,
	rentalIncome, 
}

export default reducers




