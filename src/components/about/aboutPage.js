"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    // lock down route
    willTransitionTo: function(transition, params, query, callback) {
      if ( !confirm('Are you sure you want to go to the About page? ') ) {
        transition.abort();
      } else {
        callback(); // allows transition to occur
      }
    },
    willTransitionFrom: function(transition, component) {
      if (!confirm('Are you sure you want to leave this page?')) {
        transition.abort();
      }
    }
  },
	render: function () {
		return (
			<div className="">
				<h1>About</h1>
				<p>
					This circa 2015 application uses the following technologies:
          <ul className="list-group">
            <li className="list-group-item">React</li>
            <li className="list-group-item">React Router</li>
            <li className="list-group-item">Flux</li>
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Gulp</li>
            <li className="list-group-item">Browserify</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>
				</p>
			</div>
		);
	}
});

module.exports = About;