//MonthlyCost.js

import React, { PropTypes } from 'react'
import numeral  from 'numeral'
import { styles } from '../styles/'


const MonthlyCost = ( { affordability } ) => {
	const { data, pristine } = affordability
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
	          <td>{numeral(data.monthlyInterest).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Principal</td>
	          <td>{numeral(data.monthlyPrincipal).format('($0,0.00)')}</td>
	        </tr>
	        <tr style={styles.borderTop}>
	          <td><strong>Monthly Mortgage Payment</strong></td>
	          <td><strong>{numeral(data.monthlyPayment).format('($0,0.00)')}</strong></td>
	        </tr>
	      </tbody>
	    </table>
	    <table className="table table-hover">
	      <tbody>
	        <tr>
	          <td>Monthly Interests</td>
	          <td>{numeral(data.monthlyInterest).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Taxes</td>
	          <td>{numeral(data.monthlyPropTax).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Insurance</td>
	          <td>{numeral(data.monthlyInsurance).format('($0,0.00)')}</td>
	        </tr>
	        <tr>
	          <td>Monthly Principal</td>
	          <td>{numeral(data.monthlyPrincipal).format('($0,0.00)')}</td>
	        </tr>
	        <tr style={styles.borderTop}>
	          <td><strong>Monthly Pretax Total</strong></td>
	          <td><strong>{numeral(data.monthlyPIIT).format('($0,0.00)')}</strong></td>
	        </tr>
	      </tbody>
	    </table>
	    <table className="table table-hover">
	      <thead>
	        <tr>
	          <th>Monthly Pretax Cost</th>
	          <th>{numeral(data.monthlyPIIT).format('($0,0.00)')}</th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr>
	          <td>Tax Savings</td>
	          <td>{numeral(data.monthlyTaxSavings).format('($0,0.00)')}</td>
	        </tr>
	        <tr style={styles.borderTop}>
	          <td>Total</td>
	          <td>{numeral(data.monthlyCostAfterTax).format('($0,0.00)')}</td>
	        </tr>
	      </tbody>
	    </table>
	  </div>
	</div>
	)}


MonthlyCost.propTypes = {
	affordability: PropTypes.shape({
		data: PropTypes.shape({
		  	monthlyInterest: PropTypes.isRequired,
		  	monthlyPropTax: PropTypes.isRequired,
		  	monthlyPrincipal: PropTypes.isRequired,
		  	monthlyInsurance: PropTypes.isRequired,
		  	monthlyPIIT: PropTypes.isRequired,
		  	montlhyTaxSavings: PropTypes.isRequired,
		  	monthlyCostAfterTax: PropTypes.isRequired,
		  	monthlyPayment: PropTypes.isRequired
		}),
		pristine: PropTypes.isRequired
	}).isRequired
}

export default MonthlyCost