const React = require('react');

// Add in header specific styles to override MDL defaults
require('./header.scss');

const Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    componentDidMount() {
        this.refs.search.addEventListener('click', this.goToSearchView);
    },

    componentWillUnmount() {
        this.refs.search.removeEventListener('click', this.goToSearchView);
    },

    goToSearchView(e) {
        e.preventDefault();

        this.context.router.push('/search');
    },

    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Fitness</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation">
                        <a ref="search"
                          className="mdl-navigation__link mdl-typography--text-uppercase mdl-layout--large-screen-only"
                          href="#">
                          About
                        </a>
                        <a ref="search"
                          className="mdl-navigation__link mdl-typography--text-uppercase mdl-layout--large-screen-only"
                          href="#">
                          Contact
                        </a>
                        <a ref="search"
                          className="mdl-navigation__link mdl-typography--text-uppercase mdl-layout--large-screen-only"
                          href="#">
                          Coaches
                        </a>
                    </nav>
                    <button className="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
                        <i className="material-icons">list</i>
                    </button>
                    <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" htmlFor="more-button">
                        <li className="mdl-menu__item">Profile</li>
                        <li className="mdl-menu__item">Account</li>
                    </ul>
                </div>
            </header>
        );
    }
});

module.exports = Header;
