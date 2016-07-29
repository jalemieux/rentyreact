// lease.js
var React = require('react');
require("../styles/lease.css")
var Lease = React.createClass({
  render: function() {
    if(this.props.data.alerts){
      var alerts = this.props.data.alerts.map(function(alert){
        return (
          <li><span className="label label-danger">!</span> <a href="#">{alert}</a></li>
        );
      });
    }
    return (
      <div className="lightWell">
        <h4>{this.props.data.address}, {this.props.data.city} {this.props.data.state}</h4>
        <p>leased to <a href="#">{this.props.data.tenant}</a> until <strong>{this.props.data.leaseEnd}</strong> @ <strong>${this.props.data.rent}</strong>/month</p>
        <ul className="list-inline">
         {alerts}
        </ul>
      </div>
    )
  }
});
module.exports = Lease;