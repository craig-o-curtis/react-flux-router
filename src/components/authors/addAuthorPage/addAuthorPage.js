"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm/authorForm');
var AuthorApi = require('../../../mock-api/authorApi');

var AddAuthorPage = React.createClass({
  // react-router mixin
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    };
  },
  setAuthorState: function(e) {
    var field = event.target.name;
    var value = event.target.value;
    // get current state
    this.state.author[field] = value;
    // set state
    return this.setState({author: this.state.author});
  },

  saveAuthor: function(event) {
    event.preventDefault(); // stop form from submitting
    // like using eternal service - just import above and use
    AuthorApi.saveAuthor(this.state.author);

    // Use react-router mixin to transition to diff route
      // like $state.go
    this.transitionTo('authors');
  },

  render: function() {
    return (
      <div>
        <AuthorForm 
          author={this.state.author} 
          handleChange={this.setAuthorState}
          handleSave={this.saveAuthor}
        />
      </div>
    );
  }
});

module.exports = AddAuthorPage;