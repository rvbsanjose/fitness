/* eslint-disable */
const React = require('react');
/* eslint-enable */

const Drawer = React.createClass({
    render() {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">
                    <img className="android-logo-image" src="images/android-logo-white.png" />
                </span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">About</a>
                    <a className="mdl-navigation__link" href="">Contact</a>
                    <a className="mdl-navigation__link" href="">Coaches</a>
                    <div className="mdl-layout-spacer"></div>
                </nav>
            </div>
        );
    }
});

module.exports = Drawer;
