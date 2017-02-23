//index.js
export const AFFORDABILITY_NEW_INPUT = 'AFFORDABILITY_NEW_INPUT'
export const AFFORDABILITY_TOGGLE_ADVANCED_PARAMS = 'AFFORDABILITY_TOGGLE_ADVANCED_PARAMS'
export const affordabilityNewInput = (input) => {
	return { type: AFFORDABILITY_NEW_INPUT, input }
}

export const RENTAL_INCOME_TOGGLE_ADVANCED_PARAMS = 'RENTAL_INCOME_TOGGLE_ADVANCED_PARAMS'

export const rentalIncomeToggleAdvancedParams = ( ) => {
	return { type: RENTAL_INCOME_TOGGLE_ADVANCED_PARAMS, null }
}
export const affordabilityToggleAdvancedParams = () => {
	return { type : AFFORDABILITY_TOGGLE_ADVANCED_PARAMS, null }
}

export const RENTAL_INCOME_NEW_INPUT = 'RENTAL_INCOME_NEW_INPUT'

export const rentalIncomeNewInput = ( input ) => {
	return { type: RENTAL_INCOME_NEW_INPUT, input }
}