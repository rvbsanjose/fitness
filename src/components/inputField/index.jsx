/* eslint-disable */
const React = require('react'),
      PureRenderMixin = require('react-addons-pure-render-mixin');
/* eslint-enable */

const InputField = React.createClass({
    propTypes: {
        placeholder: React.PropTypes.string,
        fieldName: React.PropTypes.string.isRequired
    },

    mixins: [ PureRenderMixin ],

    getDefaultProps() {
        return {
            placeholder: ''
        };
    },

    render() {
        return (
            <div>
                {this.props.fieldName} <input type="text" placeholder={this.props.placeholder} />
            </div>
        );
    }
});

module.exports = InputField;
