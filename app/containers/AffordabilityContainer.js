//AffordabilityContainer.js

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ClosingRequirements from '../components/ClosingRequirements'
import MonthlyCost from '../components/MonthlyCost'
import AffordabilityForm from '../components/AffordabilityForm'
import { affordabilityNewInput, affordabilityToggleAdvancedParams } from '../actions'
import { change, form } from 'redux-form'
import { validateNotNegative, validate } from './validation'


const affordabilityFormInitialValues = {
  //purchasePrice: 300000,
  rehabAmount: 0,
  mortgageLength: 30,
  cashDownRate: 20,
  interestRate: 4.1,
  //monthlyPretaxIncome: 0,
  //monthlyDebtPayment: 0,
  //cashInBank: 120000,
  propTaxRate: 1.125,
  insurance: 600,
  incomeTaxBracket: 33,
  stdDebtRatio: 43.5,
  closingCostRate: 0.9,
  hoa: 0

}


const validateAndSubmit = (dispatch) => (values) => {
  validateNotNegative(values.purchasePrice, "purchasePrice", "purchase price")
  validate(values.mortgageLength, "mortgageLength", ((value) => value > 0 && value <= 100), "mortgage lenght should be between 0 and 100")
  validate(values.cashDownRate, "cashDownRate", ((value) => value > 0 && value <= 100), "cashdown rate should be between 0 and 100")
  validate(values.interestRate, "interestRate", ((value) => value > 0 && value <= 100), "interest rate should be between 0 and 100")
  validateNotNegative(values.appraisalPrice, "appraisalPrice", "appraisal price")
  validateNotNegative(values.monthlyPretaxIncome, "monthlyPretaxIncome", "monthly pretax income")
  validateNotNegative(values.monthlyDebtPayment, "monthlyDebtPayment", "monthly debt payment")
  validateNotNegative(values.cashInBank, "cashInBank", "cash in bank") 

  
  dispatch(affordabilityNewInput(values))
}


const AffordabilityContainer = ( { affordability, showAdvancedParameters, onSubmit } ) => {
	return(
      <div>
        <div className="page-header">
          <h2>Affordability <small> can you afford this property?</small></h2>
        </div>
        
        <div className="col-xs-12 col-sm-6 col-md-4">
          <AffordabilityForm
            initialValues={affordabilityFormInitialValues}
            showAdvancedParameters={showAdvancedParameters}
            onSubmit={onSubmit}
            />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8">
  		    <div id="affordabilityMatrix" className="row">
            <div className="col-lg-12">
              <ClosingRequirements affordability={affordability} />
            </div>
            <div className="col-lg-12">
              <MonthlyCost affordability={affordability} />
            </div>
            <div className="col-lg-12">
            </div>
          </div>
        </div>  
      </div>
		
	)
}


const mapStateToProps = (state) => {
	return {
  		affordability: state.affordability,
      showAdvancedParameters: state.affordability.showAdvancedParameters
  	}
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: validateAndSubmit(dispatch),
  // changeFormFieldValue:  (field, value) => {
  //     dispatch(change(form, field, value))
  // }
})

//const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AffordabilityContainer)



