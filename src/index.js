/* eslint-disable */
const React = require('react'),
      ReactDOM = require('react-dom'),
      Router = require('react-router').Router,
      Route = require('react-router').Route,
      Provider = require('react-redux').Provider,
      Service = require('./lib/service'),
      store = require('./store/createStore'),
      Firebase = require('./services/firebase'),
      serviceEnums = require('./enums/services'),
      hashHistory = require('react-router').hashHistory;
/* eslint-enable */

const service = Service.getInstance();

// Register the service
service.register({
    name: serviceEnums.FIREBASE,
    service: Firebase
});

// Consume the service
service.utilize(serviceEnums.FIREBASE);

// Component views
/* eslint-disable */
const App = require('./components/app'),
      Search = require('./components/search');
/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/search" component={Search}></Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('fitness')
);
