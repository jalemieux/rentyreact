//AffordabilityInput.js
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, change, formValueSelector } from 'redux-form';

import numeral  from 'numeral'

import { renderFormGroupWAddon, dollarAddonDecorator, percentAddonDecorator, nullDecorator } from './Helpers'

import { styles } from '../styles/'

import { affordabilityToggleAdvancedParams } from '../actions'

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



const changeCashDownRate = (dispatch, form, purchasePrice) => (e) => {
  console.log(purchasePrice)
  if(purchasePrice != undefined ){
    let rate = (parseFloat(e.currentTarget.value) / purchasePrice * 100).toFixed(0)
    dispatch(change(form, 'cashDownRate', rate))
  }
}
const changeCashDownAmount = (dispatch, form, purchasePrice) => (e) => {
  if(purchasePrice != undefined ){
    let amount = (parseFloat(e.currentTarget.value)/100 * purchasePrice ).toFixed(0)
    dispatch(change(form, 'cashDownAmount', amount))
  }
}

const purchasePriceChange = (props) => (e) => {
 let { dispatch, form, cashDownRate } = props 
 let purchasePrice = parseFloat(e.currentTarget.value).toFixed(0)
 let cashDownAmount = (cashDownRate / 100 * purchasePrice).toFixed(0)
 dispatch(change(form, 'appraisalPrice', purchasePrice))
 dispatch(change(form, 'cashDownAmount', cashDownAmount)) 
}

const toggleAdvancedParameters = (dispatch) => (e) => {
  e.preventDefault();
  dispatch(affordabilityToggleAdvancedParams())
}

var AffordabilityForm = ( props ) => {
    const { error, handleSubmit, pristine, submitting, onSubmit, showAdvancedParameters, 
      purchasePrice,
      cashDownAmount,
      cashDownRate,
      appraisalPrice } = props

    return (
        <div className="panel panel-primary">{/* Monthly Cost */}
          <div className="panel-heading">
            <h2 className="panel-title">Numbers</h2>
          </div>
          <div className="panel-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field onChange={ purchasePriceChange(props) } component={renderFormGroupWAddon} name="purchasePrice" label="Purchase Price" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
              
            <hr/>
            <h3><small>Mortgage Details</small></h3>

              <Field component={renderFormGroupWAddon} name="mortgageLength" label="Mortage Length (Years)" type="numeric"
                addonDecorator={nullDecorator} />

                <Field onChange={ changeCashDownAmount(props.dispatch, props.form, purchasePrice) }
                  component={renderFormGroupWAddon} name="cashDownRate" label="Cash Down Rate" type="numeric" 
                  addonDecorator={percentAddonDecorator} />
                <Field onChange={ changeCashDownRate(props.dispatch, props.form, purchasePrice) }
                  component={renderFormGroupWAddon} name="cashDownAmount" label="Cash Down Amount" type="numeric" 
                  addonDecorator={dollarAddonDecorator} />

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
           
           <a href="#" onClick={ toggleAdvancedParameters(props.dispatch) }><h5 className="panel-tittle">Advanced Parameters<small> <span className="glyphicon glyphicon-chevron-down"></span></small></h5></a>
           <div style={ showAdvancedParameters ? styles.visible: styles.hidden} >
              <Field component={renderFormGroupWAddon} name="appraisalPrice" label="Bank Appraisal" type="numeric" addonDecorator={dollarAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="rehabAmount" label="Rehab Amount" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="propTaxRate" label="Property Tax Rate (/year)" type="numeric" 
                addonDecorator={percentAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="insurance" label="Insurance Prenium (/year)" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
                <Field component={renderFormGroupWAddon} name="hoa" label="Home Owner Assoc. Fees (/year)" type="numeric" 
                addonDecorator={dollarAddonDecorator} />
              <Field component={renderFormGroupWAddon} name="incomeTaxBracket" label="Income Tax Bracket" type="numeric" 
                addonDecorator={percentAddonDecorator} />    
              <Field component={renderFormGroupWAddon} name="stdDebtRatio" label="Standard Debt Ratio" type="numeric" 
                addonDecorator={percentAddonDecorator} />    
              <Field component={renderFormGroupWAddon} name="closingCostRate" label="Closing Cost Rate" type="numeric" 
                addonDecorator={percentAddonDecorator} />
           </div>
           { error && <div className="alert alert-danger" role="alert">{error}</div>}
              <button type="submit" disabled={submitting} className="pull-right btn btn-primary">submit</button>
            </form>
          </div>
        </div>
    )
  
}


AffordabilityForm = reduxForm({
    form: "affordabilityForm", 
  })(AffordabilityForm)

const selector = formValueSelector("affordabilityForm")


AffordabilityForm = connect(
  state => ({
    cashDownRate: selector(state, 'cashDownRate'),
    cashDownAmount: selector(state, 'cashDownAmount'),
    purchasePrice: selector(state, 'purchasePrice')
}))(AffordabilityForm)

export default AffordabilityForm
