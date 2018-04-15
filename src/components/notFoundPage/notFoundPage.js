"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div className="alert alert-danger">
        <h1>Page Not Found</h1>
        <p>Nothing to see here...</p>
        <p><Link to="app" className="btn btn-sm btn-danger">Back to Home</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;