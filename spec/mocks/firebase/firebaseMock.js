/* eslint-disable */
const Q = require('q'),
      userData = require('./userDataMock');
/* eslint-enable */

module.exports = {
    createUser(opts) {
        if (!opts.email || !opts.password) {
            return Q.reject({
                code: 'INVALID'
            });
        }

        return Q(userData);
    },

    authWithPassword(opts) {
        if (!opts.email || !opts.password) {
            return Q.reject({
                code: 'INVALID'
            });
        }

        return Q(userData);
    },

    changeEmail(opts) {
        if (!opts.oldEmail || !opts.newEmail || !opts.password) {
            return Q.reject({
                code: 'INVALID'
            });
        }

        return Q(userData);
    },

    changePassword(opts) {
        if (!opts.email || !opts.oldPassword || !opts.newPassword) {
            return Q.reject({
                code: 'INVALID'
            });
        }

        return Q(userData);
    },

    resetPassword(opts) {
        if (!opts.email) {
            return Q.reject({
                code: 'INVALID'
            });
        }

        return Q(userData);
    }
};
