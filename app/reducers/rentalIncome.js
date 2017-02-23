//rentalIncome.js

import { RENTAL_INCOME_TOGGLE_ADVANCED_PARAMS, RENTAL_INCOME_NEW_INPUT } from '../actions'
import { getCashFlowStatement } from '../api'

export const rentalIncome = (state = [], action) => {
	
	switch(action.type){
		case RENTAL_INCOME_TOGGLE_ADVANCED_PARAMS:
			console.log("reducer toggle view...", state.showAdvancedParameters)
			return Object.assign({}, state, { showAdvancedParameters: state.showAdvancedParameters == true ? false : true  })
		case RENTAL_INCOME_NEW_INPUT:
			return Object.assign({}, state, { data: getCashFlowStatement(action.input)})
			//return Object.assign({}, state, getCashFlowStatement(action.input))
	}
	return state;

}


