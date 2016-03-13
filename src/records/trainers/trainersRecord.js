const Immutable = require('immutable');

module.exports = trainer => {
    return Immutable.Record({
        firstName: trainer.firstName,
        lastName: trainer.lastName,
        address: trainer.address,
        city: trainer.city,
        state: trainer.state,
        profilePic: trainer.profilePic,
        zipCode: trainer.zipCode,
        experience: trainer.experience
    })();
};
