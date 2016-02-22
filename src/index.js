/* eslint-disable */
const Service = require('./lib/service'),
      Firebase = require('./services/firebase'),
      store = require('./store/createStore'),
      serviceEnums = require('./enums/services');
/* eslint-enable */

const service = Service.getInstance();

// Register the service
service.register({
    name: serviceEnums.FIREBASE,
    service: Firebase
});

// Consume the service
service.utilize(serviceEnums.FIREBASE);

// Test the dispatcher
const trainerActions = require('./actions/trainers');

store.dispatch(trainerActions.fetchTrainerById('8a43265a-965f-4cc0-9fba-1e6c2231097f'));
