const React = require('react');

const Spinner = React.createClass({
    render() {
        return (
            <div className="mdl-progress mdl-js-progress mdl-progress__indeterminate is-upgraded" data-upgraded=",MaterialProgress">
                <div className="progressbar bar bar1" style={{ width: '0%' }}></div>
                <div className="bufferbar bar bar2" style={{ width: '100%' }}></div>
                <div className="auxbar bar bar3" style={{ width: '0%' }}></div>
            </div>
        );
    }
});

module.exports = Spinner;
