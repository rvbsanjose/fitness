/* eslint-disable */
const React = require('react'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      connect = require('react-redux').connect,
      helpers = require('../../helpers'),
      trainerActions = require('../../actions/trainers');
/* eslint-enable */

require('./search.scss');

const Search = React.createClass({
    propTypes() {
        trainers: React.PropTypes.object.isRequired;
        fetchTrainers: React.PropTypes.func.isRequired;
        addTrainersToStore: React.PropTypes.func.isRequired;
    },

    mixins: [ PureRenderMixin ],

    getInitialState() {
        return {
            idx: 1,
            zipCode: 95035
        };
    },

    componentDidMount() {
        this.updateSearch();
    },

    componentDidUpdate() {
        if (this.state.zipCode === +this.props.params.zipCode) {
            return;
        }

        this.updateSearch();
    },

    updateSearch() {
        const zipCode = this.state.zipCode;

        const trainers = this.props.trainers.getIn([ zipCode, 1 ]);

        if (trainers && trainers.size) {
            this.setState({
                idx: 1,
                zipCode: zipCode
            });

            return;
        }

        this.props.fetchTrainers(1, zipCode)
            .then(trainers => {
                this.props.addTrainersToStore(trainers, 1, zipCode);
                this.setState({ zipCode: zipCode });
            });
    },

    render() {
        const trainers = this.props.trainers.getIn([
            this.state.zipCode, this.state.idx
        ]) || [];

        return (
            <div className="search">
                <div className="mdl-grid">
                    {
                        trainers.reduce((trainers, trainer, idx) => {
                            trainers.push(
                                <div key={helpers.keyIterator(idx)} className="mdl-card mdl-shadow--2dp mdl-cell">
                                    <div
                                      className="mdl-card__title mdl-card--expand"
                                      style={{background: 'url(' + trainer.get('profilePic') + ') center / cover'}}>
                                    </div>
                                    <div className="mdl-card__supporting-text">
                                        <h2 className="mdl-card__title-text">
                                            {helpers.fullName(trainer)}
                                        </h2>
                                        {helpers.trim(trainer.get('experience'), 75)}
                                    </div>
                                    <div className="mdl-card__actions mdl-card--border">
                                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                                          View Details
                                        </a>
                                    </div>
                                </div>
                            );

                            return trainers;
                        }, [])
                    }
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        trainers: state.get('trainers')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTrainers(idx, zipCode) {
            return dispatch(trainerActions.fetchTrainers(idx, zipCode));
        },

        addTrainersToStore(trainers, idx, zipCode) {
            return dispatch(trainerActions.addTrainersToStore(trainers, idx, zipCode));
        }
    };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Search);
