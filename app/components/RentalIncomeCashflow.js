//RentalIncomeCashflow.js
import React from 'react'
import numeral  from 'numeral'
import { styles } from '../styles/'

const RentalIncomeCashflow = ( props ) => {
  console.log("RentalIncomeCashflow: ", props)
  let { rentalIncome } = props
	//let { income, vacancyLoss,  operatingExpenses, netOperatingIncome, annualDebtService, propertyTax, insuranceCost, pretaxCashflow, mortgageInterest, depreciationRate, depreciation, propertyTax, taxableIncome, taxBracket, taxDue, afterTaxCashFlow } = rentalIncome
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
            <td>{numeral(rentalIncome.rentalIncome).format('($0,0.00)')}</td>
            <td>{numeral(rentalIncome.monthlyRentalIncome).format('($0,0.00)')}</td>
          </tr>
    
          <tr>
            <td>Vacancy Loss @ {numeral(rentalIncome.occupancyRate).format('0%')} occupancy rate </td>
            <td>{numeral(rentalIncome.vacancyLoss).format('($0,0.00)')}</td>
            <td>{numeral(rentalIncome.monthlyVacancyLoss).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td>Operating Expenses @ {numeral(rentalIncome.operatingExpensesRate).format('0%')} of rent + HOA</td>
            <td>{numeral(rentalIncome.operatingExpenses).format('($0,0.00)')}</td>
            <td>{numeral(rentalIncome.monthlyOperatingExpenses).format('($0,0.00)')}</td>
          </tr>

          <tr>
            <td>Net Operating Income</td>
            <td>{numeral(rentalIncome.netOperatingIncome).format('($0,0.00)')}</td>
            <td>{numeral(rentalIncome.monthlyNetOperatingIncome).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td>Debt Service (mortgage payment)</td>
            <td>{numeral(rentalIncome.annualDebtService).format('($0,0.00)')}</td>
            <td>{numeral((rentalIncome.monthlyAnnualDebtService)).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td>Property Tax @ { numeral(rentalIncome.propertyTaxRate).format('%0.00') } of purchase price</td>
            <td>{numeral(rentalIncome.propertyTax).format('($0,0.00)')}</td>
            <td>{numeral((rentalIncome.monthlyPropertyTax)).format('($0,0.00)')}</td>
          </tr>
        <tr>
            <td>Insurance</td>
            <td>{numeral(rentalIncome.insuranceCost).format('($0,0.00)')}</td>
            <td>{numeral((rentalIncome.monthlyInsuranceCost)).format('($0,0.00)')}</td>
          </tr>
          <tr>
            <td><strong>Pretax Cashflow</strong></td>
            <td><strong>{numeral(rentalIncome.pretaxCashflow).format('($0,0.00)')}</strong></td>
            <td><strong>{numeral((rentalIncome.monthlyPretaxCashflow)).format('($0,0.00)')}</strong></td>
          </tr>


          <tr><td></td><td></td><td></td></tr>
          <tr>
            <td>Mortgage Interest</td>
            <td>{numeral(rentalIncome.mortgageInterest).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td>Depreciation @ {numeral(rentalIncome.depreciationRate).format('0%')} of property</td>
            <td>{numeral(rentalIncome.depreciation).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td>Property Tax @ { numeral(rentalIncome.propertyTaxRate).format('%0.00') } of purchase price</td>
            <td>{numeral(rentalIncome.propertyTax).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td>Taxable Income</td>
            <td>{numeral(rentalIncome.taxableIncome).format('($0,0.00)')}</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Tax Due @ {numeral(rentalIncome.taxBracket).format('0%')} of income</strong></td>
            <td><strong>{numeral(rentalIncome.taxDue).format('($0,0.00)')}</strong></td>
            <td></td>
          </tr>
          <tr>
            <td></td><td></td><td></td>
          </tr>
          <tr>
            <td><strong>After Tax Cashflow</strong></td>
            <td><strong>{numeral(rentalIncome.afterTaxCashFlow).format('($0,0.00)')}</strong></td>
            <td><strong>{numeral(rentalIncome.monthlyAfterTaxCashFlow).format('($0,0.00)')}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
	</div> 
)}
export default RentalIncomeCashflow