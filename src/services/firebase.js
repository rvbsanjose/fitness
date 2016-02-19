/* eslint-disable */
const Fb = require('firebase'),
      config = require('../config/config'),
      firebase = new Fb(config.firebase);
/* eslint-enable */

class Firebase {
    /**
     * Wrapper around the actual Firebase method to create a new user
     * @param  {object} opts Requires email<string> and password<string>
     * @return {undefined}
     */
    createUser(opts) {
        firebase.createUser(opts, handleResponse);
    }

    /**
     * Wrapper around the actual Firebase method to login
     * @param  {object} opts Requires email<string> and password<string>
     * @return {undefined}
     */
    authWithPassword(opts) {
        firebase.authWithPassword(opts, handleResponse);
    }

    /**
     * Wrapper around the actual Firebase method to change a user's email
     * @param  {object} opts Requires oldEmail<string>, newEmail<string>, and password<string>
     * @return {undefined}
     */
    changeEmail(opts) {
        firebase.changeEmail(opts, handleResponse);
    }

    /**
     * Wrapper around the actual Firebase method to change a user's password
     * @param  {object} opts Requires email<string>, oldPassword<string>, newPassword<string>
     * @return {undefined}
     */
    changePassword(opts) {
        firebase.changePassword(opts, handleResponse);
    }

    /**
     * Wrapper around the actual Firebase method to reset a user's password
     * @param {object} opts Requires email<string>
     * @return {undefined}
     */
    resetPassword(opts) {
        firebase.resetPassword(opts, handleResponse);
    }
}

function handleResponse(error, userData) {
    if (error) {
        // TODO: handle the error possibly by displaying an error banner
        console.log('error', error);
    }

    // TODO: handle a successfull response and redirect user to homepage?
    console.log('userData', userData);
}

module.exports = Firebase;
