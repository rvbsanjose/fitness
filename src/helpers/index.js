module.exports = {
    keyIterator(key) {
        if (!key) {
            throw new Error('A key must be present to generate a unique key identifier for React');
        }

        return key + '__' + Math.random();
    },

    fullName(person) {
        if (!person) {
            throw new Error('An immutable person object must be present');
        }

        return person.get('firstName') + ' ' + person.get('lastName');
    },

    trim(text, length) {
        if (!text || !length) {
            throw new Error('Text and length must be passed to trim');
        }

        return text.slice(0, length) + '...';
    },

    range(start, stop) {
        if (!start || !stop) {
            throw new Error('Start and stop positions must be present to create a range');
        }

        const range = [];

        for (let i = start; i <= stop; i++) {
            range.push(i);
        }

        return range;
    }
};
