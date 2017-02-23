var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var logo = {
  background: 'url(/images/logo.png) no-repeat 0 11px',
  paddingLeft: '35px'
}


var NavbarTools = React.createClass({
  // getInitialStates: function(){
  //   return {
  //     activeTab: ''
  //   }
  // },
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
            {/*<a href="#" className="pull-left navbar-brand"><img style={logo} src="/images/building.jpeg" /></a>*/}
            <a className="navbar-brand" style={logo} href="#">Rentd</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/cashflow" activeClassName="active">Rental Income Cashflow</Link></li>
              <li><Link to="/affordability"  activeClassName="active">Property Affordability</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      )
  }
});

module.exports = NavbarTools;