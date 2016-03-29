/* eslint-disable */
const Service = require('../src/lib/service'),
      Firebase = require('../src/services/firebase'),
      serviceEnums = require('../src/enums/services');
/* eslint-enable */

const service = Service.getInstance();

// Register the core services as a global for testing
service.register({
    name: serviceEnums.FIREBASE,
    service: Firebase
});

// Consume the services
global.firebase = service.utilize(serviceEnums.FIREBASE);

// Polyfill for Object.assign
require('babel-polyfill');

// Add in matchers for immutables
beforeEach(() => jasmine.addMatchers(require('jasmine-immutable-matchers')));

// Services
require('./lib/serviceSpec');
require('./services/firebaseSpec');

// Actions
require('./actions/coaches/coachesSpec');

// Reducers
require('./reducers/coaches/coachesSpec');
