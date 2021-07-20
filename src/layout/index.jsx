import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';
import Footer from '../components/footer';
import useStyles from './styles';

const Layout = ({Component}) => {
	const classes = useStyles();

	return (
		<section className={classes.layout}>
			<Header />

			<main className={classes.main}>
				<Component />
			</main>

			<Footer />
		</section>
	);
};

Layout.propTypes = {
	Component: PropTypes.func.isRequired
};

export default Layout;
