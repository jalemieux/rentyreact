//cashflow_statement_parameters.js
var React = require('react');

var CashflowStatementParameters = React.createClass({
  render: function() {
    return (

          <form>
            <div className="form-group">
              <label htmlFor="occupancyRate" className="control-label">Occupancy Rate</label>
              <div className="input-group">
                <input type="number" min="0" inputMode="numeric" ref="occupancyRateInput" pattern="[0-9.]*"  onChange={this.props.handleChangeInput} className="form-control" id="occupancyRate" placeholder={this.props.occupancyRate} />
                <div className="input-group-addon">%</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="operatingExpensesRate" className="control-label">Operating Expenses Rate</label>
              <div className="input-group">
                <input type="number" min="0" inputMode="numeric" ref="operatingExpensesRateInput" pattern="[0-9.]*"  onChange={this.props.handleChangeInput} className="form-control" id="operatingExpensesRate" placeholder={this.props.operatingExpensesRate} />
                <div className="input-group-addon">%</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="operatingExpensesRate" className="control-label">HOA Fees</label>
              <div className="input-group">
                <input type="number" min="0" inputMode="numeric" ref="hoaFeesInput" pattern="[0-9.]*"  onChange={this.props.handleChangeInput} className="form-control" id="hoaFees" placeholder={this.props.hoaFees} />
                <div className="input-group-addon">%</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="depreciationRate" className="control-label">Depreciation Rate </label>
              (<small>how much of the purchase price qualifies for depreciation</small>)
              <div className="input-group">
                <input type="number" min="0" inputMode="numeric" ref="depreciationRateInput" pattern="[0-9.]*"  onChange={this.props.handleChangeInput} className="form-control" id="depreciationRate" placeholder={this.props.depreciationRate} />
                <div className="input-group-addon">%</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cashDownRatio" className="control-label">Cashdown Ratio</label>
              <div className="input-group">
                <input type="number" min="0" inputMode="numeric" ref="cashDownRatioInput" pattern="[0-9.]*"  onChange={this.props.handleChangeInput} className="form-control" id="cashDownRatio" placeholder={this.props.cashDownRatio} />
                <div className="input-group-addon">%</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="taxBracket" className="control-label">Tax Bracket</label>
              <div className="input-group">
                <input type="number" min="0" inputMode="numeric" ref="taxBracketInput" pattern="[0-9.]*"  onChange={this.props.handleChangeInput} className="form-control" id="taxBracket" placeholder={this.props.taxBracket} />
                <div className="input-group-addon">%</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="insuranceCost" className="control-label">Insurance Cost</label>
              <div className="input-group">
                <input type="number" min="0" inputMode="numeric" ref="insuranceCostInput" pattern="[0-9.]*"  onChange={this.props.handleChangeInput} className="form-control" id="insuranceCost" placeholder={this.props.insuranceCost} />
                <div className="input-group-addon">%</div>
              </div>
            </div>
          </form>
    )
  }
});
module.exports = CashflowStatementParameters; 