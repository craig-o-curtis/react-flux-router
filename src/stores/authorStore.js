"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter; // broadcasts events from stores to React components
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

// private data in store
var _authors = [];

// arg1 - starting empty object
// arg2 - extend with EventEmitter.prototype; is base class
// arg3 - further extends object
var AuthorStore = assign({}, EventEmitter.prototype, {
  // add change listener
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  // remove change listener
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  // emit change
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // custom methods
  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return _.find(_authors, {id: id});
  }

});

// Private detail, not exported
// called any time an action is dispatched
// ** 'register' is confusing, it should be 'listen' or 'receive'/'onReceive' or 'handle/r'
Dispatcher.register(function(action) {
  console.log(action);

  switch (action.actionType) {
    case ActionTypes.INIT:
      _authors = action.initData.authors;
      break;
    case ActionTypes.CREATE_AUTHOR:
      // action.author set to dispatcher object in INIT, held there
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      // need whole object, grab with _.find

      // track down existing author by id
      var existingAuthor = _.find(_authors, {id: action.author.id});
      var existingAuthorIdx = _.indexOf(_authors, existingAuthor);
      // remove it with splice, replace with action.author
      _authors.splice(existingAuthorIdx, 1, action.author);

      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;
    default:
      break;
  }
});

module.exports = AuthorStore;