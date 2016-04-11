//affordability.js
var React = require('react');
var numeral = require('numeral')
var amortize = require('amortize');

var borderTop = {
  borderTop: 'solid'
}

var Affordability = React.createClass({
  getInitialState: function() {
      return {
        purchasePrice: 500000,
        mortgageLength: '30',
        appraisalPrice: '',
        cashDownRate: '20',
        interestRate: '4',
        rehabCost: 0,
        rehabAmount: 0,
        monthlyPretaxIncome: 1000,
        monthlyDebtPayments: 0,
        cashInBank: 0,
        totalLoanPaid: '',
        monthlyInterestsCost: '',
        monthlyInsuranceCost: '',
        monthlyPrincipalCost: '',
        monthlyTaxesCost: '',
        monthlyTotal: '',
        reserveRequirements: '',
        cashDownAmount: 0,
        cashTotal: '',
        cashBeforeReserve: '',
        cashAfterReserve: '',
        incomeDebtRatio: 0,
        monthlyTaxSaving: 0,
        monthlyCostAfterTax: 0,
      };
    },
  purchasePriceChange: function(e){
    //function content goes here
    this.setState({
      purchasePrice: e.target.value,
      appraisalPrice: e.target.value,
    });
  },
  appraisalPriceChange: function(e){
    this.setState({appraisalPrice: parseFloat(e.target.value)});
  },
  interestRateChange: function(e){
    this.setState({interestRate: parseFloat(e.target.value)});
  },
  mortgageLengthChange: function(e){
    //function content goes here
    this.setState({mortgageLength: parseFloat(e.target.value)});
  },
  cashDownRateChange: function(e){
    this.setState({cashDownRate: parseFloat(e.target.value) });
  },
  rehabAmountChange: function(e){
    this.setState({rehabAmount: parseFloat(e.target.value)});
  },
  monthlyPretaxIncomeChange: function(e){
    this.setState({monthlyPretaxIncome: parseFloat(e.target.value)});
  },
  monthlyDebtPaymentsChange: function(e){
    this.setState({monthlyDebtPayments: parseFloat(e.target.value)});
  },
  cashInBankChange: function(e){
    this.setState({cashInBank: parseFloat(e.target.value)});
  },
  handleCalculate: function(e){
    var loanAmount = this.state.purchasePrice - (this.state.purchasePrice * ( this.state.interestRate / 100 ));
    var fullTermDetails = amortize({
      amount: loanAmount,
      rate: this.state.interestRate,
      totalTerm: this.state.mortgageLength * 12,
      amortizeTerm: this.state.mortgageLength * 12,
    });
    var oneMonthDetails = amortize({
      amount: loanAmount,
      rate: this.state.interestRate,
      totalTerm: this.state.mortgageLength * 12,
      amortizeTerm: 1,
    });
    var totalInterestPaid = fullTermDetails.interest * -1;
    var totalLoanPaid = (fullTermDetails.interest + fullTermDetails.principal) * -1;
    var cashBeforeClosing = this.state.cashInBank;
    var cashDownCost = this.state.purchasePrice * (this.state.cashDownRate / 100) * -1;;
    var rehabCost = this.state.rehabAmount * -1;

    var monthlyInterestCost = oneMonthDetails.interest * -1;
    var monthlyTaxesCost = this.state.purchasePrice * 0.0125  / 12 * -1;
    var monthlyPrincipalCost = oneMonthDetails.principal * -1;
    var monthlyInsuranceCost = this.state.purchasePrice * 0.002  / 12 * -1;

    var monthlyPIITCost = monthlyInterestCost + monthlyTaxesCost + monthlyPrincipalCost + monthlyInsuranceCost;

    var cashBeforeReserve = cashBeforeClosing + cashDownCost + rehabCost;



    var reserverRequirementCost = monthlyPIITCost * 6;
    var cashAfterReserve = cashBeforeReserve + reserverRequirementCost;

    var monthlyDebtsPaymentsCost = this.state.monthlyDebtPayments * -1;
    var monthlyDebtsCost = monthlyPIITCost + monthlyDebtsPaymentsCost;

    var debtRatio = ((monthlyDebtsCost * -1) / this.state.monthlyPretaxIncome);
    
    var monthlyTaxSaving = ((monthlyTaxesCost * 0.33) + (monthlyInterestCost * 0.33)) * -1;
   
    var monthlyCostAfterTax = monthlyPIITCost + monthlyTaxSaving;
    this.setState({
      loanAmount: loanAmount * -1,
      totalInterestPaid: totalInterestPaid,
      totalLoanPaid: totalLoanPaid,
      cashBeforeClosing: cashBeforeClosing,
      cashDownCost: cashDownCost,
      rehabCost: rehabCost,
      cashBeforeReserve: cashBeforeReserve,
      reserverRequirementCost: reserverRequirementCost,
      cashAfterReserve: cashAfterReserve,
      monthlyDebtsCost: monthlyDebtsCost,
      debtRatio: debtRatio,
      monthlyInterestCost: monthlyInterestCost,
      monthlyTaxesCost: monthlyTaxesCost,
      monthlyPrincipalCost: monthlyPrincipalCost,
      monthlyInsuranceCost: monthlyInsuranceCost,
      monthlyPIITCost: monthlyPIITCost,
      monthlyDebtsPaymentsCost: monthlyDebtsPaymentsCost,
      monthlyTaxSaving: monthlyTaxSaving,
      monthlyCostAfterTax: monthlyCostAfterTax,
    });
    //function content goes here
  },
  render: function() {

    var cashReqMet = '';
    if(this.state.cashBeforeReserve != ''){
      if(this.state.cashBeforeReserve < 0){
        cashReqMet = <div className="alert alert-danger alert-dismissible" role="alert">You are short on cash.</div>;
      }else{
        cashReqMet = <div className="alert alert-success alert-dismissible" role="alert">You meet the cash requirement.</div>;
      }
    }  
    var reserveReqMet = '';
    if(this.state.cashAfterReserve != ''){
      if(this.state.cashAfterReserve < 0){
        reserveReqMet = <div className="alert alert-danger alert-dismissible" role="alert">You are not meeting the reserve requirement.</div>;
      }else{
        reserveReqMet = <div className="alert alert-success alert-dismissible" role="alert">You meet the reserve requirement!</div>;
      }
    }
    var debtRationReqMet = '';
    if(this.state.debtRatio != ''){
      if(this.state.debtRatio > 43){
        debtRationReqMet = <div className="alert alert-danger alert-dismissible" role="alert">You are not meeting the debt ratio requirement.</div>;
      }else{
        debtRationReqMet = <div className="alert alert-success alert-dismissible" role="alert">You meet the debt ratio requirement!</div>;
      }
    }
    return (
      <div>
        <div className="row">
         <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="row">
              <div className="col-lg-12">{/* main input */}
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h4 className="panel-title">Numb3rs</h4>
                  </div>
                  <div className="panel-body">
                  <h2><small>Property Details</small></h2>
                  {/* form group purchasePrice */}
                    <div className="form-group">
                      <label htmlFor="purchasePrice" className="control-label">Purchase Price</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.purchasePriceChange} className="form-control" id="purchasePrice" placeholder="500,000" value={this.state.purchasePrice} />
                      </div>
                    </div>
                    
                  {/* form group rehabCost */}
                    <div className="form-group">
                      <label htmlFor="rehabAmount" className="control-label">Rehab Amount</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.rehabAmountChange} className="form-control" id="rehabAmount" placeholder="30,000" value={this.state.rehabAmount} />
                      </div>
                    </div>
                  <hr/>
                  <h2><small>Mortgage Details</small></h2>
                  {/* form group mortgageLength */}
                    <div className="form-group">
                      <label htmlFor="mortgageLength" className="control-label">Mortgage Length</label>
                      <div className="input-group">
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.mortgageLengthChange} className="form-control" id="mortgageLength" placeholder="30" value={this.state.mortgageLength} />
                        <div className="input-group-addon"> years</div>
                      </div>
                    </div>
                  {/* form group cashDownRate */}
                    <div className="form-group">
                      <label htmlFor="cashDownRate" className="control-label">Cash Down Rate</label>
                      <div className="input-group">
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.cashDownRateChange} className="form-control" id="cashDownRate" placeholder="25" value={this.state.cashDownRate} />
                        <div className="input-group-addon">%</div>

                      </div>
                    </div>
                  {/* form group interestRate */}
                    <div className="form-group">
                      <label htmlFor="interestRate" className="control-label">Interest Rate</label>
                      <div className="input-group">
                        <input type="number" inputMode="numeric"  onChange={this.interestRateChange} className="form-control" id="interestRate" placeholder="4" value={this.state.interestRate} />
                        <div className="input-group-addon">%</div>
                      </div>
                    </div>
                  {/* form group appraisalPrice */}
                    <div className="form-group">
                      <label htmlFor="appraisalPrice" className="control-label">Appraisal Price</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.appraisalPriceChange} className="form-control" id="appraisalPrice" placeholder="500,000" value={this.state.appraisalPrice} />
                      </div>
                    </div>
                   
                    <hr />
                    <h2><small>Current Income, Debts, and Assets</small></h2>
                  {/* form group monthlyPretaxIncome */}
                    <div className="form-group">
                      <label htmlFor="monthlyPretaxIncome" className="control-label">Monthly Income Before Taxes</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.monthlyPretaxIncomeChange} className="form-control" id="monthlyPretaxIncome" placeholder="12,000" value={this.state.monthlyPretaxIncome} />
                      </div>
                    </div>
                  {/* form group monthlyDebtPayments */}
                    <div className="form-group">
                      <label htmlFor="monthlyDebtPayments" className="control-label">Monthly Debt Payments</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.monthlyDebtPaymentsChange} className="form-control" id="monthlyDebtPayments" placeholder="2,000" value={this.state.monthlyDebtPayments} />
                      </div>
                    </div>
                  {/* form group cashInBank */}
                    <div className="form-group">
                      <label htmlFor="cashInBank" className="control-label">Cash In Bank</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.cashInBankChange} className="form-control" id="cashInBank" value={this.state.cashInBank} />
                      </div>
                    </div>
                  <button type="button" onClick={this.handleCalculate} className="pull-right btn btn-primary">Calculate</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-6">
            <div id="affordabilityMatrix" className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">{/* Closing Requirements */}
                  <div className="panel-heading">
                    <h4 className="panel-title">Closing Requirements</h4>
                  </div>
                  <div className="panel-body">
                    <table className="table table-hover">
                      <thead>
                          <tr>
                            <th>Cash Before Closing</th>
                            <th>{numeral(this.state.cashInBank).format('($0,0.00)')}</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Cash Down</td>
                          <td>{numeral(this.state.cashDownCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Rehab Cost</td>
                          <td>{numeral(this.state.rehabCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr style={borderTop}>
                          <td>Cash Before Reserve</td>
                          <td>{numeral(this.state.cashBeforeReserve).format('($0,0.00)')}</td>
                        </tr>
                      </tbody>
                    </table>
                    {cashReqMet}
                    <table className="table table-hover">
                      <thead>
                          <tr>
                            <th>Cash Before Reserve</th>
                            <th>{numeral(this.state.cashBeforeReserve).format('($0,0.00)')}</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Reserve Requirements</td>
                          <td>{numeral(this.state.reserverRequirementCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr style={borderTop}>
                          <td>Balance After Reserve</td>
                          <td>{numeral(this.state.cashAfterReserve).format('($0,0.00)')}</td>
                        </tr>
                      </tbody>
                    </table>
                    {reserveReqMet}
                    <table className="table table-hover">
                      <thead>
                          <tr>
                            <th>Monthly Income</th>
                            <th>{numeral(this.state.monthlyPretaxIncome).format('($0,0.00)')}</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Monthly Debts</td>
                          <td>{numeral(this.state.monthlyDebtsPaymentsCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Monthly PIIT</td>
                          <td>{numeral(this.state.monthlyPIITCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr style={borderTop}>
                          <td>Debt Ratio</td>
                          <td>{numeral(this.state.debtRatio).format('(%0.0)')}</td>
                        </tr>
                      </tbody>
                    </table>
                    {debtRationReqMet}
                  </div>
                </div>
                <div className="panel panel-default">{/* Monthly Cost */}
                  <div className="panel-heading">
                    <h4 className="panel-title">Monthly Cost</h4>
                  </div>
                  <div className="panel-body">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <td>Monthly Interests</td>
                          <td>{numeral(this.state.monthlyInterestCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Monthly Taxes</td>
                          <td>{numeral(this.state.monthlyTaxesCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Monthly Insurance</td>
                          <td>{numeral(this.state.monthlyInsuranceCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Monthly Principal</td>
                          <td>{numeral(this.state.monthlyPrincipalCost).format('($0,0.00)')}</td>
                        </tr>
                        <tr style={borderTop}>
                          <td><strong>Monthly Pretax Total</strong></td>
                          <td><strong>{numeral(this.state.monthlyPIITCost).format('($0,0.00)')}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Monthly Pretax Cost</th>
                          <th>{numeral(this.state.monthlyPIITCost).format('($0,0.00)')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tax Savings</td>
                          <td>{numeral(this.state.monthlyTaxSaving).format('($0,0.00)')}</td>
                        </tr>
                        <tr style={borderTop}>
                          <td>Total</td>
                          <td>{numeral(this.state.monthlyCostAfterTax).format('($0,0.00)')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="panel panel-default">{/* Life of loan */}
                  <div className="panel-heading">
                    <h4 className="panel-title">Life of The Loan</h4>
                  </div>
                  <div className="panel-body">
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <td>Loan Amount</td>
                          <td>{numeral(this.state.loanAmount).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Total Interest Paid</td>
                          <td>{numeral(this.state.totalInterestPaid).format('($0,0.00)')}</td>
                        </tr>
                        <tr style={borderTop}>
                          <td><strong>Total Paid</strong></td>
                          <td><strong>{numeral(this.state.totalLoanPaid).format('($0,0.00)')}</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Affordability;
