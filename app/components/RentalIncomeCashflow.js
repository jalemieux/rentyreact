//RentalIncomeCashflow.js
import React from 'react'
import numeral  from 'numeral'
import { styles } from '../styles/'

const RentalIncomeCashflow = ( { rentalIncome } ) => {
  
  const { data, pristine } = rentalIncome
	return (
  <div className="panel panel-default">{/* cashflow */}
    <div className="panel-heading">
      <h4 className="panel-title">Cashflow Statement</h4>
    </div>
    <div className="panel-body">
  		<table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th>yearly</th>
            <th>monthly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rental Income</td>
            <td>{numeral(data.rentalIncome).format('($0,0.00)')}</td>
            <td>{numeral(data.monthlyRentalIncome).format('($0,0.00)')}</td>
          </tr>
    
          <tr>
            <td>Vacancy Loss @ {numeral(data.occupancyRate).format('0%')} occupancy rate </td>
            <td>{numeral(data.vacancyLoss).format('($0,0.00)')}</td>
            <td>{numeral(data.monthlyVacancyLoss).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td>Operating Expenses @ {numeral(data.operatingExpensesRate).format('0%')} of rent + HOA</td>
            <td>{numeral(data.operatingExpenses).format('($0,0.00)')}</td>
            <td>{numeral(data.monthlyOperatingExpenses).format('($0,0.00)')}</td>
          </tr>

          <tr>
            <td>Net Operating Income</td>
            <td>{numeral(data.netOperatingIncome).format('($0,0.00)')}</td>
            <td>{numeral(data.monthlyNetOperatingIncome).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td>Debt Service (mortgage payment)</td>
            <td>{numeral(data.annualDebtService).format('($0,0.00)')}</td>
            <td>{numeral((data.monthlyAnnualDebtService)).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td>Property Tax @ { numeral(data.propertyTaxRate).format('%0.00') } of purchase price</td>
            <td>{numeral(data.propertyTax).format('($0,0.00)')}</td>
            <td>{numeral((data.monthlyPropertyTax)).format('($0,0.00)')}</td>
          </tr>
        <tr>
            <td>Insurance</td>
            <td>{numeral(data.insuranceCost).format('($0,0.00)')}</td>
            <td>{numeral((data.monthlyInsuranceCost)).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td><strong>Pretax Cashflow</strong></td>
            <td><strong>{numeral(data.pretaxCashflow).format('($0,0.00)')}</strong></td>
            <td><strong>{numeral((data.monthlyPretaxCashflow)).format('($0,0.00)')}</strong></td>
          </tr>


          <tr><td></td><td></td><td></td></tr>
          <tr>
            <td>Mortgage Interest</td>
            <td>{numeral(data.mortgageInterest).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td>Depreciation @ {numeral(data.depreciationRate).format('0%')} of property</td>
            <td>{numeral(data.depreciation).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td>Property Tax @ { numeral(data.propertyTaxRate).format('%0.00') } of purchase price</td>
            <td>{numeral(data.propertyTax).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td>Taxable Income</td>
            <td>{numeral(data.taxableIncome).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Tax Due @ {numeral(data.taxBracket).format('0%')} of income</strong></td>
            <td><strong>{numeral(data.taxDue).format('($0,0.00)')}</strong></td>
            <td></td>
          </tr>
          <tr>
            <td></td><td></td><td></td>
          </tr>
          <tr>
            <td><strong>After Tax Cashflow</strong></td>
            <td><strong>{numeral(data.afterTaxCashFlow).format('($0,0.00)')}</strong></td>
            <td><strong>{numeral(data.monthlyAfterTaxCashFlow).format('($0,0.00)')}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
	</div> 
)}
export default RentalIncomeCashflow