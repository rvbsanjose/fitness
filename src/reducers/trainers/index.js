/* eslint-disable */
const Immutable = require('immutable'),
      trainerEnums = require('../../enums/trainers'),
      trainerRecord = require('../../records/trainers/trainersRecord');
/* eslint-enable */

function makeInitialState() {
    return Immutable.fromJS({
        trainers: Immutable.Map()
    });
}

function makeTrainerRecord(trainer) {
    return trainerRecord({
        id: trainer.uid,
        provider: trainer.provider,
        email: trainer.password.email,
        profileImageUrl: trainer.password.profileImageURL
    });
}

function addTrainerToStore(state, action) {
    /* eslint-disable */
    const trainer = makeTrainerRecord(action.trainer),
          retState = state.get('trainers');
    /* eslint-enable */

    return retState.set(trainer.id, trainer);
}

module.exports = (state = makeInitialState(), action) => {
    switch(action.type) {
        case trainerEnums.ADD_TRAINER_TO_STORE:
            return addTrainerToStore(state, action);
        default:
            return state;
    }
};
