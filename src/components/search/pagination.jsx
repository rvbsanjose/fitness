/* eslint-disable */
const React = require('react'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      helpers = require('../../helpers');
/* eslint-enable */

const Pagination = React.createClass({
    propTypes() {
        page: React.PropTypes.number.isRequired;
        updateSearch: React.PropTypes.func.isRequired;
    },

    mixins: [ PureRenderMixin ],

    /**
     * Adds an active-page CSS class to the link if current page
     * @return {string}
     */
    getClassNames(page) {
        if (page === this.props.page) {
            return 'mdl-button mdl-js-button mdl-button--accent active-page';
        }

        return 'mdl-button mdl-js-button mdl-button--accent';
    },

    /**
     * Creates the text to display in the pagination link
     * @return {object} Can be string or number
     */
    getPageName(page) {
        // If current page
        if (page === this.props.page) {
            return page;
        }

        // If previous results
        if (page !== this.props.page && page < this.props.page) {
            return 'Go back';
        }

        // If more results
        return 'Next page';
    },

    /**
     * Builds a range of links to click through
     * @return {array}
     */
    buildPageRange() {
        // No results or less then 10 results
        if (this.props.page === 1 && !this.props.hasMore) {
            return [];
        }

        // If on the first page and has more results to show
        if (this.props.page === 1 && this.props.hasMore) {
            return helpers.range(this.props.page, this.props.page + 1);
        }

        // If past first page and has more results to show
        if (this.props.hasMore) {
            return helpers.range(this.props.page - 1, this.props.page + 1);
        }

        // If on last page of results
        return helpers.range(this.props.page - 1, this.props.page);
    },

    /**
     * Builds the pagination links
     * @return {array}
     */
    renderPagination() {
        const pages = this.buildPageRange();

        return pages.reduce((pages, page, idx) => {
            pages.push(
                <button key={helpers.keyIterator(idx)}
                  onClick={this.props.updateSearch}
                  className={this.getClassNames(page)} value={page}>
                  {this.getPageName(page)}
                </button>
            );

            return pages;
        }, []);
    },

    render() {
        return (
            <div className="pagination mdl-grid">
                {this.renderPagination()}
            </div>
        );
    }
});

module.exports = Pagination;
