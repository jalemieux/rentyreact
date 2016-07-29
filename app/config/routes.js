var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/main');
var Dashboard = require("../components/dashboard");
// var Listings = require("../components/listings");
// var PropertyNew = require("../components/property_new");
// var PropertyList = require("../components/property_list");
// var PropertyDetails = require("../components/property_details");
// var Applications = require("../components/applications");
// var Account = require("../components/account");
// var Signout = require("../components/signout");
// var CashflowStatement = require("../components/cashflow_statement");
// var Blank = require("../components/blank");
// var Affordability = require("../components/affordability");
//var Welcome = require("../components/welcome");

var routes = (
  <Router history={hashHistory}>
    {/* 
    <Route path='/' component={Main}>
      <IndexRoute component={Welcome} />
    </Route> 
    */}
    <Route path='/' component={Main}>
        <IndexRoute component={Dashboard} />
    {/*
        <Route path="/cashflow" component={CashflowStatement} />
        <Route path="/affordability" component={Affordability} />
        <Route path="/properties" component={PropertyList} />
        <Route path="/properties/new" component={PropertyNew} />
        <Route path="/properties/:propertyId" component={PropertyDetails} />
        <Route path='/listings' component={Listings} />
        <Route path='/applications' component={Applications} />
        <Route path='/signout' component={Signout} />
        <Route path='/account' component={Account} />
    */}
        <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Router>
);

module.exports = routes;