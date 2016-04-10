var React = require ('react');

var PropertyDetails = require('./property_details');
var Property = require('./property');
var PropertiesData = require('../data/properties');

var Properties = React.createClass({
  getInitialState: function() {
    return {properties: PropertiesData };
  },
  render: function() {
    var properties = this.state.properties.map(function(propertyData){
      return (
        <Property data={propertyData} />
      );
    });
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 properties-list">
          {properties}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 property-details">

          <PropertyDetails data={this.state.properties[0]} />
        </div>
      </div>
      )
  }
});

module.exports = Properties;
