module.exports = {
    keyIterator(key) {
        return key + '__' + Math.random();
    }
}
