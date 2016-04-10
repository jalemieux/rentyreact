var React = require('react');
var Styles = require('../styles/');
var Utils = require('../utils/')
var Router = require('react-router');
var Link = Router.Link;

Styles.gray = {
  color: "gray"
}
Styles.darkGray = {
  color: 'rgb(75, 75, 75)'
}
Styles.clickable = {
  cursor: 'pointer'
}

var TenantsData = require('../data/tenants');

var Property = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handlePropertyClick: function(e){
    this.context.router.push('/properties/' + this.props.data.propertyId);
  },
  render: function() {
    var tenantState = "";
    if(this.props.data.tenantId !== undefined){
      var tenantId = this.props.data.tenantId;
      var tenant = TenantsData.find(function(t){
        return t.tenantId === tenantId;
      });
      tenantState = <p>Leased to {Utils.capitalizeFirstLetter(tenant.first)} {Utils.capitalizeFirstLetter(tenant.last)}</p>;
    }

    return (
      <div  style={Styles.clickable} onClick={this.handlePropertyClick} className="panel panel-default">
          <div className="panel-body">  
            <img src={this.props.data.imgPath} style={Styles.propThumbnail} />
            <span className="lead"><strong>{this.props.data.address1}</strong><small style={Styles.gray}> {this.props.data.address2}</small></span>
            <p style={Styles.darkGray}>{this.props.data.sqft} sqft | {this.props.data.beds} beds | {this.props.data.baths} baths</p>
            <p>vacancy: {this.props.data.vacancyStatus} | listing status: {this.props.data.listingStatus}</p>
            <p>net monthly income: {this.props.data.incomeNet}</p>
            {tenantState}
            <p><Link to={'/properties/' + this.props.data.propertyId}>Details</Link></p>
          </div>
      </div>
    );
  }
});

module.exports = Property;