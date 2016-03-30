/* eslint-disable */
const React = require('react'),
      TestUtils = require('react-addons-test-utils'),
      Pagination = require('../../../src/components/search/pagination');
/* eslint-enable */

describe('The pagination component', () => {

    /**
     * Tests whether page links will have the correct CSS classes applied
     */
    describe('Properly sets the CSS classList', () => {

        let view;

        it('should not render any pagination links if results less then 10 and on first page', () => {
            view = render({
                page: 1,
                hasMore: false
            });

            const links = TestUtils.scryRenderedDOMComponentsWithTag(view, 'button');

            expect(links.length).toEqual(0);
        });

        it('should render only one link as active', () => {
            view = render({
                page: 1,
                hasMore: true
            });

            const active = TestUtils.scryRenderedDOMComponentsWithClass(view, 'active-page');

            expect(active.length).toEqual(1);
        });
    });

    /**
     * Tests whether the link will have the proper text
     */
    describe('Rendering the text on the links', () => {

        let view;

        it('should return the page number if current page', () => {
            view = render({
                page: 1
            });

            expect(view.getPageName(1)).toEqual(1);
        });

        it('should return previous page text as \'Go back\'', () => {
            view = render({
                page: 2
            });

            expect(view.getPageName(1)).toEqual('Go back');
        });

        it('should return next page text as \'Next page\'', () => {
            view = render({
                page: 2
            });

            expect(view.getPageName(3)).toEqual('Next page');
        });
    });

    /**
     * Tests whether the page ranges are built correctly
     */
    describe('Build the page range', () => {

        let view;

        it('should not build a range of links if on the first page and less then 10 results', () => {
            view = render({
                page: 1,
                hasMore: false
            });

            expect(view.buildPageRange()).toEqual([]);
        });

        it('should build a range of pages from 1 to 2', () => {
            view = render({
                page: 1,
                hasMore: true
            });

            expect(view.buildPageRange()).toEqual([ 1, 2]);
        });

        it('shold build a range of pages from 1 to 3', () => {
            view = render({
                page: 2,
                hasMore: true
            });

            expect(view.buildPageRange()).toEqual([ 1, 2, 3 ]);
        });
    });
});

function render(props) {
    return TestUtils.renderIntoDocument(<Pagination {...props} />);
}
