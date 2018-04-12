"use strict";
// not strict mode
$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

var App = React.createClass({
	render: function () {
		var Child = null;

		switch (this.props.route) {
			case 'about': Child = About; break;
			default: Child = Home;
		}

		return (
			<div>
				<Child />
			</div>
		);
	}
});

function render() {
	var route = window.location.hash.substr(1);
	
	React.render(<App route={route} />, document.getElementById('app'));
}

// event listener for URL change
window .addEventListener('hashchange', render);
render();

// React.render(<Home />, document.getElementById('app'));