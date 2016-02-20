/* eslint-disable */
const enums = require('../../../src/enums/trainers'),
      actions = require('../../../src/actions/trainers');
/* eslint-enable */

describe('The trainers actions', () => {

    describe('Finding a specific trainer', () => {

        it('should return the correct action for the trainers reducer to consume', () => {
            expect(actions.findTrainer(123)).toEqual({
                type: enums.FIND_TRAINER,
                id: 123
            });
        });
    });
});
