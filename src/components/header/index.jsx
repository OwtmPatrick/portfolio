import React from 'react';
import {Grid, List, ListItem} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './styles';
import MobileMenu from './mobile-menu';
import routes from '../../router/routes';

const Header = ({location: {pathname}}) => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<MobileMenu pathname={pathname} />

			<Grid className={classes.navBar}>
				<List className={classes.list}>
					{routes.map(({name, url}) => (
						<ListItem key={name} className={classes.listItem}>
							<Link to={url} className={pathname === url ? clsx(classes.link, classes.linkActive) : classes.link}>
								{name}
							</Link>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
};

Header.propTypes = {
	location: PropTypes.object.isRequired
};

export default withRouter(Header);
