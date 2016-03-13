/* eslint-disable */
const React = require('react'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      keyIterator = require('../../helpers').keyIterator;
/* eslint-enable */

const RadioField = React.createClass({
    propTypes: {
        options: React.PropTypes.array,
        fieldName: React.PropTypes.string.isRequired
    },

    mixins: [ PureRenderMixin ],

    render() {
        return (
            <div>
                {this.props.fieldName}
                {
                    this.props.options.reduce((options, option) => {
                        options.push(
                            <span key={keyIterator(this.props.fieldName)}>
                                {option}
                                <input
                                  type="radio"
                                  name={this.props.fieldName.toLowerCase()}
                                  value={option}
                                />
                            </span>
                        );

                        return options;
                    }, [])
                }
            </div>
        );
    }
});

module.exports = RadioField;
