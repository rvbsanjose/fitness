/* eslint-disable */
const React = require('react'),
      PureRenderMixin = require('react-addons-pure-render-mixin'),
      connect = require('react-redux').connect,
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
          <main className="mdl-layout__content">
            <div className="mdl-grid">
              <div className="mdl-layout-spacer"></div>
              <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                  <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="sample6">
                    <i className="material-icons">search</i>
                  </label>
                  <div className="mdl-textfield__expandable-holder">
                    <input className="mdl-textfield__input" type="text" id="sample6" />
                    <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
                  </div>
                </div>
              </form>
              {
                trainers.reduce((trainers, trainer, idx) => {
                  trainers.push(
                    <div className="section--center mdl-grid mdl-shadow--2dp mdl-cell mdl-cell--12-col-desktop">
                      <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color-text--white" style={{background: 'url(' + trainer.get('profilePic') + ') center / cover'}}></header>
                      <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                        <div className="mdl-card__supporting-text">
                          <h4>{trainer.get('firstName') + ' ' + trainer.get('lastName')}</h4>
                          {trainer.get('experience')}
                        </div>
                        <div className="mdl-card__actions">
                          <a href="#" className="mdl-button">More Details</a>
                        </div>
                      </div>
                    </div>
                  );

                  return trainers;
                }, [])
              }
            </div>
          </main>
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
