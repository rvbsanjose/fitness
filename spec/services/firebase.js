/* eslint-disable */
const Q = require('q'),
      firebase = require('../../src/services/firebase'),
      mock = require('../mocks/firebase/firebase'),
      userData = require('../mocks/firebase/userData');
/* eslint-enable */

describe('The Firebase service', () => {

    describe('Creating a new user', () => {

        beforeEach(() => {
            spyOn(firebase, 'createUser').and.callFake(opts => {
                return mock.createUser({
                    email: opts.email,
                    password: opts.password
                });
            });
        });

        describe('When successful', () => {

            it('should successfully create the user', () => {
                firebase.createUser({
                    email: 'test@gmail.com',
                    password: 'password'
                }).then(rsp => expect(rsp).toEqual(userData));
            });
        });

        describe('When unsuccessful', () => {

            it('should pass an error object and no userData', () => {
                firebase.createUser({
                    email: 'test@gmail.com'
                }).catch(err => expect(err).toEqual({ code: 'INVALID' }));
            });
        });
    });

    describe('Authorizing the user by logging in', () => {

        beforeEach(() => {
            spyOn(firebase, 'authWithPassword').and.callFake(opts => {
                return mock.authWithPassword({
                    email: opts.email,
                    password: opts.password
                });
            });
        });

        describe('When successful', () => {

            it('should successfully log the user in', () => {
                firebase.authWithPassword({
                    email: 'test@gmail.com',
                    password: 'test'
                }).then(rsp => expect(rsp).toEqual(userData));
            });
        });

        describe('When unsuccessful', () => {

            it('should pass an error object and null userData', () => {
                firebase.authWithPassword({
                    email: 'test@gmail.com'
                }).catch(err => expect(err).toEqual({ code: 'INVALID' }));
            });
        });
    });

    describe('Chaning the user\'s email address', () => {

        beforeEach(() => {
            spyOn(firebase, 'changeEmail').and.callFake(opts => {
                return mock.changeEmail({
                    oldEmail: opts.oldEmail,
                    newEmail: opts.newEmail,
                    password: opts.password
                });
            });
        });

        describe('When successful', () => {

            it('should successfully log the user in', () => {
                firebase.changeEmail({
                    oldEmail: 'test@gmail.com',
                    newEmail: 'test2@gmail.com',
                    password: 'test'
                }).then(rsp => expect(rsp).toEqual(userData));
            });
        });

        describe('When unsuccessful', () => {

            it('should pass an error object and null userData', () => {
                firebase.changeEmail({
                    oldEmail: 'test@gmail.com',
                    newEmail: 'test2@gmail.com'
                }).catch(err => expect(err).toEqual({ code: 'INVALID' }));
            });
        });
    });

    describe('Chaning the user\'s password', () => {

        beforeEach(() => {
            spyOn(firebase, 'changePassword').and.callFake(opts => {
                return mock.changePassword({
                    email: opts.email,
                    oldPassword: opts.oldPassword,
                    newPassword: opts.newPassword
                });
            });
        });

        describe('When successful', () => {

            it('should successfully log the user in', () => {
                firebase.changePassword({
                    email: 'test@gmail.com',
                    oldPassword: 'test',
                    newPassword: 'test2'
                }).then(rsp => expect(rsp).toEqual(userData));
            });
        });

        describe('When unsuccessful', () => {

            it('should pass an error object and null userData', () => {
                firebase.changePassword({
                    email: 'test@gmail.com'
                }).catch(err => expect(err).toEqual({ code: 'INVALID' }));
            });
        });
    });

    describe('Resetting the user\'s password', () => {

        beforeEach(() => {
            spyOn(firebase, 'resetPassword').and.callFake(opts => {
                return mock.resetPassword({
                    email: opts.email
                });
            });
        });

        describe('When successful', () => {

            it('should successfully log the user in', () => {
                firebase.resetPassword({
                    email: 'test@gmail.com'
                }).then(rsp => expect(rsp).toEqual(userData));
            });
        });

        describe('When unsuccessful', () => {

            it('should pass an error object and null userData', () => {
                firebase.resetPassword({
                    code: 'INVALID'
                }).catch(err => expect(err).toEqual({ code: 'INVALID' }));
            });
        });
    });
});
