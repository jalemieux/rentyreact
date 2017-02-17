//monthly.js

import { NEW_NUMBERS } from '../actions'
import { state as initialState } from '../api/state'

const monthly = (state = initialState.monthly, action) => {
	switch(action){
		case NEW_NUMBERS:
			return getMonthlyMortgageData(action.input)
		default:
      return state
    }

}



const affordability = (state = initialState.affordability, action) => {
  console.log("in affordability reducer: ", state)
  switch(action){
    default:
      return state;
  }s
}

export default affordability



const getMonthlyMortgageData = input => {
	var oneMonthDetails = amortize({
      amount: input.purchasePrice - ( 1 - input.cashDownRate ),
      rate: input.interestRate,
      totalTerm: input.mortgageLength * 12,
      amortizeTerm: 1,
    });
    var propTaxRate = 0.0125/12;
    var monthlyInsurance = 800/12;
    var incomeTaxBracket = 0.33;

    var interest = oneMonthDetails.interest * -1;
    var propTax = input.purchasePrice * propTaxRate / 12 * -1;
    var principal = oneMonthDetails.principal * -1;
    var piit = interest + propTax + principal + monthlyInsurance;
    var taxSavings = (interest + propTax) * incomeTaxBracket
    var costAfterTax = piit - taxSavings;
    var monthlyMortgagePmt = interest + principal;

	return {
		interest,
    	propTax,
    	principal,
    	piit,
    	taxSavings,
    	costAfterTax,
    	monthlyMortgagePmt
	}
}