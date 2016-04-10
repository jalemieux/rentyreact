//property_list.js

var React = require ('react');

var Property = require('./property_thumb');
var PropertiesData = require('../data/properties');
var Router = require('react-router');
var Link = Router.Link;

var Styles = require("../styles/");
Styles.alignRight = {
  textAlign: 'right'
}
Styles.displayBlock = {
  display: 'block',
}

var Properties = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {properties: PropertiesData };
  },
  newPropertyClick: function() {
    this.context.router.push('/properties/new');
  },
  render: function() {
    var properties = this.state.properties.map(function(propertyData){
      //console.log(propertyData);
      return (
        <Property id={propertyData.propertyId} data={propertyData} />
      );
    });
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
          <div className="row">
            <div className="col-lg-9">
              <p className="lead">See all your properties on a single page</p>
            </div>
            <div className="col-lg-3 form-group" style={Styles.alignRight}>
              <button className="btn btn-default" onClick={this.newPropertyClick} type="submit">Add A New Property</button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8">
          {properties}
        </div>
      </div>
      )
  }
});

module.exports = Properties;
