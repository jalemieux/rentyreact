//RentalIncomeForm.js
//AffordabilityInput.js
import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form';

import numeral  from 'numeral'

import { styles } from '../styles/'

import { renderFormGroupWAddon, dollarAddonDecorator, percentAddonDecorator, nullDecorator } from './Helpers'


import { rentalIncomeToggleAdvancedParams } from '../actions'

const toggleAdvancedParameters = (dispatch) => (e) => {
  e.preventDefault();
  dispatch(rentalIncomeToggleAdvancedParams())
}


const RentalIncomeForm = (props) => {
    const { error, handleSubmit, pristine, submitting, onSubmit, showAdvancedParameters } = props    
    return (
        <div className="panel panel-primary">{/* Monthly Cost */}
          <div className="panel-heading">
            <h2 className="panel-title">Numbers</h2>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field component={renderFormGroupWAddon} name="purchasePrice" label="Purchase Price" type="numeric" 
                addonDecorator={dollarAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="interestRate" label="Interest Rate" type="numeric" 
                addonDecorator={percentAddonDecorator} />

              <Field component={renderFormGroupWAddon} name="monthlyRent" label="Rent (/month)" type="numeric" 
                addonDecorator={dollarAddonDecorator} />

            <hr />
            <a href="#" onClick={ toggleAdvancedParameters(props.dispatch) }><h5 className="panel-tittle">Advanced Parameters<small> <span className="glyphicon glyphicon-chevron-down"></span></small></h5></a>
              <div style={ showAdvancedParameters ? styles.visible: styles.hidden} >
                <Field component={renderFormGroupWAddon} name="cashDownRate" label="Cash Down Rate" type="numeric" 
                            addonDecorator={percentAddonDecorator} />                
                <Field component={renderFormGroupWAddon} name="mortgageLength" label="Mortgage Length (in years)" type="numeric" 
                            addonDecorator={nullDecorator} />                
                <Field component={renderFormGroupWAddon} name="occupancyRate" label="Occupancy Rate (/year)" type="numeric" 
                            addonDecorator={percentAddonDecorator} />
                <Field component={renderFormGroupWAddon} name="operatingExpensesRate" label="Operating Expenses Rate (/year)" type="numeric" 
                        addonDecorator={percentAddonDecorator} />
                <Field component={renderFormGroupWAddon} name="hoaFees" label="HOA Fees (/month)" type="numeric" 
                            addonDecorator={dollarAddonDecorator} />                
                <Field component={renderFormGroupWAddon} name="insuranceCost" label="Insurance Cost (/year)" type="numeric" 
                            addonDecorator={dollarAddonDecorator} />                
                <Field component={renderFormGroupWAddon} name="depreciationRate" label="Depreciation Rate (/year)" type="numeric" 
                            addonDecorator={percentAddonDecorator} /> 
                <Field component={renderFormGroupWAddon} name="propertyTaxRate" label="Property Tax Rate (/year)" type="numeric" 
                            addonDecorator={percentAddonDecorator} /> 
                <Field component={renderFormGroupWAddon} name="taxBracket" label="Tax Bracket" type="numeric" 
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
  form: 'rentalIncomeForm' // a unique name for this form
})(RentalIncomeForm);
