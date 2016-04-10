var React = require('react');
var styles = require('../styles/index');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
  getInitialStates: function(){
    return {
      activeTab: ''
    }
  },
  render: function () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Renty</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/properties" activeClassName="active">Properties</Link></li>
              <li><Link to="/listings"  activeClassName="active">Listings</Link></li>
              <li><Link to="/applications"  activeClassName="active">Applications</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right user-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" style={styles.padding10} data-toggle="dropdown">
                  <img alt="Avatar" className="img-circle" style={styles.avatarImg} src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                  <span>Jacques Lemieux</span>
                  <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/account">My Account</Link></li>
                  <li><Link to="/messages">Messages</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/signout">Sign Out</Link></li>
                </ul>
              </li>
            </ul>   
          </div>
        </div>
      </nav>
      )
  }
});

module.exports = Navbar;