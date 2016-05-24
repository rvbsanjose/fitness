/* eslint-disable */
const React = require('react'),
      Coach = require('./coach'),
      Pagination = require('./pagination'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      connect = require('react-redux').connect,
      coachActions = require('../../actions/coaches');
/* eslint-enable */

require('./search.scss');

const Search = React.createClass({
    propTypes() {
        coaches: React.PropTypes.object.isRequired;
        fetchCoaches: React.PropTypes.func.isRequired;
        addCoachesToStore: React.PropTypes.func.isRequired;
    },

    mixins: [ PureRenderMixin ],

    getInitialState() {
        return {
            page: null,
            zipCode: null,
            hasMore: false,
            isFetching: false
        };
    },

    /**
     * Forces a render on the new state to hide the loading spinner after async fetch is done.
     * @return
     */
    doneFetching() {
        this.setState({
            zipCode: null,
            isFetching: false
        });
    },

    /**
     * Forces a render on the new state to show the loading spinner while async fetch is in progess.
     * @param {number} zipCode Zip code catpured by the input field
     * @return
     */
    whileFetching(zipCode) {
        this.setState({
            zipCode,
            isFetching: true
        });
    },

    /**
     * Parses the user input zip code in the input field and returns a number representation.
     * @return {number} The parse zip code that was captured from the input field
     */
    parseZipCode() {
        this.refs.search.blur();

        const zipCode = +this.refs.search.value || null;

        if (zipCode) {
            this.whileFetching(zipCode);

            return zipCode;
        }
    },

    /**
     * Convert the string representation of the user captured zip code from the input field
     * and converts it to a number.
     * @param {object}  e React synthetic event
     * @return {number}   The current page
     */
    parsePage(e) {
        const page = +e.target.value;

        return page ? page : 1;
    },

    /**
     * Scrolls to top of page after pagination
     * @return
     */
    scrollToTop() {
        this.refs.container.scrollTop = 0;
    },

    /**
     * Updates the component state. Either pulls out the coaches in the Redux store or fetches
     * the collection from Firebase.
     * @param {object} e React synthetic event
     * @return
     */
    updateSearch(e) {
        if (e) {
            e.preventDefault();
        }

        /* eslint-disable */
        const zipCode = this.parseZipCode(),
              page = this.parsePage(e);
        /* eslint-enable */

        if (zipCode) {
            // Scroll user to top of page
            this.scrollToTop();

            const coaches = this.props.coaches.getIn([ zipCode, page ]);

            // Coaches exist in the Redux store
            if (coaches && coaches.size) {
                this.setState({
                    page,
                    zipCode,
                    isFetching: false,
                    hasMore: coaches.size === 10 ? true : false
                });

                return;
            }

            // Couldn't find the requsted range of coaches in the Redux store
            this.props.fetchCoaches(page, zipCode)
                .then(coaches => {
                    this.props.addCoachesToStore(coaches, page, zipCode);
                    this.setState({
                        page,
                        zipCode,
                        isFetching: false,
                        hasMore: coaches && coaches.numChildren() === 10 ? true : false
                    });
                });

            return;
        }

        this.doneFetching();
    },

    render() {
        return (
            <main ref="container" className="mdl-layout__content">
                <div className="search-form mdl-grid">
                    <div className="mdl-layout-spacer"></div>
                    <form onSubmit={this.updateSearch} action="#" className="mdl-cell mdl-cell--3-col">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input ref="search"
                              className="mdl-textfield__input"
                              type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="search" />
                            <label className="mdl-textfield__label" htmlFor="search">
                                Search for a coach by zip code...
                            </label>
                            <span className="mdl-textfield__error">Input is not a number!</span>
                        </div>
                    </form>
                </div>
                <Coach coaches={this.props.coaches} {...this.state} />
                {
                    this.state.zipCode && !this.state.isFetching ?
                      <Pagination updateSearch={this.updateSearch} {...this.state} /> : ''
                }
            </main>
        );
    }
});

function mapStateToProps(state) {
    return {
        coaches: state.get('coaches')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCoaches(page, zipCode) {
            return dispatch(coachActions.fetchCoaches(page, zipCode));
        },

        addCoachesToStore(coaches, page, zipCode) {
            return dispatch(coachActions.addCoachesToStore(coaches, page, zipCode));
        },

        addCoachesToStore(coaches, page, zipCode) {
            return dispatch(coachActions.addCoachesToStore(coaches, page, zipCode));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Search);
