"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm/authorForm');
// var AuthorApi = require('../../../mock-api/authorApi'); without flux
var AuthorActions = require('../../../actions/authorActions'); // with flux
var AuthorStore = require('../../../stores/authorStore'); // with flux

var Toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  // react-router mixin
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionTo: function(transition, params, query, go) {
      go(); // allows transitions to this page
    },
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {},
      dirty: false
    };
  },
  // place to hydrate a form
    // need to set state before render, so don't use componentDidMount
  componentWillMount: function() {
    // react router passes params down to props
    var authorId = this.props.params.id; // from path "author/:id"

    if (authorId) {
      // this.setState({author: AuthorApi.getAuthorById(authorId)}); // without flux
      this.setState({author: AuthorStore.getAuthorById(authorId)}); // with flux
    }
  },

  setAuthorState: function(e) {
    var field = e.target.name;
    var value = e.target.value;
    // get current state
    this.state.author[field] = value;
    // manually set to dirty
    // this.state.dirty = true; /// works ...but shouldn't...
    this.setState({dirty: true});
    // set state
    return this.setState({author: this.state.author});
  },

  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; // clear any previous errors

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }
    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    
    return formIsValid;
  },

  saveAuthor: function(event) {
    event.preventDefault(); // stop form from submitting

    if (!this.authorFormIsValid()) {
      return;
    }

    // handle updating vs creating
    if (this.state.author.id) {
      AuthorActions.updateAuthor(this.state.author);
    } else {
      // like using eternal service - just import above and use
      // AuthorApi.saveAuthor(this.state.author); // without flux
      AuthorActions.createAuthor(this.state.author); // with flux
    }
 
    this.setState({dirty: false});

    // nice easy toastrs!
    Toastr.success('Author saved'); 

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
          errors={this.state.errors}
          handleSave={this.saveAuthor}
        />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;