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

    describe('Adding a new trainer', () => {

        it('should add the trainer to the Redux store', () => {
            const state = trainersReducer(trainersReducer(makeInitialState(), {}), {
                type: trainerEnums.ADD_TRAINER_TO_STORE,
                trainer: userDataMock
            });

            expect(state).toEqualImmutable(Immutable.fromJS({
                trainers: Immutable.Map({
                    test: trainersRecord(userDataMock)
                })
            }));
        });
    });
});

function makeInitialState() {
    return Immutable.fromJS({
        trainers: Immutable.Map()
    });
}
