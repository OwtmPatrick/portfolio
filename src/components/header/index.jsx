import React from 'react';
import {Grid, List, ListItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';
import MobileMenu from './mobile-menu';
import routes from '../../router/routes';

export default () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<MobileMenu />

			<Grid className={classes.navBar}>
				<List className={classes.list}>
					{routes.map(({name, url}) => (
						<ListItem key={name} className={classes.listItem}>
							<Link to={url} className={classes.link}>
								{name}
							</Link>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
};
