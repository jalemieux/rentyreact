//create_property.js
var React = require('react');
var Geosuggest = require('react-geosuggest').default;

var ReactDOM = require('react-dom');


require("../styles/create_property.css");
var CreateProperty = React.createClass({
  getInitialState: function() {
      return {
        labelName: '',
        address: '',
        city: '',
        state: ''
      };
    },
  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect: function(suggest) {
    console.log(suggest);
    ReactDOM.findDOMNode(this.refs.address).focus(); 
    this.setState({labelName: suggest.label,
      address: suggest.gmaps.address_components[0].short_name 
        + " " + suggest.gmaps.address_components[1].short_name,
      city: suggest.gmaps.address_components[2].short_name,
      state: suggest.gmaps.address_components[4].short_name
      });
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
      <div className="col-sm-12 col-md-8">
        <div className="cp_form">
          <h2>Enter your property address</h2>
          <p>we'll look it up and help you fill in details</p>
        </div>
        <div className="cp_form">
          <form className="form-horizontal">
            <div className="form-group">
              <Geosuggest placeholder="your property address" 
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
                <input type="text" name="" id="input" className="form-control" ref="address" value={this.state.address} required="required" pattern="" title="" />
              </div>
               <label for="input" className="col-sm-1 control-label">Unit</label>
              <div className="col-sm-2">
                <input type="text" name="" id="input" className="form-control" ref="address" value="" required="required" pattern="" title="" />
              </div>
            </div>
            <div className="form-group">
             
            </div>
            <div className="form-group">
              <label for="input" className="col-sm-2 control-label">City</label>
              <div className="col-sm-4">
                <input type="text" name="" id="input" className="form-control" value={this.state.city} required="required" pattern="" title="" />
              </div>
              <label for="input" className="col-sm-2 control-label">State</label>
              <div className="col-sm-4">
                <input type="text" name="" id="input" className="form-control" value={this.state.state} required="required" pattern="" title="" />
              </div>
            </div>
            <div className="form-group">
              <label for="input" className="col-sm-2 control-label">Label</label>
              <div className="col-sm-10">
                <input type="text" name="" id="input" className="form-control" value={this.state.labelName} required="required" pattern="" title="" />
              </div>
            </div>
          </form>

          

        </div>
      </div>
    )
  }
});
module.exports = CreateProperty;