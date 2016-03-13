/* eslint-disable */
const React = require('react'),
      RadioField = require('../radioField'),
      InputField = require('../inputField'),
      config = require('../../config/config'),
      keyIterator = require('../../helpers').keyIterator;
/* eslint-enable */

const Signup = React.createClass({
    render() {
        return (
            <div>
                {
                    config.signup.questions.general.reduce((elements, question) => {
                        if (question.type === 'input') {
                            elements.push(
                                <InputField key={keyIterator(question.fieldName)} {...question} />
                            );
                        } else if (question.type === 'radio') {
                            elements.push(
                                <RadioField key={keyIterator(question.fieldName)} {...question} />
                            );
                        }

                        return elements;
                    }, [])
                }
            </div>
        );
    }
});

module.exports = Signup;
