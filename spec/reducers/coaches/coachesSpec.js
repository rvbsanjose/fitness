/* eslint-disable */
const Immutable = require('immutable'),
      coachesRecord = require('../../../src/records/coaches/coachesRecord'),
      coachEnums = require('../../../src/enums/coaches'),
      userDataMock = require('../../mocks/firebase/userDataMock'),
      coachesReducer = require('../../../src/reducers/coaches');
/* eslint-enable */

describe('The coaches reducer', () => {

    describe('The initial state', () => {

        it('should properly set the initial state of the Redux store for coaches', () => {
            const state = coachesReducer(makeInitialState(), {});

            expect(state).toEqualImmutable(Immutable.fromJS({
                coaches: Immutable.Map()
            }));
        });
    });

    describe('Adding coaches to the redux store', () => {

        it('should properly set the coaches into the specified idx for retrieving', () => {
            const state = coachesReducer(coachesReducer(makeInitialState(), {}), {
                type: coachEnums.ADD_COACHES_TO_STORE,
                coaches: [
                    {
                        key: function() {
                            return 'test1';
                        },
                        val: function() {
                            return userDataMock;
                        }
                    },
                    {
                        key: function() {
                            return 'test2';
                        },
                        val: function() {
                            return userDataMock;
                        }
                    }
                ],
                idx: 1,
                zipCode: 95035
            });

            expect(state.getIn([ 'coaches', 95035, 1 ]).size).toEqual(2);
        });
    });
});

function makeInitialState() {
    return Immutable.fromJS({
        coaches: Immutable.Map()
    });
}
