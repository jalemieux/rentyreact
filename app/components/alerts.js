//alerts.js
var React = require('react');
var AlertsData = require('../data/alerts');
var Alert = require ('./alert');
var Alerts = React.createClass({
  getInitialState: function() {
      return {
        alertsData: AlertsData,
      };
    },

  render: function() {
    var alerts = this.state.alertsData.map(function(alert){
      return (
        <Alert short={alert.short} text={alert.text} />
        );
    })
    return (
      <div>
      {alerts}
      </div>
    )
  }
});
module.exports = Alerts;