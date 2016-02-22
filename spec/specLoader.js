/* eslint-disable */
const Service = require('../src/lib/service'),
      Firebase = require('../src/services/firebase'),
      serviceEnums = require('../src/enums/services');
/* eslint-enable */

const service = Service.getInstance();

// Register the core service as a global for testing
service.register({
    name: serviceEnums.FIREBASE,
    service: Firebase
});

// Consume the service
global.firebase = service.utilize(serviceEnums.FIREBASE);

// Polyfill for Object.assign
require('babel-polyfill');

// Services
require('./lib/serviceSpec');
require('./services/firebaseSpec');

// Actions
require('./actions/trainers/trainersSpec');
