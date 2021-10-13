import React, {useState} from 'react';
import {
	IconButton, Drawer, List, ListItem
} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import {capitalize} from 'lodash';
import MenuIcon from '@material-ui/icons/Menu';
import sections from '../../../pages/main/sections';
import useStyles from './styles';

const MobileMenu = ({currentSection, scrollToTarget}) => {
	const [isDrawerOpened, setDrawerOpened] = useState(false);
	const classes = useStyles();
	const scrollToSection = (e, name) => {
		e.preventDefault();
		scrollToTarget(name);
	};

	return (
		<>
			<IconButton
				aria-label="menu"
				className={classes.iconButton}
				onClick={() => setDrawerOpened(!isDrawerOpened)}
			>
				<MenuIcon className={classes.icon} />
			</IconButton>

			<Drawer anchor="left" open={isDrawerOpened} onClose={() => setDrawerOpened(false)}>
				<List className={classes.list}>
					{sections.map(({name}) => (
						<ListItem key={name} className={classes.listItem}>
							<a
								href=""
								className={
									name === currentSection
										? clsx(classes.link, classes.linkActive)
										: classes.link
								}
								onClick={e => scrollToSection(e, name)}
							>
								{capitalize(name)}
							</a>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

MobileMenu.propTypes = {
	currentSection: PropTypes.string,
	scrollToTarget: PropTypes.func.isRequired
};

export default MobileMenu;
