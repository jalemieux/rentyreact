var React = require('react');
var Navbar = require('./navbar');

var styles = require('../styles/index');

var Main = React.createClass({
  getInitialStates: function(){
    return {
      activeTab: ''
    }
  },
  render: function () {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div style={styles.topFiller} />
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