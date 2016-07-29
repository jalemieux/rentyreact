var React = require('react');
var Navbar = require("./navbar");

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar />
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