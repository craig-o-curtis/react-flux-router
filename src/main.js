// // use strict method 1 (commented out), remove iife
// "use strict";
// // not strict mode
$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./components/common/header');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');

// use strict method 2 - insed an iife
(function(window) {
"use strict";
var App = React.createClass({
  
  /** Lifecycle Methods */

  /** Uses:
   *    Set initial state
   */
  componentWillMount: function() {
    console.log('will mount');
  },
  /** Uses:
   *    Access the DOM
   *    Integrate frameworks
   *    Set timers
   *    AJAX requests
   */
  componentDidMount: function() {
    console.log('did mount');
  },
  /** Uses:
   *    Not on initial render
   *    Called when props change
   *    Place to set state before next render
   */
  componentWillReceiveProps: function() {
    console.log('will receive props');
  },
  /** Uses:
   *    Before render for new state or props
   *    return false for unnecessary re-renders
   */
  shouldComponentUpdate: function() {
    console.log('should update');
    return false; // requires return of bool
  },
  /** Uses:
   *    Before rerendering
   *    Not called on initial render
   *    Use place for updates
   *    ** Cannot call setState here
   */
  componentWillUpdate: function() {
    console.log('will update');
  },
  /** Uses:
   *    After updates are flushed to the DOM
   *    Work with DOM after update
   */
  componentDidUpdate: function() {
    console.log('did update');
  },
  /** Uses:
   *    Cleanup
   */    
  componentWillUnmout: function() {
    console.log('will unmount');
  },
	
	render: function () {
		var Child = null;

		switch (this.props.route) {
      case 'about': Child = About; break;
      case 'authors': Child = Authors; break;
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
	var route = window.location.hash.substr(1);
  console.log(route);
	React.render(<App route={route} />, document.getElementById('app'));
}

// event listener for URL change
window.addEventListener('hashchange', render);

render();

})(window);

// React.render(<Home />, document.getElementById('app'));