// // use strict method 1 (commented out), remove iife
// "use strict";
// // not strict mode
$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./components/common/header');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

// use strict method 2 - insed an iife
(function(win) {
"use strict";
var App = React.createClass({
  
  /** Lifecycle Methods */
  componentWillMount: function() {
    console.log('will mount');
  },
  componentDidMount: function() {
    console.log('did mount');
  },
  componentWillReceiveProps: function() {
    console.log('will receive props');
  },
  shouldComponentUpdate: function() {
    console.log('should update');
    return true; // requires return of bool
  },
  componentWillUpdate: function() {
    console.log('will update');
  },
  componentDidUpdate: function() {
    console.log('did update');
  },
  componentWillUnmout: function() {
    console.log('will unmount');
  },
	
	render: function () {
		var Child = null;

		switch (this.props.route) {
			case 'about': Child = About; break;
			default: Child = Home;
		}

		return (
			<div>
        <Header />
				<Child />
			</div>
		);
	}
});

function render() {
	var route = win.location.hash.substr(1);
	
	React.render(<App route={route} />, document.getElementById('app'));
}

// event listener for URL change
win.addEventListener('hashchange', render);
render();

})(window);

// React.render(<Home />, document.getElementById('app'));