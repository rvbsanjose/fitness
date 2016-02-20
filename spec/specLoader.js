// Polyfill for Object.assign
require('babel-polyfill');

// Services
require('./lib/serviceSpec');
require('./services/firebaseSpec');

// Actions
require('./actions/trainers/trainersSpec');
