const userData = require('./userData');

module.exports = {
    createUser(opts, handleResponse) {
        if (!opts.email || !opts.password) {
            handleResponse(new Error('Error'), null);

            return;
        }

        handleResponse(null, userData);
    }
};
