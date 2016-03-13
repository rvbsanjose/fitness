/* eslint-disable */
const Immutable = require('immutable'),
      trainersRecord = require('../../../src/records/trainers/trainersRecord'),
      trainerEnums = require('../../../src/enums/trainers'),
      userDataMock = require('../../mocks/firebase/userDataMock'),
      trainersReducer = require('../../../src/reducers/trainers');
/* eslint-enable */

describe('The trainers reducer', () => {

    describe('The initial state', () => {

        it('should properly set the initial state of the Redux store for trainers', () => {
            const state = trainersReducer(makeInitialState(), {});

            expect(state).toEqualImmutable(Immutable.fromJS({
                trainers: Immutable.Map()
            }));
        });
    });

    describe('Adding trainers to the redux store', () => {

        it('should properly set the trainers into the specified idx for retrieving', () => {
            const state = trainersReducer(trainersReducer(makeInitialState(), {}), {
                type: trainerEnums.ADD_TRAINERS_TO_STORE,
                trainers: [
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

            expect(state.getIn([ 'trainers', 95035, 1 ]).size).toEqual(2);
        });
    });
});

function makeInitialState() {
    return Immutable.fromJS({
        trainers: Immutable.Map()
    });
}
