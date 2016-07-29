//current_leases.js
var React = require('react');
var LeaseData = require('../data/leases');
var Lease = require('./lease');
var CurrentLeases = React.createClass({
  getInitialState: function() {
      return {
        leasesData: LeaseData,
      };
    },
  render: function() {
    var leases = this.state.leasesData.map(function(leaseData){
      return(
        <Lease id={leaseData.id} data={leaseData} />
        );
    });
    return (
      <div>
        {leases}
      </div>
    )
    
  }
});
module.exports = CurrentLeases;