"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var InitActions = require('./actions/initActions');

InitActions.initApp();

// add Router.HistoryLocation for HTML5 history (removes # from URL)
// Router.run(routes, Router.HistoryLocation, function(Handler) {
  // difficult to set up HTML5 url
Router.run(routes, function(Handler) {  
  React.render(<Handler />, document.getElementById('app'));
});