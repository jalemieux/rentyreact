//AffordabilityFormContainer.js

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { newInput } from '../actions'
import AffordabilityForm from '../components/AffordabilityForm'
import { SubmissionError } from 'redux-form'

import { validateNotNegative, validate } from './validation'

const formInitialValues = {
  purchasePrice: 300000,
  rehabAmount: 15000,
  mortgageLength: 30,
  cashDownRate: 25,
  interestRate: 4.1,
  appraisalPrice: 300000,
  monthlyPretaxIncome: 10000,
  monthlyDebtPayment: 600,
  cashInBank: 120000
}

const AffordabilityFormContainer = ( { onSubmit } ) => (
      <AffordabilityForm initialValues={formInitialValues} onSubmit={onSubmit} />
)



const validateAndSubmit = (dispatch) => (values) => {
  validateNotNegative(values.purchasePrice, "purchasePrice", "purchase price")
  validate(values.mortgageLength, "mortgageLength", ((value) => value > 0 && value <= 100), "mortgage lenght should be between 0 and 100")
  validate(values.cashDownRate, "cashDownRate", ((value) => value > 0 && value <= 100), "cashdown rate should be between 0 and 100")
  validate(values.interestRate, "interestRate", ((value) => value > 0 && value <= 100), "interest rate should be between 0 and 100")
  validateNotNegative(values.appraisalPrice, "appraisalPrice", "appraisal price")
  validateNotNegative(values.monthlyPretaxIncome, "monthlyPretaxIncome", "monthly pretax income")
  validateNotNegative(values.monthlyDebtPayment, "monthlyDebtPayment", "monthly debt payment")
  validateNotNegative(values.cashInBank, "cashInBank", "cash in bank") 

  
  dispatch(newInput(values))
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: validateAndSubmit(dispatch), 

  }
}



export default connect(
	null,
	mapDispatchToProps,
)
(AffordabilityFormContainer)