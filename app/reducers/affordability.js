//affordability.js

import { AFFORDABILITY_NEW_INPUT, AFFORDABILITY_TOGGLE_ADVANCED_PARAMS } from '../actions'
import { getAffordabilityNumbers } from '../api'

export const affordability = (state = [], action) => {
	
	switch(action.type){
		case AFFORDABILITY_NEW_INPUT:
			return Object.assign({}, state, { data: getAffordabilityNumbers(action.input) })
		case AFFORDABILITY_TOGGLE_ADVANCED_PARAMS:
			return Object.assign({}, state, { showAdvancedParameters: state.showAdvancedParameters == true ? false : true  })		

	}
	return state;

}


