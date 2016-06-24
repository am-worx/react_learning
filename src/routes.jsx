var React = require('react'),
		ReactRouter = require('react-router'),
		Router = ReactRouter.Router,
		Route = ReactRouter.Route,
		IndexRoute = ReactRouter.IndexRoute,

			// CreateHistory = require('history/lib/createHashHistory'),
			// History = new CreateHistory({
			// 	queryKey: false
			// }),

		Base = require('./components/Base.jsx'),
		Homepage = require('./components/Homepage.jsx'),
		EmailField = require('./components/EmailField.jsx'),
		Page1 = require('./components/Page1.jsx'),
		Page2 = require('./components/Page2.jsx');

import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
var Routes = (
	<Router history={appHistory} >
		<Route path="/" component={Base} >
			<Route path="page1" component={Page1} />
			<Route path="page2" component={Page2} />
			<Route path="*" component={Homepage} />
			<IndexRoute component={EmailField} />
		</Route>
	</Router>
);

module.exports = Routes;
