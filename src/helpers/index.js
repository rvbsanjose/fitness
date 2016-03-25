module.exports = {
    keyIterator(key) {
        return key + '__' + Math.random();
    },

    fullName(person) {
        return person.get('firstName') + ' ' + person.get('lastName');
    },

    trim(text, length) {
        return text.slice(0, length) + '...';
    }
};
