//affordability.js

import { AFFORDABILITY_NEW_INPUT } from '../actions'
import { getAffordabilityNumbers } from '../api'

export const affordability = (state = [], action) => {
	
	switch(action.type){
		case AFFORDABILITY_NEW_INPUT:
			console.log("in affordability reducer: ", state, action)
			return Object.assign({}, state, action.input, getAffordabilityNumbers(action.input))

	}
	return state;

}


