//ClosingRequirements.js

import React, { PropTypes } from 'react'
import numeral  from 'numeral'
import { styles } from '../styles/'

const requirementMet = ( condition, success, failure ) => {
	if(condition){
		return (<div className="alert alert-success alert-dismissible" role="alert">{success}</div>)
	}
	return (<div className="alert alert-danger alert-dismissible" role="alert">{failure}</div>)
}

const ClosingRequirements = ( props ) => {
	let { closingRequirements } = props
	return(
  	<div className="panel panel-default">{/* Closing Requirements */}
      <div className="panel-heading">
        <h4 className="panel-title">Closing Requirements</h4>
      </div>
      <div className="panel-body">
        <table className="table table-hover">
          <thead>
              <tr>
                <th>Cash Before Closing</th>
                <th>{numeral(closingRequirements.cashInBank).format('($0,0.00)')}</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cash Down</td>
              <td>{numeral(closingRequirements.cashDownCost).format('($0,0.00)')}</td>
            </tr>
            <tr>
              <td>Rehab Cost</td>
              <td>{numeral(closingRequirements.rehabAmount).format('($0,0.00)')}</td>
            </tr>
            <tr style={styles.borderTop}>
              <td>Cash Before Reserve</td>
              <td>{numeral(closingRequirements.cashBeforeReserve).format('($0,0.00)')}</td>
            </tr>
          </tbody>
        </table>
        {requirementMet( 
        	() => closingRequirements.cashBeforeReserve  >= 0,
        	"You meet the cash requirement",
        	"You are short on cash" )}
        <table className="table table-hover">
          <thead>
              <tr>
                <th>Cash Before Reserve</th>
                <th>{numeral(closingRequirements.cashBeforeReserve).format('($0,0.00)')}</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reserve Requirements</td>
              <td>{numeral(closingRequirements.reserveRequirementCost).format('($0,0.00)')}</td>
            </tr>
            <tr style={styles.borderTop}>
              <td>Balance After Reserve</td>
              <td>{numeral(closingRequirements.cashAfterReserve).format('($0,0.00)')}</td>
            </tr>
          </tbody>
        </table>
        {requirementMet(
        	() => closingRequirements.cashAfterReserve  >= 0,
        	"You meet the reserve requirements",
        	"You do not meet the reserve requirements")}
        <table className="table table-hover">
          <thead>
              <tr>
                <th>Monthly Income</th>
                <th>{numeral(closingRequirements.monthlyPretaxIncome).format('($0,0.00)')}</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Debts</td>
              <td>{numeral(closingRequirements.monthlyDebtPayment).format('($0,0.00)')}</td>
            </tr>
            <tr>
              <td>Monthly PIIT</td>
              <td>{numeral(closingRequirements.monthlyPIIT).format('($0,0.00)')}</td>
            </tr>
            <tr style={styles.borderTop}>
              <td>Monthly total debt</td>
              <td>{numeral(closingRequirements.monthlyDebtsCost).format('($0,0.00)')}</td>
            </tr>
            <tr style={styles.borderTop}>
              <td>Debt Ratio</td>
              <td>{numeral(closingRequirements.debtRatio).format('(%0.0)')}</td>
            </tr>
          </tbody>
        </table>
        {requirementMet(
        	() => closingRequirements.debtRatio < closingRequirements.stdDebtRatio,
        	`You meet the debt ratio requirement.`,
        	"You do not meet the debt ratio.")}
      </div>
    </div>
	)}


ClosingRequirements.propTypes = {
	closingRequirements: PropTypes.shape({
	  	cashInBank: PropTypes.isRequired,
	  	cashDownCost: PropTypes.isRequired,
	  	rehabAmount: PropTypes.isRequired,
	  	cashBeforeReserve: PropTypes.isRequired,
	  	reserveRequirementCost: PropTypes.isRequired,
	  	cashAfterReserve: PropTypes.isRequired,
	  	monthlyPretaxIncome: PropTypes.isRequired,
	  	monthlyDebtPayment: PropTypes.number.isRequired,
	  	monthlyPIIT: PropTypes.isRequired,
	  	debtRatio: PropTypes.isRequired,
	  	stdDebtRatio: PropTypes.isRequired
	}).isRequired
}

export default ClosingRequirements