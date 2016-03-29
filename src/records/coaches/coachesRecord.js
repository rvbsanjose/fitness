const Immutable = require('immutable');

module.exports = coach => {
    return Immutable.Record({
        firstName: coach.firstName,
        lastName: coach.lastName,
        address: coach.address,
        city: coach.city,
        state: coach.state,
        profilePic: coach.profilePic,
        zipCode: coach.zipCode,
        experience: coach.experience
    })();
};
