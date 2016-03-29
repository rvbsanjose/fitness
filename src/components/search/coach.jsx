/* eslint-disable */
const React = require('react'),
      Spinner = require('../spinner'),
      Immutable = require('immutable'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      helpers = require('../../helpers');
/* eslint-enable */

const Coaches = React.createClass({
    propTypes() {
        coaches: React.PropTypes.object.isRequired;
        zipCode: React.PropTypes.number.isRequired;
        page: React.PropTypes.number.isRequired;
    },

    mixins: [ PureRenderMixin ],

    /**
     * Creates the list of class names to apply to the parent element.
     * @return {string}
     */
    getClassNames() {
        return 'mdl-card mdl-shadow--2dp mdl-cell mdl-cell--3-col mdl-cell--12-col-phone mdl-cell--4-col-tablet';
    },

    /**
     * Iterates through a collection of coaches to show. Messages are shown to the user
     * if no coaches exists in the search zip code.
     * @return The rendered elements for React
     */
    renderResults() {
        if (!this.props.zipCode) {
            return <div className="empty">Please enter a zip code to search for a coach.</div>;
        }

        if (this.props.isFetching) {
            return <Spinner />;
        }

        const coaches = this.props.coaches.getIn([
            this.props.zipCode, this.props.page
        ]) || Immutable.OrderedMap();

        if (!coaches.size) {
            return <div className="empty">Unfortunately we couldn't find coaches in your zip code.</div>;
        }

        return coaches.reduce((coaches, coach, idx) => {
            coaches.push(
                <div key={helpers.keyIterator(idx)} className={this.getClassNames()}>
                    <div
                      className="mdl-card__title mdl-card--expand"
                      style={{background: 'url(' + coach.get('profilePic') + ') center / cover'}}>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <h2 className="mdl-card__title-text">
                            {helpers.fullName(coach)}
                        </h2>
                        {helpers.trim(coach.get('experience'), 75)}
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                          View Details
                        </a>
                    </div>
                </div>
            );

            return coaches;
        }, []);
    },

    render() {
        return (
            <div className="search mdl-grid">
                {this.renderResults()}
            </div>
        );
    }
});

module.exports = Coaches;
