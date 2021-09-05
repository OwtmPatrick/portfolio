import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from '../layout';
import routes from './routes';
import pages from '../pages';

export default () => (
	<Router basename={process.env.PUBLIC_URL}>
		<Switch>
			{routes.map(({name, url}) => (
				<Route key={name} path={url} exact>
					<Layout Component={pages[name]} />
				</Route>
			))}
		</Switch>
	</Router>
);
