//CashflowContainer.js

import React from 'react' 
import { connect } from 'react-redux'

import RentalIncomeCashflow from '../components/RentalIncomeCashflow'
import RentalIncomeForm from '../components/RentalIncomeForm'

import { validateNotNegative, validate } from './validation'

import { rentalIncomeToggleAdvancedParams, rentalIncomeNewInput } from '../actions'

const rentalIncomeFormInitialValues = {
  purchasePrice: 350000,
  interestRate: 4.2,
  monthlyRent: 1200,
  occupancyRate: 85,
  hoaFees: 0,
  taxBracket: 33,
  cashDownRate: 25,
  insuranceCost: 500,
  depreciationRate: 50,
  operatingExpensesRate: 5,
  mortgageLength: 30,
  buildingValue: 0,
  propertyTaxRate: 1.25

}

const RentalIncomeContainer = ( { rentalIncome, showAdvancedParameters, handleToggleAdvancedParameters, onSubmit } ) => (
		<div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <RentalIncomeForm
            initialValues={rentalIncomeFormInitialValues} 
            showAdvancedParameters={showAdvancedParameters}
            handleToggleAdvancedParameters={handleToggleAdvancedParameters}
            onSubmit={onSubmit} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
  		    <div id="affordabilityMatrix" className="row">
            <div className="col-lg-12">
              <RentalIncomeCashflow rentalIncome={rentalIncome} />
            </div>
          </div>
        </div>  
      </div>
	)


const toggleAdvancedParameters = (dispatch) => () => {
  dispatch(rentalIncomeToggleAdvancedParams())
}

const validateAndSubmit = (dispatch) => (values) => {
  console.log("validateAndSubmit: ", values)
  validateNotNegative(values.purchasePrice, "purchasePrice", "purchase price")
  validate(values.interestRate, "interestRate", ((value) => value > 0 && value <= 100), "interest rate should be between 0 and 100")
  validateNotNegative(values.monthlyRent, "monthlyRent", "monthly rent")

  validate(values.occupancyRate, "occupancyRate", ((value) => value > 0 && value <= 100), "occupancyRate should be between 0 and 100")
  validate(values.operatingExpensesRate, "operatingExpensesRate", ((value) => value > 0 && value <= 100), "operating expenses rate should be between 0 and 100")
  validateNotNegative(values.hoaFees, "hoaFees", "hoa fees")
  validate(values.taxBracket, "taxBracket", ((value) => value > 0 && value <= 100), "tax bracket should be between 0 and 100")
  validate(values.cashDownRate, "cashDownRate", ((value) => value > 0 && value <= 100), "cash down rate should be between 0 and 100")
  validateNotNegative(values.insuranceCost, "insuranceCost", "insurance cost")
  validate(values.depreciationRate, "depreciationRate", ((value) => value > 0 && value <= 100), "depreciation rate should be between 0 and 100")
  
  dispatch(rentalIncomeNewInput(values))
}

const mapStateToProps = (state) => {
	return {
  		rentalIncome: state.rentalIncome,
      showAdvancedParameters: state.rentalIncome.showAdvancedParameters
  	}
}

const mapDispatchToProps = (dispatch) => ({
  handleToggleAdvancedParameters: toggleAdvancedParameters(dispatch),   
  onSubmit: validateAndSubmit(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentalIncomeContainer)

