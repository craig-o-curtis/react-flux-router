"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../mock-api/authorApi');

// used in main.js
var InitActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INIT,
      initData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitActions;