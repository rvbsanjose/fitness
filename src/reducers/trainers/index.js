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
 * Adds a list of trainers not currently in the Redux store organized by an idx
 * @param {object} state  Current state/representation of the Redux store
 * @param {object} action Contains a list of trainers, action type, idx and zipCode
 */
function addTrainersToStore(state, action) {
    const trainers = Immutable.OrderedMap().withMutations(map => {
        action.trainers.forEach(trainer => {
            map.set(trainer.key(), makeTrainerRecord(trainer.val()));
        });
    });

    return state.setIn([ 'trainers', action.zipCode, action.idx ], trainers);
}

module.exports = (state = makeInitialState(), action) => {
    switch(action.type) {
        case trainerEnums.ADD_TRAINERS_TO_STORE:
            return addTrainersToStore(state, action);
        default:
            return state;
    }
};
