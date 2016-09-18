var React = require ('react');
var numeral = require('numeral');
var amortize = require('amortize');
var ReactDOM = require('react-dom');
var CashflowStatementParameters = require("../components/cashflow_statement_parameters");

var RentalPassiveIncome = React.createClass({
  getInitialState: function() {
    return {
      showParameters: false,

      purchasePrice: 530000,
      loanAmount: '',
      cashDownAmount: '',
      interestRate: 3.75,
      monthlyRent: 3650,
      cashDownRatio: 25,
      mortgagePeriods: 360,
      depreciationRate: 50,

      rentalIncome: 0,
      occupancyRate: 92,
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
      taxBracket: 33,
      hoaFees: 0,
      propertyTaxRate: 1.25,
      propertyTax: 0,
      insuranceCost: 500,
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
  handleToggleParameters: function(e){
    if(this.state.showParameters){
      this.setState({showParameters: false });
    }else{
      this.setState({showParameters: true});  
    }
  },
  handleChangeInput: function(e){
     var stateObject = function() {
      returnObj = {};
      console.log();
      returnObj[this.target.id] = this.target.value;
         return returnObj;
    }.bind(e)();
    this.setState(stateObject);

  },
  handleCalc: function() {
    var purchasePrice = this.state.purchasePrice;
    console.log(this.state.occupancyRate);
    var propertyTax = this.state.purchasePrice * this.state.propertyTaxRate/100 * -1;
    var loanAmount = purchasePrice * ( 1 - this.state.cashDownRatio/100 );
    var cashDownAmount = (purchasePrice - loanAmount)* -1;
    var rate = this.state.interestRate / 100;
    var numberPmts = this.state.mortgagePeriods;
    var monthlyRent = this.state.monthlyRent;
    var rentalIncome = monthlyRent * 12;
    var vacancyLoss = rentalIncome * (1 - (this.state.occupancyRate/100)) * -1;
    var operatingExpenses = (rentalIncome * (this.state.operatingExpensesRate/100) * -1) - this.state.hoaFees*12;
    var netOperatingIncome = rentalIncome + vacancyLoss + operatingExpenses;

    var details = amortize({
      amount: loanAmount,
      rate: rate * 100,
      totalTerm: numberPmts,
      amortizeTerm: 12
    });

    var mortgageInterest = details.interest * -1;
    var depreciation = (this.state.purchasePrice * this.state.depreciationRate/100) / 27.5 * -1;
    var taxableIncome = netOperatingIncome + mortgageInterest + depreciation + propertyTax;
    var annualDebtService = (details.interest + details.principal) * -1;
    var pretaxCashflow = netOperatingIncome + annualDebtService + propertyTax - this.state.insuranceCost;
    var afterTaxCashFlow = 0;
    var taxDue = 0;
    if (taxableIncome > 0){
      taxDue = taxableIncome * this.state.taxBracket/100;
      afterTaxCashFlow = pretaxCashflow - taxDue;
    }else{
      afterTaxCashFlow = pretaxCashflow;
    }
    var taxSavings = (pretaxCashflow * this.state.taxBracket/100)  - (taxableIncome * this.state.taxBracket/100);

    this.setState({
      propertyTax: propertyTax,
      roi: afterTaxCashFlow / purchasePrice,
      rentalIncome: rentalIncome,
      vacancyLoss: vacancyLoss,
      vacancyLossM: vacancyLoss/12,
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
      afterTaxCashFlowM: afterTaxCashFlow /12,
      monthlyPmtInterest: details.interest / 12,
      monthlyPmtPrincipal: details.principal / 12,
      taxSavings: taxSavings,
      taxDue: taxDue,

    });
    // var scroll = ReactDOM.findDOMNode(this.refs.cashflowStatement);
    // if(scroll) scroll.scrollIntoView();
  },
  componentWillMount: function(){
    this.handleCalc();
  },
  handleOccupancyRateChange: function(e){
    this.setState( { occupancyRate: (e.target.value)});
  },
  handleOperatingExpensesRateChange: function(e){
    this.setState( { operatingExpensesRate: (e.target.value) });
  },
  render: function() {
    var parameters = "";
    if(this.state.showParameters){
      parameters = <div className="panel-body">
              <CashflowStatementParameters
                  occupancyRate={ this.state.occupancyRate }
                  handleChangeInput={this.handleChangeInput}
                  operatingExpensesRate={ this.state.operatingExpensesRate }
                  hoaFees={ this.state.hoaFees }
                  taxBracket={ this.state.taxBracket }
                  cashDownRatio={ this.state.cashDownRatio }
                  insuranceCost={ this.state.insuranceCost }
                  depreciationRate={ this.state.depreciationRate }
                  />
                  </div>
    }

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
                        <input type="number" min="0" inputMode="numeric" ref="purchasePriceInput" pattern="[0-9]*" onChange={this.handlePurchasePriceChange} className="form-control" id="purchasePrice" placeholder="Purchase Price" value={this.state.purchasePrice} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="interestRate" className="control-label">Interest Rate</label>
                      <div className="input-group">
                        <input type="number" min="0" inputMode="numeric"ref="interestRateInput"  pattern="[0-9.]*" onChange={this.handleInterestRateChange} className="form-control" id="interestRate" placeholder="Interest Rate" value={this.state.interestRate} />
                        <div className="input-group-addon">%</div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="monthlyRent" className="control-label">Monthly Rent</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" ref="monthlyRentInput" pattern="[0-9]*" onChange={this.handleMonthlyRentChange}  className="form-control" id="monthlyRent" placeholder="Monthly Rent" value={this.state.monthlyRent} />
                      </div>
                    </div>
                    <div>
                      <a href="#" onClick={ this.handleToggleParameters }><h5 className="panel-tittle">Advanced Parameters<small> <span className="glyphicon glyphicon-chevron-down"></span></small></h5></a>
                      { parameters }
                    </div>
                    <button type="button" onClick={this.handleCalc} className="col-sm-offset-2 btn btn-primary">update</button>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div ref="cashflowStatement" className="row">
              <div className="col-lg-12">{ /* cashflow statement */}
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
                          <td>{numeral(this.state.rentalIncome).format('($0,0.00)')}</td>
                          <td>{numeral(this.state.rentalIncome/12).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Vacancy Loss @ {numeral((100-this.state.occupancyRate)/100).format('0%')} </td>
                          <td>{numeral(this.state.vacancyLoss).format('($0,0.00)')}</td>
                          <td>{numeral(this.state.vacancyLossM).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Operating Expenses @ {numeral((this.state.operatingExpensesRate)/100).format('0%')}</td>
                          <td>{numeral(this.state.operatingExpenses).format('($0,0.00)')}</td>
                          <td>{numeral((this.state.operatingExpenses/12)).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Net Operating Income</td>
                          <td>{numeral(this.state.netOperatingIncome).format('($0,0.00)')}</td>
                          <td>{numeral(this.state.netOperatingIncome/12).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Debt Service (mortgage payment)</td>
                          <td>{numeral(this.state.annualDebtService).format('($0,0.00)')}</td>
                          <td>{numeral((this.state.annualDebtService/12)).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Property Tax @ { numeral(this.state.propertyTaxRate/100).format('%0.00') } of purchase price</td>
                          <td>{numeral(this.state.propertyTax).format('($0,0.00)')}</td>
                          <td>{numeral((this.state.propertyTax/12)).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td>Insurance</td>
                          <td>{numeral(-this.state.insuranceCost).format('($0,0.00)')}</td>
                          <td>{numeral((-this.state.insuranceCost/12)).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td><strong>Pretax Cashflow</strong></td>
                          <td><strong>{numeral(this.state.pretaxCashflow).format('($0,0.00)')}</strong></td>
                          <td><strong>{numeral((this.state.pretaxCashflow/12)).format('($0,0.00)')}</strong></td>
                        </tr>

                        <tr><td></td><td></td><td></td></tr>
                        <tr>
                          <td>Mortgage Interest</td>
                          <td>{numeral(this.state.mortgageInterest).format('($0,0.00)')}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Depreciation @ {numeral((this.state.depreciationRate)/100).format('0%')} of property</td>
                          <td>{numeral(this.state.depreciation).format('($0,0.00)')}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Property Tax @ { numeral(this.state.propertyTaxRate/100).format('%0.00') } of purchase price</td>
                          <td>{numeral(this.state.propertyTax).format('($0,0.00)')}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Taxable Income</td>
                          <td>{numeral(this.state.taxableIncome).format('($0,0.00)')}</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Tax Due @ {numeral(this.state.taxBracket/100).format('0%')} of income</strong></td>
                          <td><strong>{numeral(this.state.taxDue).format('($0,0.00)')}</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td><td></td><td></td>
                        </tr>
                        <tr>
                          <td><strong>After Tax Cashflow</strong></td>
                          <td><strong>{numeral(this.state.afterTaxCashFlow).format('($0,0.00)')}</strong></td>
                          <td><strong>{numeral((this.state.afterTaxCashFlowM)).format('($0,0.00)')}</strong></td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">{/* ROI */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">Return On Investment</h4>
                  </div>
                  <div className="panel-body">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>principal</td>
                          <td>{ numeral(-this.state.cashDownAmount).format('$(0,0.00)') } </td>
                        </tr>
                        <tr>
                          <td>Annualized Returns</td>
                          <td>{ numeral(this.state.roi).format('(0.00%)') }</td>
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
