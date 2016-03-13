/* eslint-disable */
const React = require('react'),
      Drawer = require('../drawer'),
      Header = require('../header');
/* eslint-enable */

const App = React.createClass({
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header />
                <Drawer />
                {this.props.children}
            </div>
        );
    }
});

module.exports = App;
