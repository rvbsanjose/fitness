/* eslint-disable */
const Immutable = require('immutable'),
      coachEnums = require('../../enums/coaches'),
      coachRecord = require('../../records/coaches/coachesRecord');
/* eslint-enable */

/**
 * Sets the initial state of coaches in the Redux store
 * @return {object} Immutable object
 */
function makeInitialState() {
    return Immutable.fromJS({
        coaches: Immutable.Map({})
    });
}

/**
 * Creates a new Immutable Record for a coach
 * @param  {object} coach Coach data mapped to an Immutable Record
 * @return {object}         A new Immutable Record for a coach
 */
function makeCoachRecord(coach) {
    return coachRecord(coach);
}

/**
 * Adds a list of coaches not currently in the Redux store organized by an idx
 * @param {object} state  Current state/representation of the Redux store
 * @param {object} action Contains a list of coaches, action type, idx and zipCode
 */
function addCoachesToStore(state, action) {
    const coaches = Immutable.OrderedMap().withMutations(map => {
        action.coaches.forEach(coach => {
            map.set(coach.key(), makeCoachRecord(coach.val()));
        });
    });

    return state.setIn([ 'coaches', action.zipCode, action.idx ], coaches);
}

module.exports = (state = makeInitialState(), action) => {
    switch(action.type) {
        case coachEnums.ADD_COACHES_TO_STORE:
            return addCoachesToStore(state, action);
        default:
            return state;
    }
};
