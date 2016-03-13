/* eslint-disable */
const Service = require('../../lib/service'),
      serviceEnums = require('../../enums/services'),
      trainerEnums = require('../../enums/trainers'),
      firebaseTableEnums = require('../../enums/firebase/tableEnums'),
      firebase = Service.getInstance().utilize(serviceEnums.FIREBASE);
/* eslint-enable */

/**
 * Creates the payload for the Redux dispatcher to consume. This funciton is only called
 * when Firebase has return a successful snapshot of trainers data
 * @param {object} trainers A collection of trainers stored in Firebase
 */
function addTrainersToStore(trainers, idx, zipCode) {
    return {
        type: trainerEnums.ADD_TRAINERS_TO_STORE,
        trainers,
        idx,
        zipCode
    };
}

/**
 * Fetches a collection of trainers in the Firebase trainers table starting at an index.
 * @param  {number} idx     An idx of which to start fetching records from
 * @param  {number} zipCode Which zip code of trainers to fetch by
 * @return {object}         A collection of trainers
 */
function fetchTrainers(idx, zipCode) {
    const actualIdx = idx - 1;

    return (dispatch, getState) => {
        const trainers = getState().getIn([ 'trainers', zipCode, idx ]);

        if (trainers && trainers.size) {
            throw new Error('The requested trainers is already available in the Redux store');
        }

        return firebase
            .child(firebaseTableEnums.trainers)
            .child(zipCode)
            .orderByChild('idx')
            .startAt(actualIdx * 10)
            .limitToFirst(10)
            .once('value');
    };
}

module.exports = {
    fetchTrainers,
    addTrainersToStore
};
