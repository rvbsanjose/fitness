const Immutable = require('immutable');

module.exports = trainer => {
    return Immutable.Record({
        id: trainer.uid,
        provider: trainer.provider,
        email: trainer.password.email,
        profileImageUrl: trainer.password.profileImageURL
    })();
};
