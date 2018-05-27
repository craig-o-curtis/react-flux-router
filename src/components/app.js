/* eslint-disable strict */
$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  
  /** Lifecycle Methods */

  /** Uses:
   *    Set initial state
   */
  componentWillMount: function() {
    // console.log('will mount');
  },
  /** Uses:
   *    Access the DOM
   *    Integrate frameworks
   *    Set timers
   *    AJAX requests
   */
  componentDidMount: function() {
    // console.log('did mount');
  },
  /** Uses:
   *    Not on initial render
   *    Called when props change
   *    Place to set state before next render
   */
  componentWillReceiveProps: function() {
    // console.log('will receive props');
  },
  /** Uses:
   *    Before render for new state or props
   *    return false for unnecessary re-renders
   */
  shouldComponentUpdate: function() {
    // console.log('should update');
    return true; // requires return of bool
  },
  /** Uses:
   *    Before rerendering
   *    Not called on initial render
   *    Use place for updates
   *    ** Cannot call setState here
   */
  componentWillUpdate: function() {
    // console.log('will update');
  },
  /** Uses:
   *    After updates are flushed to the DOM
   *    Work with DOM after update
   */
  componentDidUpdate: function() {
    // console.log('did update');
  },
  /** Uses:
   *    Cleanup
   */    
  componentWillUnmout: function() {
    // console.log('will unmount');
  },
	
	render: function () {
		return (
			<div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
			</div>
		);
	}
});

module.exports = App;