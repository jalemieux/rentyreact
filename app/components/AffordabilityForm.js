//AffordabilityInput.js
import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';

import numeral  from 'numeral'

import { styles } from '../styles/'

const formGroupClasses = ( error ) => {
  if (error) {
      return "form-group has-error"
  }else{
      return "form-group"
  }
}

const errorMessage = (error) => (
   <span class="help-block">{error}</span>
)

const renderFormGroupWAddon = ( { input, label, name, type, placeholder, addonDecorator, meta: { touched, error }}) => (
  <div className={formGroupClasses(error)}>
    <label htmlFor={name} className="control-label">{label}</label>
    <div className="input-group">
      {addonDecorator(<input {...input} type={type} className="form-control" placeholder={placeholder} />)}
    </div>
    {error && errorMessage(error) }
  </div>
)

const nullDecorator = ( inputField ) => ( inputField )

const dollarAddonDecorator = ( inputField ) => (
  <div className="input-group">
    <div className="input-group-addon">$</div>
    {inputField}
  </div>
)

const percentAddonDecorator = ( inputField ) => (
  <div className="input-group">
    {inputField}
    <div className="input-group-addon">%</div>
  </div>
)

/**
form values:
------------
purchasePrice
rehabAmount
mortgageLength
cashDownRate
interestRate
appraisalPrice
monthlyPretaxIncome
monthlyDebt
cashInBank
**/

const AffordabilityForm = (props) => {
    const { error, handleSubmit, pristine, submitting, onSubmit } = props
    return (
        <div className="panel panel-primary">{/* Monthly Cost */}
          <div className="panel-heading">
            <h2 className="panel-title">Property Details</h2>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field component={renderFormGroupWAddon} name="purchasePrice" label="Purchase Price" type="numeric" 
                addonDecorator={dollarAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="rehabAmount" label="Rehab Amount" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
            <hr/>
            <h3><small>Mortgage Details</small></h3>
              <Field component={renderFormGroupWAddon} name="mortgageLength" label="Mortage Length (Years)" type="numeric"
                addonDecorator={nullDecorator} />

              <Field component={renderFormGroupWAddon} name="cashDownRate" label="Cash Down Rate" type="numeric" 
                addonDecorator={percentAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="interestRate" label="Interest Rate" type="numeric" 
                addonDecorator={percentAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="appraisalPrice" label="Bank Appraisal" type="numeric" 
                addonDecorator={dollarAddonDecorator} />

            <hr />
            <h3><small>Current Income, Debts, and Assets</small></h3>

              <Field component={renderFormGroupWAddon} name="monthlyPretaxIncome" label="Monthly Pretax Income" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
              
              <Field component={renderFormGroupWAddon} name="monthlyDebtPayment" label="Monthly Debt" type="numeric" 
                addonDecorator={dollarAddonDecorator} /> 
           
              <Field component={renderFormGroupWAddon} name="cashInBank" label="Cash" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
           
           { error && <div className="alert alert-danger" role="alert">{error}</div>}

              <button type="submit" disabled={submitting} className="pull-right btn btn-primary">submit</button>
            </form>
          </div>
        </div>
    )
  
}

// Decorate the form component
export default reduxForm({
  form: 'affordabilityForm' // a unique name for this form
})(AffordabilityForm);
