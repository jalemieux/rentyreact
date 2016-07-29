//active_listings.js
var React = require('react');
var Listing = require('./listing');
var ListingsData = require('../data/listings');

var ActiveListings = React.createClass({
  getInitialState: function() {
      return {
        listings: ListingsData,
      };
    },
  render: function() {
    var listings = this.state.listings.map(function(listingData){
      return (
        <Listing id={listingData.propertyId} data={listingData} />
      );
    });
    return (
      <div>
      {listings}
      </div>
    )
  }
});
module.exports = ActiveListings;