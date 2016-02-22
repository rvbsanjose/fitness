/* eslint-disable */
const trainerEnums = require('../../../src/enums/trainers'),
      firebaseTableEnums = require('../../../src/enums/firebase/tableEnums'),
      trainerActions = require('../../../src/actions/trainers'),
      userDataMock = require('../../mocks/firebase/userDataMock'),
      firebaseMock = require('../../mocks/firebase/firebaseMock'),
      createMockStore = require('../../utils/createMockStore');
/* eslint-enable */

describe('The trainers actions', () => {

    describe('Fetching a trainer by ID', () => {

        let expectedActions;

        it('should dispatch the correct actions', done => {
            expectedActions = [
                action => {
                    expect(action).toEqual({
                        type: trainerEnums.ADD_TRAINER_TO_STORE,
                        trainer: {
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
                        }
                    });
                }
            ];

            const store = createMockStore({}, expectedActions, done);

            /* eslint-disable */
            spyOn(firebase, 'child').and.callFake((tableName) => {
            /* eslint-enable */
                firebaseMock.child(tableName).on('value', () => {
                    store.dispatch({
                        type: trainerEnums.ADD_TRAINER_TO_STORE,
                        trainer: userDataMock
                    });
                });
            });

            store.dispatch(trainerActions.fetchTrainerById(firebaseTableEnums.trainers + '/test'));
        });
    });
});
