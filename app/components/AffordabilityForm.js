//AffordabilityInput.js
import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';

import numeral  from 'numeral'

import { renderFormGroupWAddon, dollarAddonDecorator, percentAddonDecorator, nullDecorator } from './Helpers'

import { styles } from '../styles/'


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

const AffordabilityForm = ( { error, handleSubmit, pristine, submitting, onSubmit, handleToggleAdvancedParameters, showAdvancedParameters }) => {
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



            <hr />
            <h3><small>Current Income, Debts, and Assets</small></h3>

              <Field component={renderFormGroupWAddon} name="monthlyPretaxIncome" label="Monthly Pretax Income" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
              
              <Field component={renderFormGroupWAddon} name="monthlyDebtPayment" label="Monthly Debt" type="numeric" 
                addonDecorator={dollarAddonDecorator} /> 
           
              <Field component={renderFormGroupWAddon} name="cashInBank" label="Cash" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
           
           <a href="#" onClick={ handleToggleAdvancedParameters }><h5 className="panel-tittle">Advanced Parameters<small> <span className="glyphicon glyphicon-chevron-down"></span></small></h5></a>
           <div style={ showAdvancedParameters ? styles.visible: styles.hidden} >
              <Field component={renderFormGroupWAddon} name="appraisalPrice" label="Bank Appraisal" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="propTaxRate" label="Property Tax Rate (/year)" type="numeric" 
                addonDecorator={percentAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="insurance" label="Insurance Prenium (/year)" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="incomeTaxBracket" label="Income Tax Bracket" type="numeric" 
                addonDecorator={percentAddonDecorator} />    
           </div>
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
