/* eslint-disable */
const Redux = require('redux'),
      thunk = require('redux-thunk'),
      createStore = Redux.createStore,
      applyMiddleware = Redux.applyMiddleware,
      coachesReducer = require('../reducers/coaches');
/* eslint-enable */

const store = createStore(coachesReducer, applyMiddleware(thunk));

module.exports = store;
