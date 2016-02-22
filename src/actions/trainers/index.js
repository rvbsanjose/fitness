/* eslint-disable */
const Service = require('../../lib/service'),
      serviceEnums = require('../../enums/services'),
      trainerEnums = require('../../enums/trainers'),
      firebaseTableEnums = require('../../enums/firebase/tableEnums'),
      firebase = Service.getInstance().utilize(serviceEnums.FIREBASE);
/* eslint-enable */

/**
 * Creates the payload for the Redux dispatcher to consume. This function is only called
 * when Firebase has return a successful snapshot of trainer data
 * @param  {object} trainer  Trainer data in Firebase table for trainers
 * @return {object}
 */
function addTrainertoStore(trainer) {
    return {
        type: trainerEnums.ADD_TRAINER_TO_STORE,
        trainer
    };
}

/**
 * Fetches a trainer saved in the Firebase trainers table
 * @param  {string} id ID which represents the trainers in Firebase trainers table
 * @param  {function}  Callback function to handle the response from Firebase
 * @return {object}    Trainer data in Firebase table for trainers
 */
function fetchTrainerById(id) {
    return dispatch => {
        return firebase.child(firebaseTableEnums.trainers + '/' + id).on('value', trainer => {
            dispatch(addTrainertoStore(trainer.val()));
        });
    };
}

module.exports = {
    fetchTrainerById
};
