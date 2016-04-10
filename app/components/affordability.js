//affordability.js
var React = require('react');
var numeral = require('numeral')
var amortize = require('amortize');

var Affordability = React.createClass({
  getInitialState: function() {
      return {
        purchasePrice: '',
        mortgageLength: '',
        appraisalPrice: '',
        cashDown: '',
        interestRate: '',
        rehabCost: '',
        monthlyPretaxIncome: '',
        monthlyDebtPayments: '',
        cashInBank: '',
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
    //function content goes here
    this.setState({appraisalPrice: e.target.value});
  },
  mortgageLengthChange: function(e){
    //function content goes here
    this.setState({mortgageLength: e.target.value})
  },
  cashDownChange: function(e){
    this.setState({cashDown: e.target.value })
  },
  rehabCostChange: function(e){
    this.setState({rehabCost: e.target.value});
    //function content goes here
  },
  monthlyPretaxIncomeChange: function(e){
    this.setState({monthlyPretaxIncome: e.target.value});
    //function content goes here
  },
  monthlyDebtPaymentsChange: function(e){
    this.setState({monthlyDebtPayments: e.target.value});
    //function content goes here
  },
  cashInBankChange: function(e){
    this.setState({cashInBank: e.target.value});
    //function content goes here
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
                    <h4 className="panel-title">Numb3rs</h4>
                  </div>
                  <div className="panel-body">
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
                      <label htmlFor="rehabCost" className="control-label">Rehab Cost</label>
                      <div className="input-group">
                        <div className="input-group-addon">$</div>
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.rehabCostChange} className="form-control" id="rehabCost" placeholder="30,000" value={this.state.rehabCost} />
                      </div>
                    </div>
                  <hr/>
                  {/* form group mortgageLength */}
                    <div className="form-group">
                      <label htmlFor="mortgageLength" className="control-label">Mortgage Length</label>
                      <div className="input-group">
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.mortgageLengthChange} className="form-control" id="mortgageLength" placeholder="30" value={this.state.mortgageLength} />
                        <div className="input-group-addon"> years</div>
                      </div>
                    </div>
                  {/* form group cashDown */}
                    <div className="form-group">
                      <label htmlFor="cashDown" className="control-label">Cash Down Rate</label>
                      <div className="input-group">
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.cashDownChange} className="form-control" id="cashDown" placeholder="25" value={this.state.cashDown} />
                        <div className="input-group-addon">%</div>

                      </div>
                    </div>
                  {/* form group interestRate */}
                    <div className="form-group">
                      <label htmlFor="interestRate" className="control-label">Interest Rate</label>
                      <div className="input-group">
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*.[0-9]*" onChange={this.interestRateChange} className="form-control" id="interestRate" placeholder="4.5" value={this.state.interestRate} />
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
                        <input type="number" min="0" inputMode="numeric" pattern="[0-9]*" onChange={this.cashInBankChange} className="form-control" id="cashInBank" placeholder="10,000" value={this.state.cashInBank} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xs-12 col-sm-6">
            <div id="affordabilityMatrix" className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">{/* cashflow */}
                  <div className="panel-heading">
                    <h4 className="panel-title">Affordability Matrix</h4>
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
                          <td>Loan Amount</td>
                          <td>{numeral(this.state.loanAmount).format('($0,0)')}</td>
                        </tr>
                        <tr>
                          <td>Total Interest Paid</td>
                          <td>{numeral(this.state.totalInterestPaid).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>PretaxMonthly Payment</td>
                          <td>{numeral(0).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{numeral(0).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{numeral(0).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{numeral(0).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{numeral(0).format('($0,0.00)')}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>{numeral(0).format('($0,0.00)')}</td>
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
