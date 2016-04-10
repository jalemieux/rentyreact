var React = require('react');
//var Navbar = require('./navbar');
var NavbarTools = require('./navbar_tools')

var styles = require('../styles/index');

var Main = React.createClass({
  // getInitialStates: function(){
  //   return {
  //     activeTab: ''
  //   }
  // },
  render: function () {
    return (
      <div>
        <NavbarTools />
        <div className="container">
          {this.props.children}
          <footer>
            <hr/>
            <p className="text-center">&copy; 2016 renty, Inc.</p>
          </footer>
        </div>
      </div>
      )
  }
});

module.exports = Main;