//AffordabilityInput.js
import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';

import numeral  from 'numeral'

import { styles } from '../styles/AffordabilityForm'

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

const AffordabilityForm = (props) => {
    const { error, handleSubmit, pristine, submitting, onSubmit } = props
    return (
      
        <div className="panel panel-default">{/* Monthly Cost */}
          <div className="panel-heading">
            <h4 className="panel-title">N3mbers</h4>
          </div>
          <div className="panel-body">
            <h2><small>Property Details</small></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field component={renderFormGroupWAddon} name="purchasePrice" label="Purchase Price" type="numeric" placeholder="530000" 
                addonDecorator={dollarAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="rehabAmount" label="Rehab Amount" type="numeric" placeholder="0" 
                addonDecorator={dollarAddonDecorator} />
            <hr/>
            <h2><small>Mortgage Details</small></h2>
              <Field component={renderFormGroupWAddon} name="mortgageLength" label="Mortage Length (Years)" type="numeric" placeholder="30" 
                addonDecorator={nullDecorator} />

              <Field component={renderFormGroupWAddon} name="cashDownRate" label="Cash Down Rate" type="numeric" placeholder="25" 
                addonDecorator={percentAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="interestRate" label="Interest Rate" type="numeric" placeholder="4" 
                addonDecorator={percentAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="appraisalPrice" label="Bank Appraisal" type="numeric" placeholder="530000" 
                addonDecorator={dollarAddonDecorator} />

            <hr />
            <h2><small>Current Income, Debts, and Assets</small></h2>

              <Field component={renderFormGroupWAddon} name="monthlyPretaxIncome" label="Monthly Pretax Income" type="numeric" placeholder="8000" 
                addonDecorator={percentAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="monthlyDebtPayments" label="Monthly Debt" type="numeric" placeholder="1200" 
                addonDecorator={percentAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="cashInBank" label="Cash" type="numeric" placeholder="20000" 
                addonDecorator={percentAddonDecorator} />
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
