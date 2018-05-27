"use strict";

var React = require('react');
// var AuthorApi = require('../../mock-api/authorApi'); // without flux
var AuthorStore = require('../../stores/authorStore'); // with flux
var AuthorActions = require('../../actions/authorActions'); // with flux
var AuthorList = require('./authorList/authorList');
var Router = require('react-router');
var Link = Router.Link;

var AuthorPage = React.createClass({

  getInitialState: function() {
    return {
      // authors: [] // without flux
      authors: AuthorStore.getAllAuthors() // with flux
    };
  },

  // without flux
  // componentDidMount: function() {
  //   if (this.isMounted()) {
  //     this.setState({
  //       authors: AuthorApi.getAllAuthors() // without flux
  //     });
  //   }
  // },
  
  componentWillMount: function() {
    // works on delete
    AuthorStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    // works on delete
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    // set state every time store changes
    this.setState( { authors: AuthorStore.getAllAuthors() } );
  },

  render: function() {
    return (
      <div className="">
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage;