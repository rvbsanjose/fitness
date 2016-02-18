/* eslint-disable */
const Service = require('./lib/service'),
      serviceEnums = require('./enums/services');
/* eslint-enable */

const service = new Service();

// Register the service
service.register({
    name: serviceEnums.firebase,
    service: {
        login() {
            /* eslint-disable */
            console.log('Logging in with Firebase.');
            /* eslint-enaable */
        }
    }
});

// Test the service
const firebase = service.utilize(serviceEnums.firebase);

// Should print `Logging in with Firebase.`
firebase.login();
