/* eslint-disable */
const Redux = require('redux'),
      thunk = require('redux-thunk'),
      createStore = Redux.createStore,
      applyMiddleware = Redux.applyMiddleware,
      trainersReducer = require('../reducers/trainers');
/* eslint-enable */

const store = createStore(trainersReducer, applyMiddleware(thunk));

module.exports = store;
