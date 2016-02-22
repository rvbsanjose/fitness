/* eslint-disable */
const Fb = require('firebase'),
      config = require('../config/config'),
      firebase = new Fb(config.firebase);
/* eslint-enable */

class Firebase {
    /**
     * Wrapper around the actual Firebase method to create a new user
     * @param  {object} opts Requires email<string> and password<string>
     * @return {Promise}
     */
    createUser(opts) {
        return firebase.createUser(opts);
    }

    /**
     * Wrapper around the actual Firebase method to login
     * @param  {object} opts Requires email<string> and password<string>
     * @return {Promise}
     */
    authWithPassword(opts) {
        return firebase.authWithPassword(opts);
    }

    /**
     * Wrapper around the actual Firebase method to change a user's email
     * @param  {object} opts Requires oldEmail<string>, newEmail<string>, and password<string>
     * @return {Promise}
     */
    changeEmail(opts) {
        return firebase.changeEmail(opts);
    }

    /**
     * Wrapper around the actual Firebase method to change a user's password
     * @param  {object} opts Requires email<string>, oldPassword<string>, newPassword<string>
     * @return {Promise}
     */
    changePassword(opts) {
        return firebase.changePassword(opts);
    }

    /**
     * Wrapper around the actual Firebase method to reset a user's password
     * @param {object} opts Requires email<string>
     * @return {Promise}
     */
    resetPassword(opts) {
        return firebase.resetPassword(opts);
    }

    /**
     * Wrapper around the actual Firebase method to return a table reference in Firebase
     * @param  {string} tableName
     * @return {object}           A reference to a table in Firebase
     */
    child(tableName) {
        return firebase.child(tableName);
    }
}

module.exports = new Firebase();
