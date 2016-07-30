//alert.js
var React = require('react');
require("../styles/alert.css");
var Alert = React.createClass({
  render: function() {
    return (
      <div className="alert alert-info alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <span className="label label-danger">{this.props.short}</span><small> {this.props.text}</small>
      </div>
    )
  }
});
module.exports = Alert;