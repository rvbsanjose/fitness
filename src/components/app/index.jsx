/* eslint-disable */
const React = require('react'),
      Drawer = require('../drawer'),
      Header = require('../header');
/* eslint-enable */

const App = React.createClass({
    render() {
        return (
            <div className="app">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
                    <Header />
                    <Drawer />
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;
