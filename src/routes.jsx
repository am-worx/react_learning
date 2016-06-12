var React = require('react'),
		ReactRouter = require('react-router'),
		Router = ReactRouter.Router,
		Route = ReactRouter.Route,

		CreateHistory = require('history/lib/createHashHistory'),
		History = new CreateHistory({
			queryKey: false
		}),

		Base = require('./components/Base.jsx'),
		Homepage = require('./components/Homepage.jsx'),
		Page1 = require('./components/Page1.jsx'),
		Page2 = require('./components/Page2.jsx');

//import hashHistory from 'react-router';
var Routes = (
	<Router history={History} >
		<Route path="/" component={Base} >
			//<Route path="#" component={Homepage} />
			<Route path="/page1" component={Page1} />
			<Route path="/page2" component={Page2} />
		</Route>
	</Router>
);

module.exports = Routes;