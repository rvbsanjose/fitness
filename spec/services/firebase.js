/* eslint-disable */
const mock = require('../mocks/firebase/firebase'),
      Firebase = require('../../src/services/firebase');
/* eslint-enable */

describe('The Firebase service', () => {

    let firebase,
        handleResponse;

    beforeEach(() => {
        firebase = new Firebase();

        handleResponse = jasmine.createSpy('handleResponse');

        spyOn(firebase, 'createUser').and.callFake((opts) => {
            mock.createUser({
                email: opts.email,
                password: opts.password
            }, handleResponse);
        });
    });

    describe('Creating a new user', () => {

        describe('When successful', () => {

            it('should successfully create the user', () => {
                firebase.createUser({
                    email: 'test@gmail.com',
                    password: 'test'
                });

                expect(handleResponse).toHaveBeenCalledWith(null, {
                    uuid: 'test',
                    provider: 'password',
                    token: '1',
                    auth: {},
                    expires: 1,
                    password: {
                        email: 'test@gmail.com',
                        isTemporaryPassword: false,
                        profileImageURL: 'https://www.google.com'
                    }
                });
            });
        });

        describe('When unsuccessful', () => {

            it('should pass an error object and no userData', () => {
                firebase.createUser({
                    email: 'test@gmail.com'
                });

                expect(handleResponse).toHaveBeenCalledWith(new Error('Error'), null);
            });
        });
    });
});
