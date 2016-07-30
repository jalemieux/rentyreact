var React = require('react');
var ActiveListings = require('./active_listings');
var CurrentLeases = require('./current_leases');
var Timeline = require('./timeline');
var Alerts = require('./alerts');
var Ledger = require('./ledger');
var Notifications = require('./notifications');

require("../styles/dashboard.css");
var pieChartData = require("../data/pie_chart_data");

var PieChart = require("react-chartjs").Pie;

var PieChart = require("react-chartjs").Pie


var Dashboard = React.createClass({
  getInitialState: function() {
      return {
        pieChartData: pieChartData,
      };
    },
  render: function() {
    var options = {};
    return (
      <div>
          <Notifications />
          <div className="col-sm-12 col-md-8 noPadding">
            <div class="row ">
              <div className="col-sm-12 col-md-12 box1">
                <h4>Active Listing</h4>
                <ActiveListings />
              </div>
              <div className="col-sm-12 col-md-12 box1">
                <h4>Financials</h4>
                <PieChart data={this.state.pieChartData} options={options} />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 noPadding">
            <div class="row">
              <div className="col-sm-12 col-md-12 box1">
                <h4>Current Leases</h4>
                <CurrentLeases />
              </div>
              <div className="col-sm-12 col-md-12 box1">
                <h4>New Events</h4>
                <Alerts />
              </div>
              <div className="col-sm-12 col-md-12 box1">
                <h4>Events Timeline</h4>
                <Timeline />
              </div>
              <div className="col-sm-12 col-md-12 box1">
                <h4>Ledger</h4>
                <Ledger />
              </div>
              <div className="col-sm-12 col-md-12 box1">
                <h4>Financial</h4>
                <Ledger />
              </div>
            </div>
          </div>
      </div>
    )
  }
});
module.exports = Dashboard; 