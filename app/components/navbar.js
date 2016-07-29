var React = require('react');

require("../styles/renty.css");

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
     <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/dashboard" className="navbar-brand logoNav" >Renty!</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="#" activeClassName="active">Properties</Link></li>
              <li><Link to="#" activeClassName="active">Listings</Link></li>
              <li><Link to="#" activeClassName="active">Leases</Link></li>
              <li><Link to="#" activeClassName="active">Tenants</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right user-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span>Account</span>
                  <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li></li>
                  <li></li>
                  <li className="divider"></li>
                  <li></li>
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