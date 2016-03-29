/* eslint-disable */
const Service = require('../../lib/service'),
      serviceEnums = require('../../enums/services'),
      coachEnums = require('../../enums/coaches'),
      firebaseTableEnums = require('../../enums/firebase/tableEnums'),
      firebase = Service.getInstance().utilize(serviceEnums.FIREBASE);
/* eslint-enable */

/**
 * Creates the payload for the Redux dispatcher to consume. This funciton is only called
 * when Firebase has return a successful snapshot of coaches data
 * @param {object} coaches A collection of coaches stored in Firebase
 */
function addCoachesToStore(coaches, idx, zipCode) {
    return {
        type: coachEnums.ADD_COACHES_TO_STORE,
        coaches,
        idx,
        zipCode
    };
}

/**
 * Fetches a collection of coaches in the Firebase coaches table starting at an index.
 * @param  {number} idx     An idx of which to start fetching records from
 * @param  {number} zipCode Which zip code of coaches to fetch by
 * @return {object}         A collection of coaches
 */
function fetchCoaches(idx, zipCode) {
    const actualIdx = idx - 1;

    return (dispatch, getState) => {
        const coaches = getState().getIn([ 'coaches', zipCode, idx ]);

        if (coaches && coaches.size) {
            throw new Error('The requested coaches is already available in the Redux store');
        }

        return firebase
            .child(firebaseTableEnums.coaches)
            .child(zipCode)
            .orderByChild('idx')
            .startAt(actualIdx * 10)
            .limitToFirst(10)
            .once('value');
    };
}

module.exports = {
    fetchCoaches,
    addCoachesToStore
};
