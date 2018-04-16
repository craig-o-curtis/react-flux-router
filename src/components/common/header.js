"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var styles = {
  'navbarBrand': {
    'maxHeight': '100%',
    'width': 'auto'
  }
};

var Header = React.createClass({
  
  render: function() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
        <div className="navbar-header">
          <Link to="app" className="navbar-brand">
            <img style={styles.navbarBrand} src="images/pluralsight-logo.png" alt="brand"/>
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="app">Home</Link></li>
            <li><Link to="authors">Authors</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="about-deprecated">About Us Redirect</Link></li>
          </ul>
          
        </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;