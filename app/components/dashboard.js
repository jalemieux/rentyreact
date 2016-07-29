var React = require('react');
var ActiveListings = require('./active_listings');
var CurrentLeases = require('./current_leases');
var Timeline = require('./timeline');
require("../styles/dashboard.css");

var PieChart = require("react-chartjs").Pie;


var Dashboard = React.createClass({
  
  render: function() {
    var data =  [
    {
      value: 25,
      label: 'Java',
      color: '#811BD6'
   },
   {
      value: 10,
      label: 'Scala',
      color: '#9CBABA'
   },
   {
      value: 30,
      label: 'PHP',
      color: '#D18177'
   },
   {
      value : 35,
      label: 'HTML',
      color: '#6AE128'
   }
    ];
    var options = {
    };
    
    return (
      <div>
      <div className="row">
        <div className="col-sm-12 col-md-8 box1">
          <h4>Active Listing</h4>
          <ActiveListings />
        </div> 
        <div className="col-sm-12 col-md-4 box1">
          <h4>Current Leases</h4>
          <CurrentLeases />
        </div>
        <div className="col-sm-12 col-md-4 box1">
          <h4>Timeline</h4>
          <Timeline />
        </div>
        <div className="col-sm-12 col-md-4 box1">
          <PieChart data={data} options={options} height="auto" width="100%"/>
        </div>
      </div>
      </div>
    )
  }
});
module.exports = Dashboard; 