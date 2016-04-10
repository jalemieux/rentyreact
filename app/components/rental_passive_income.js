var React = require ('react');
var numeral = require('numeral');
var amortize = require('amortize');

var RentalPassiveIncome = React.createClass({
  getInitialState: function() {
    return {
      purchasePrice: '',
      loanAmount: '',
      cashDownAmount: '',
      interestRate: 4,
      monthlyRent: '',
      cashDownRatio: 0.2,
      mortgagePeriods: 360,

      rentalIncome: 0,
      occupancyRate: 85,
      vacancyRate: 0.15,
      operatingExpensesRate: 15,
      operatingExpenses: '',
      
      rentalIncome: 0,
      netOperatingIncome: 0,
      mortgageInterest: 0,
      depreciation: 0,
      taxableIncome: 0,
      annualDebtService: 0,
      pretaxCashflow: 0,
      monthlyPmt: 0,
      operatingExpenses: 0,
      taxBracket: 0.33,
    };
  },
  handlePurchasePriceChange: function(e){
    this.setState({purchasePrice: e.target.value });
    
  },
  handleInterestRateChange: function(e){
    this.setState({interestRate: e.target.value });
  },
  handleMonthlyRentChange: function(e){
    this.setState({ monthlyRent: e.target.value });  
  },
  handleCalc: function() {
    var purchasePrice = this.state.purchasePrice;
    var loanAmount = purchasePrice * ( 1 - this.state.cashDownRatio );
    var cashDownAmount = (purchasePrice - loanAmount)* -1;
    var rate = this.state.interestRate / 100;
    var numberPmts = this.state.mortgagePeriods;
    var monthlyRent = this.state.monthlyRent;
    var rentalIncome = monthlyRent * 12;
    var vacancyLoss = rentalIncome * (1 - (this.state.occupancyRate/100)) * -1;
    var operatingExpenses = rentalIncome * (this.state.operatingExpensesRate/100) * -1;
    var netOperatingIncome = rentalIncome + vacancyLoss + operatingExpenses;

    var details = amortize({
      amount: loanAmount,
      rate: rate * 100,
      totalTerm: numberPmts,
      amortizeTerm: 12
    });

    var mortgageInterest = details.interest * -1;
    var depreciation = this.state.purchasePrice / 27.5 * -1;
    var taxableIncome = netOperatingIncome + mortgageInterest + depreciation;
    var annualDebtService = (details.interest + details.principal) * -1;
    var pretaxCashflow = netOperatingIncome + annualDebtService;
    var afterTaxCashFlow = 0;
    if (taxableIncome > 0){
      afterTaxCashFlow = pretaxCashflow - ( taxableIncome * this.state.taxBracket);
    }else{
      afterTaxCashFlow = pretaxCashflow;
    }

    this.setState({
      rentalIncome: rentalIncome,
      vacancyLoss: vacancyLoss,
      netOperatingIncome: netOperatingIncome,
      mortgageInterest: mortgageInterest,
      depreciation: depreciation,
      taxableIncome: taxableIncome,
      annualDebtService: annualDebtService,
      pretaxCashflow: pretaxCashflow,
      purchasePrice: purchasePrice,
      loanAmount: loanAmount, 
      cashDownAmount: cashDownAmount,
      monthlyPmt: -1 * details.payment,
      operatingExpenses: operatingExpenses,
      afterTaxCashFlow: afterTaxCashFlow,
      monthlyPmtInterest: details.interest / 12,
      monthlyPmtPrincipal: details.principal / 12
    });
    document.getElementById("cashflowStatement").scrollIntoView();
  },
  handleOccupancyRateChange: function(e){
    this.setState( { occupancyRate: (e.target.value)});
  },
  handleOperatingExpensesRateChange: function(e){
    this.setState( { operatingExpensesRate: (e.target.value) });
  },
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="row">
              <div className="col-lg-12">{/* main input */}
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h4 className="panel-tittle">Rental Income Caculator</h4>
                  </div>
                  <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="purchasePrice" className="control-label">Purchase Price</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.handlePurchasePriceChange} className="form-control" id="purchasePrice" placeholder="Purchase Price" value={this.state.purchasePrice} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="interestRate" className="control-label">Interest Rate</label>
                      <div className="input-group">
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.handleInterestRateChange} className="form-control" id="interestRate" placeholder="Interest Rate" value={this.state.interestRate} />
                        <div className="input-group-addon">%</div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="monthlyRent" className="control-label">Monthly Rent</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.handleMonthlyRentChange}  className="form-control" id="monthlyRent" placeholder="Monthly Rent" value={this.state.monthlyRent} />
                      </div>
                    </div>
                    <button type="button" onClick={this.handleCalc} className="col-sm-offset-2 btn btn-primary">calculate!</button>
                  </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">{/* ancillary input */}
              </div>
            
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div id="cashflowStatement" className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">{/* cashflow */}
                  <div className="panel-heading">
                    <h4 className="panel-title">Cashflow Statement</h4>
                  </div>
                  <div className="panel-body">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Rental Income</th>
                          <th>{numeral(this.state.rentalIncome).format('($0,0.00)')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Vacancy Loss @ {numeral((100-this.state.occupancyRate)/100).format('0%')} </td>
                          <td>{numeral(this.state.vacancyLoss).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Operating Expenses</td>
                          <td>{numeral(this.state.operatingExpenses).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Net Operating Income</td>
                          <td>{numeral(this.state.netOperatingIncome).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Mortgage Interest</td>
                          <td>{numeral(this.state.mortgageInterest).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Depreciation</td>
                          <td>{numeral(this.state.depreciation).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Taxable Income</td>
                          <td>{numeral(this.state.taxableIncome).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Net Operating Income</td>
                          <td>{numeral(this.state.netOperatingIncome).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Annual Debt Service (principal and interest)</td>
                          <td>{numeral(this.state.annualDebtService).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Pretax Cashflow</td>
                          <td>{numeral(this.state.pretaxCashflow).format('($0,0.00)')}</td>
                        </tr>
                        {/*<tr>
                          <td>Tax Savings @ {numeral(this.state.taxBracket).format('0%')}</td>
                          <td>{numeral(this.state.taxSavings).format('($0,0.00)')}</td>
                        </tr>*/}
                        <tr>
                          <td><strong>After Tax Cashflow @ {numeral(this.state.taxBracket).format('%')}</strong></td>
                          <td><strong>{numeral(this.state.afterTaxCashFlow).format('($0,0.00)')}</strong></td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">{/* mortgage details */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">Mortgage Amortization</h4>
                  </div>
                  <div className="panel-body">
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>Cash Down</td>
                        <td>{numeral(this.state.cashDownAmount).format('($0,0.00)')}</td>
                      </tr>
                      <tr>
                        <td>Loan Amount</td>
                        <td>{numeral(this.state.loanAmount).format('($0,0.00)')}</td>
                      </tr>
                      <tr>
                        <td>Monthly Payment</td>
                        <td>{numeral(this.state.monthlyPmt).format('($0,0.00)')} [i:{numeral(this.state.monthlyPmtInterest).format('($0,0.00)')}|p:{numeral(this.state.monthlyPmtPrincipal).format('($0,0.00)')}]</td>
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


module.exports = RentalPassiveIncome;
