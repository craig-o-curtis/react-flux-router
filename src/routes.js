"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')} >
    <DefaultRoute handler={require('./components/homePage/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="about" path="about-us" handler={require('./components/about/aboutPage')} />    
    <Redirect from="about-deprecated" to="about" /> {/* redirect must be before redirect route def */}
    <Route name="about-deprecated" path="about-deprecated" handler={require('./components/homePage/homePage')} />    
    <NotFoundRoute handler={require('./components/notFoundPage/notFoundPage')} />
    <Redirect from="a*rs" to="authors" />
    <Redirect from="writers" to="authors" />
    <Redirect from="about*" to="about" />
    
  </Route>
);

module.exports = routes;