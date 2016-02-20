const trainersEnum = require('../../enums/trainers');

function allTrainers(state, action) {

}

/**
 * Get a list
 * @param  {object} state  Current representation of the trainers state
 * @param  {object} action Object containing the requested action and requested trainer
 * @return {object}        The requested trainer
 */
function getTrainer(state, action) {

}

module.exports = (state = {}, action) => {
    switch(action.type) {
        case trainersEnum.ALL_TRAINERS:
            return allTrainers(state, action);
        case trainersEnum.GET_TRAINER:
            return getTrainer(state, action);
        default:
            return state;
    }
};
