import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';

const Layout = ({Component}) => (
	<>
		<Header />

		<Component />
	</>
);

Layout.propTypes = {
	Component: PropTypes.func.isRequired
};

export default Layout;
