//MonthlyCost.js

import React, { PropTypes } from 'react'
import numeral  from 'numeral'
import { styles } from '../styles/MonthlyCost'


const MonthlyCost = ( props ) => {
	let { monthly } = props
	console.log("in monthly cost form : ", monthly)
	return(
  	<div className="panel panel-default">{/* Monthly Cost */}
	  <div className="panel-heading">
	    <h4 className="panel-title">Monthly Cost</h4>
	  </div>
	  <div className="panel-body">
	  	<table className="table table-hover">
	      <tbody>
	        <tr>
	          <td>Monthly Insurance</td>
	          <td>{numeral(monthly.monthlyInterest).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Principal</td>
	          <td>{numeral(monthly.monthlyPrincipal).format('($0,0.00)')}</td>
	        </tr>
	        <tr style={styles.borderTop}>
	          <td><strong>Monthly Mortgage Payment</strong></td>
	          <td><strong>{numeral(monthly.monthlyPayment).format('($0,0.00)')}</strong></td>
	        </tr>
	      </tbody>
	    </table>
	    <table className="table table-hover">
	      <tbody>
	        <tr>
	          <td>Monthly Interests</td>
	          <td>{numeral(monthly.monthlyInterest).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Taxes</td>
	          <td>{numeral(monthly.monthlyPropTax).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Insurance</td>
	          <td>{numeral(monthly.monthlyInsurance).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Principal</td>
	          <td>{numeral(monthly.monthlyPrincipal).format('($0,0.00)')}</td>
	        </tr>
	        <tr style={styles.borderTop}>
	          <td><strong>Monthly Pretax Total</strong></td>
	          <td><strong>{numeral(monthly.monthlyPIIT).format('($0,0.00)')}</strong></td>
	        </tr>
	      </tbody>
	    </table>
	    <table className="table table-hover">
	      <thead>
	        <tr>
	          <th>Monthly Pretax Cost</th>
	          <th>{numeral(monthly.monthlyPIIT).format('($0,0.00)')}</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr>
	          <td>Tax Savings</td>
	          <td>{numeral(monthly.monthlyTaxSavings).format('($0,0.00)')}</td>
	        </tr>
	        <tr style={styles.borderTop}>
	          <td>Total</td>
	          <td>{numeral(monthly.monthlyCostAfterTax).format('($0,0.00)')}</td>
	        </tr>
	      </tbody>
	    </table>
	  </div>
	</div>
	)}


MonthlyCost.propTypes = {
	monthly: PropTypes.shape({
	  	monthlyInterest: PropTypes.number.isRequired,
	  	monthlyPropTax: PropTypes.number.isRequired,
	  	monthlyPrincipal: PropTypes.number.isRequired,
	  	monthlyInsurance: PropTypes.number.isRequired,
	  	monthlyPIIT: PropTypes.number.isRequired,
	  	montlhyTaxSavings: PropTypes.number.isRequired,
	  	monthlyCostAfterTax: PropTypes.number.isRequired,
	  	monthlyPayment: PropTypes.number.isRequired
	}).isRequired
}

export default MonthlyCost