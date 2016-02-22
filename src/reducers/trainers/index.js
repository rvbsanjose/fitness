/* eslint-disable */
const Immutable = require('immutable'),
      trainerEnums = require('../../enums/trainers'),
      trainerRecord = require('../../records/trainers/trainersRecord');
/* eslint-enable */

/**
 * Sets the initial state of trainers in the Redux store
 * @return {object} Immutable object
 */
function makeInitialState() {
    return Immutable.fromJS({
        trainers: Immutable.Map({})
    });
}

/**
 * Creates a new Immutable Record for a trainer
 * @param  {object} trainer Trainer data mapped to an Immutable Record
 * @return {object}         A new Immutable Record for a trainer
 */
function makeTrainerRecord(trainer) {
    return trainerRecord(trainer);
}

/**
 * Adds a trainer to the Redux store
 * @param  {object} state  Current state of the Redux store
 * @param  {action} action Properties of type<string> and trainer<object>
 * @return {object}        New Redux store state with the added trainer
 */
function addTrainerToStore(state, action) {
    const trainer = makeTrainerRecord(action.trainer);

    return state.setIn([ 'trainers', trainer.id ], trainer);
}

module.exports = (state = makeInitialState(), action) => {
    switch(action.type) {
        case trainerEnums.ADD_TRAINER_TO_STORE:
            return addTrainerToStore(state, action);
        default:
            return state;
    }
};
