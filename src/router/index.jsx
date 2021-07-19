import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from '../layout';
import pages from '../pages';

const {Home, About} = pages;

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact>
				<Layout>
					<Home />
				</Layout>
			</Route>

			<Route path="/about" exact>
				<Layout>
					<About />
				</Layout>
			</Route>
		</Switch>
	</Router>
);
