//form_property_address.js
var React = require('react');
var Geosuggest = require('react-geosuggest').default;
var ReactDOM = require('react-dom');
require("../styles/form_property_address.css");


var FormProperyAddress = React.createClass({
  onSuggestSelect: function(suggest) {
    console.log(suggest);
    ReactDOM.findDOMNode(this.refs.address).focus();


    var address = suggest.gmaps.address_components[0].short_name 
        + " " + suggest.gmaps.address_components[1].short_name;
    var city = suggest.gmaps.address_components[2].short_name;
    var state = suggest.gmaps.address_components[4].short_name;
    //
    // var zillowData = zillow.get('GetSearchResults', { address: encodeURIComponent(address), citystatezip: city+state})
    // //   .then(function(results) {
    // //     return results;
    // //     // results here is an object { message: {}, request: {}, response: {}}  
    // //   })

    // console.log(zillowData);

    this.props.updateFieldValues({ address: address, city: city, state: state});
  },
  onNextClick: function(e){
    e.preventDefault();
    this.props.onUpdateValues({
      address: ReactDOM.findDOMNode(this.refs.address).value,
      city: ReactDOM.findDOMNode(this.refs.city).value,
      state: ReactDOM.findDOMNode(this.refs.state).value,
      unit: ReactDOM.findDOMNode(this.refs.unit).value,
    })
  },


  render: function() {
    var geoStyles = {
      suggests: {
        border: "rgb(221,221,221) solid 1px",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        marginTop: "-1px",
        listStyle: "none",
        textAlign: "left",
        paddingLeft: "5px"
      }
    };

    return ( 
      <div>
        <div className="cp_form">
          <h2>Enter your property address</h2>
          <p>we'll look it up and help you fill in details</p>
        </div>
        <div className="cp_form">
          <form className="form-horizontal">
            <div className="form-group">
              <Geosuggest placeholder="the property address" 
                types={["geocode"]} 
                className="form-group" 
                inputClassName="form-control" 
                style={geoStyles}
                onBlur={this.onBlur}
                onSuggestSelect={this.onSuggestSelect}
                />
            </div>

            <div className="form-group">
              <label for="input" className="col-sm-2 control-label">Address</label>
              <div className="col-sm-7">
                <input type="text" name="" id="input" className="form-control" ref="address" value={this.props.formFieldValues.address} required="required" pattern="" title="" />
              </div>
               <label for="input" className="col-sm-1 control-label">Unit</label>
              <div className="col-sm-2">
                <input type="text" name="" id="input" className="form-control" ref="unit" value={this.props.formFieldValues.unit} required="required" pattern="" title="" />
              </div>
            </div>
            <div className="form-group">
             
            </div>
            <div className="form-group">
              <label for="input" className="col-sm-2 control-label">City</label>
              <div className="col-sm-4">
                <input type="text" name="" id="input" className="form-control" ref="city"  value={this.props.formFieldValues.city} required="required" pattern="" title="" />
              </div>
              <label for="input" className="col-sm-2 control-label">State</label>
              <div className="col-sm-4">
                <input type="text" name="" id="input" className="form-control" ref="state" value={this.props.formFieldValues.state} required="required" pattern="" title="" />
              </div>
            </div>
            <div className="form-group">
              <button type="button" onClick={this.onNextClick} class="btn btn-sm btn-default">next</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});
module.exports = FormProperyAddress;