
export const state1 = {
	affordability: {
		data: {
			monthlyInterest: 0,
		    monthlyPropTax: 0,
			monthlyPrincipal: 0,
			monthlyInsurance: 0,
			monthlyPIIT: 0,
			montlhyTaxSavings: 0,
			monthlyCostAfterTax: 0,
			monthlyPayment:0,
			stdDebtRatio: 0.435,
			cashInBank: 0, 
			cashDownCost: 0, 
			rehabCost: 0,
		  	cashBeforeReserve: 0, 
		  	cashAfterReserve: 0,
		  	reserveRequirementCost: 0, 
		  	monthlyPretaxIncome: 0,
		  	cashDownRate: 4, 
		  	monthlyDebtPayment: 0, 
		  	monthlyPIITCost: 0, 
		  	debtRatio: 0,
		  	purchasePrice: 0,
		  	propTaxRate: 0.0125,
		  	incomeTaxBracket: 0.33,
		  	showAdvancedParameters: false,
		 },		 
		 pristine: true
	},
	rentalIncome: {
		data: {
			showAdvancedParameters: false
		},
		pristine: true

	},
	user: {
		id: 'jalemieux@gmail.com',
		token: 'asdasdasdasdasdasdda'

	},
	formZ: {
		fetching: false, 
		data: null, 
		error: null,
		input: {
			email: ''
		}
	}, 
	signIn: {
		fetching: false, 
		data: null, 
		error: null,
		input: {
			userid: '',
			password: '',
		},
	}
}

export const state = {
	foo: "foo!",
	signIn: {
		fetching: false, 
		data: null, 
		error: null,
		input: {
			userid: '',
			password: '',
		},
	},
	signUp: {
		fetching: false, 
		data: null, 
		error: null,
		input: {
		},
	},
	confirmation: {
		fetching: false, 
		data: null, 
		error: null,
		input: {
		},
	},
	user: {
	},
}
