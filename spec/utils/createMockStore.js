/* eslint-disable */
const thunk = require('redux-thunk'),
      configureStore = require('redux-mock-store'),
      mockStore = configureStore([ thunk ]);
/* eslint-enable */

module.exports = mockStore;
