//listing.js
var React = require('react');
require("../styles/listing.css");

var Listing = React.createClass({
  render: function() {
    if(this.props.data.openhouse){
      var openhouse = <small>Open house scheduled for <a href='#'>{this.props.data.openhouse}</a></small>;
    }
    return (
      <div className="well">
        <div className="row">
          <div className="col-sm-1 col-md-4">
            <img className="img-responsive" src="/images/3933paladindr.jpeg" />
          </div>
          <div className="col-sm-12 col-md-8">
            <h4>{this.props.data.address} <small> {this.props.data.city} {this.props.data.state}</small></h4>
            <p>${this.props.data.rent}/month <small>available from {this.props.data.availability}</small></p>
            <p>{openhouse}</p>
            <ul className="list-inline">
              <li><span className="label label-primary">3</span> <a href="#">messages</a></li>
              <li><span className="label label-danger">1</span> <a href="#">applications to review</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});
module.exports = Listing;
      