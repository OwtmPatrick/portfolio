import React, {useState} from 'react';
import {
	IconButton, Drawer, List, ListItem
} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import routes from '../../../router/routes';

const MobileMenu = ({pathname}) => {
	const [isDrawerOpened, setDrawerOpened] = useState(false);
	const classes = useStyles();

	return (
		<>
			<IconButton
				aria-label="menu"
				className={classes.icon}
				onClick={() => setDrawerOpened(!isDrawerOpened)}
			>
				<MenuIcon />
			</IconButton>

			<Drawer anchor="left" open={isDrawerOpened} onClose={() => setDrawerOpened(false)}>
				<List className={classes.list}>
					{routes.map(({name, url}) => (
						<ListItem key={name} className={classes.listItem}>
							<Link
								to={url}
								className={pathname === url ? clsx(classes.link, classes.linkActive) : classes.link}
							>
								{name}
							</Link>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

MobileMenu.propTypes = {
	pathname: PropTypes.string.isRequired
};

export default MobileMenu;

