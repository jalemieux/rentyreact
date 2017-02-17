//monthly.js

import { state as initialState } from '../api/state'
import { NEW_INPUT } from '../actions/'
import amortize from 'amortize'

const monthly = (state = initialState.monthly, action) => {
	
	switch(action.type){
		case NEW_INPUT: 
            console.log("montly reducer, old state is: ", state)
			var newState = Object.assign({}, state, 
				getMonthlyMortgageData(action.input.purchasePrice,
					action.input.interestRate, 
					action.input.mortgageLength, 
					action.input.cashDownRate))
			console.log("montly reducer, new state is: ", newState)
			return newState
		default:
			return state;
	}
}

export default monthly


const getMonthlyMortgageData = (purchasePrice, interestRate, mortgageLength, cashDownRate) => {
	var oneMonthDetails = amortize({
      amount: purchasePrice * ( 1 - cashDownRate/100 ),
      rate: interestRate,
      totalTerm: mortgageLength * 12,
      amortizeTerm: 1,
    });
    var propTaxRate = 0.0125/12;
    var monthlyInsurance = 800/12 * -1;
    var incomeTaxBracket = 0.33;

    var monthlyInterest = oneMonthDetails.interest * -1;
    var monthlyPropTax = purchasePrice * propTaxRate / 12 * -1;
    var monthlyPrincipal = oneMonthDetails.principal * -1;
    var monthlyPIIT = monthlyInterest + monthlyPropTax + monthlyPrincipal + monthlyInsurance;
    var monthlyTaxSavings = (monthlyInterest + monthlyPropTax) * incomeTaxBracket
    var monthlyCostAfterTax = monthlyPIIT - monthlyTaxSavings;
    var monthlyPayment = monthlyInterest + monthlyPrincipal;

	return {
		monthlyInterest,
    	monthlyPropTax,
    	monthlyPrincipal,
    	monthlyPIIT,
    	monthlyTaxSavings,
    	monthlyCostAfterTax,
    	monthlyPayment, 
        monthlyInsurance
	}
}