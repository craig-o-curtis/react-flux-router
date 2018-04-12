"use strict";

var React = require('react');

var styles = {
  'navbarBrand': {
    'maxHeight': '100%',
    'width': 'auto'
  }
};

var Header = React.createClass({
  
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">
            <img style={styles.navbarBrand} src="images/pluralsight-logo.png" alt="brand"/>
          </a>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
          
        </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;