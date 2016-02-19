/* eslint-disable */
const Service = require('./lib/service'),
      Firebase = require('./services/firebase'),
      serviceEnums = require('./enums/services');
/* eslint-enable */

const service = Service.getInstance();

// Register the service
service.register({
    name: serviceEnums.firebase,
    service: Firebase
});

// Consume the service
const firebase = service.utilize(serviceEnums.firebase);

// Test the service
firebase.authWithPassword({
    email: 'test@gmail.com',
    password: 'password'
})
/* eslint-disable */
.then(rsp => console.log('rsp', rsp))
.catch(err => console.log('err', err));
/* eslint-enable */
