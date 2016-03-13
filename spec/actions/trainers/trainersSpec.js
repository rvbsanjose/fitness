/* eslint-disable */
const Immutable = require('immutable'),
      trainerEnums = require('../../../src/enums/trainers'),
      firebaseTableEnums = require('../../../src/enums/firebase/tableEnums'),
      trainerActions = require('../../../src/actions/trainers'),
      userDataMock = require('../../mocks/firebase/userDataMock'),
      firebaseMock = require('../../mocks/firebase/firebaseMock'),
      createMockStore = require('../../utils/createMockStore');
/* eslint-enable */

describe('The trainers actions', () => {

    describe('Fetching a collection of trainers', () => {

        let expectedActions;

        it('should dispatch the correct actions', done => {
            expectedActions = [
                action => {
                    expect(action).toEqual({
                        type: trainerEnums.ADD_TRAINERS_TO_STORE,
                        trainers: [ {
                            address: '555 Atmosphere Lane',
                            city: 'Playground',
                            firstName: 'Jessie',
                            idx: 1,
                            lastName: 'Poop',
                            state: 'CA',
                            zipCode: 95035
                        } ],
                        idx: 1,
                        zipCode: 95035
                    });
                }
            ];

            const store = createMockStore(makeInitialState(), expectedActions, done);

            /* eslint-disable */
            spyOn(firebase, 'child').and.callFake(tableName => {
            /* eslint-enable */
                firebaseMock.child(tableName).on('value', () => {
                    store.dispatch({
                        type: trainerEnums.ADD_TRAINERS_TO_STORE,
                        trainers: [ userDataMock ],
                        idx: 1,
                        zipCode: 95035
                    });
                });
            });

            store.dispatch(trainerActions.fetchTrainers(1, 95035, 10));
        });
    });
});

function makeInitialState() {
    return Immutable.fromJS({
        trainers: Immutable.Map()
    });
}
