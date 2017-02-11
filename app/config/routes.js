var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/main');
var CashflowStatement = require("../components/cashflow_statement");
var Affordability = require("../components/affordability");
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component={CashflowStatement} />
        <Route path="/cashflow" component={CashflowStatement} />
        <Route path="/affordability" component={Affordability} />
    </Route>
  </Router>
);

module.exports = routes;