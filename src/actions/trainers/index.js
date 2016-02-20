const trainerEnums = require('../../enums/trainers');

/**
 * Properly forms the action for the trainers reducer
 * @param  {number} id Id that represents a specific user
 * @return {object}    Properly forms the action for the Redux dispatcher to consume
 */
function findTrainer(id) {
    return {
        type: trainerEnums.FIND_TRAINER,
        id
    };
}

module.exports = {
    findTrainer
};
