//property_new.js

var React = require ('react');
var Geosuggest = require('react-geosuggest');
var Styles = require("../styles/");

Styles.tinyTopMargin = {
  marginTop: '10px'
}

var googleAutoSuggestForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

var PropertyNew = React.createClass({
  getInitialState: function() {
    return { 
      street_number: 'foo',
      route: '',
      locality: '',
      administrative_area_level_1: '',
      country: '',
      postal_code: ''
    };
  },

  onSuggestSelect: function(e){
    var comps = e.gmaps.address_components;
    for(var i=0; i< comps.length; i++){
      var addressType = comps[i].types[0];
      console.log("addressType: " + addressType);      
      if(this.state[addressType] != undefined){
        console.log("long_name: " + comps[i].short_name);
        var val = {};
        val[addressType] = comps[i].short_name;
        this.setState(val);
      }
    }
    console.log(this);

  },
  render: function() {
    return (
    <div className="row">
      <div className="col-sm-12 col-lg-6">
        <form action="" method="POST" role="form">
          <legend>Your New Property</legend>
          <div className="form-group">
            <label for="address1">Address</label>
            <Geosuggest
            className="form-group"
            inputClassName="form-control"
            placeholder="Your property address"
            onSuggestSelect={this.onSuggestSelect}
            country="us" />
          </div>
          
          <div className="row form-inline">
            <div className="col-xs-4">
              <div className="form-group">
                <label for="city">City</label>
                <input type="text" className="form-control" id="city" value={this.state.locality} disabled/>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label for="state">State</label>
                <input type="text" className="form-control" id="state" value={this.state.administrative_area_level_1} disabled />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label for="zip">Zip</label>
                <input type="text" className="form-control" id="zip" value={this.state.postal_code}  disabled />
              </div>
            </div>
          </div>
          <div className="row form-inline" style={Styles.tinyTopMargin}>
            <div className="col-xs-4">
              <div className="form-group">
                <label for="beds"># Beds</label>
                <input type="text" className="form-control" id="beds" placeholder="0" />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label for="baths"># Baths</label>
                <input type="text" className="form-control" id="baths" placeholder="0" />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label for="sqft">sq.ft.</label>
                <input type="text" className="form-control" id="sqft" placeholder="0" />
              </div>
            </div>
          </div>
          <div className="form-group" style={Styles.tinyTopMargin}>
            <label for="description">Details</label>
            <textarea name="description" id="inputDescription" className="form-control" rows="3" required="required" placeholder="Describe your property to you prospective tenants. TODO Provide examples."></textarea>
          </div>
          <div className="form-group">
            <label for="amenities">Amenities</label>
            <div className="row">
              <div className="col-lg-3">
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div> 
              </div>           
              <div className="col-lg-3">
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div> 
              </div>           
              <div className="col-lg-3">
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div>
                <div className="checkbox"><label><input type="checkbox" value="" />Pool</label></div> 
              </div>           
            </div>
          </div>
          <div className="form-group">
            <label for="pictures">Pictures</label>
            <input type="file" name="pic" id="inputPic" class="form-control" value="" required="required" title="" />
          </div>
        
          
        
          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </div>
    </div>   
      )
  }
});

module.exports = PropertyNew;
