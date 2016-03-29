module.exports = {
    keyIterator(key) {
        return key + '__' + Math.random();
    },

    fullName(person) {
        return person.get('firstName') + ' ' + person.get('lastName');
    },

    trim(text, length) {
        return text.slice(0, length) + '...';
    },

    range(start, stop) {
        const range = [];

        for (let i = start; i <= stop; i++) {
            range.push(i);
        }

        return range;
    }
};
