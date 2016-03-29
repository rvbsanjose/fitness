/* eslint-disable */
const Immutable = require('immutable'),
      coachEnums = require('../../../src/enums/coaches'),
      firebaseTableEnums = require('../../../src/enums/firebase/tableEnums'),
      coachActions = require('../../../src/actions/coaches'),
      userDataMock = require('../../mocks/firebase/userDataMock'),
      firebaseMock = require('../../mocks/firebase/firebaseMock'),
      createMockStore = require('../../utils/createMockStore');
/* eslint-enable */

describe('The coaches actions', () => {

    describe('Fetching a collection of coaches', () => {

        let expectedActions;

        it('should dispatch the correct actions', done => {
            expectedActions = [
                action => {
                    expect(action).toEqual({
                        type: coachEnums.ADD_COACHES_TO_STORE,
                        coaches: [ {
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
                        type: coachEnums.ADD_COACHES_TO_STORE,
                        coaches: [ userDataMock ],
                        idx: 1,
                        zipCode: 95035
                    });
                });
            });

            store.dispatch(coachActions.fetchCoaches(1, 95035, 10));
        });
    });
});

function makeInitialState() {
    return Immutable.fromJS({
        coaches: Immutable.Map()
    });
}
