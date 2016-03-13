const Immutable = require('immutable');

module.exports = trainer => {
    return Immutable.Record({
        firstName: trainer.firstName,
        lastName: trainer.lastName,
        address: trainer.address,
        city: trainer.city,
        state: trainer.state,
        zipCode: trainer.zipCode
    })();
};
