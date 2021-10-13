import React, {useEffect, useRef} from 'react';
import {Grid, List, ListItem} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import {capitalize} from 'lodash';
import clsx from 'clsx';
import useStyles from './styles';
import MobileMenu from './mobile-menu';
import sections from '../../pages/main/sections';

const Header = ({scrollToTarget, currentSection}) => {
	const classes = useStyles();
	const header = useRef();
	const onScroll = () => {
		const scroll = window.scrollY;

		if (scroll === 0) {
			header.current.classList.remove('header-white');
			header.current.classList.remove('header-short');
		} else if (scroll > 0 && scroll < 100) {
			header.current.classList.add('header-white');
			header.current.classList.remove('header-short');
		} else {
			header.current.classList.add('header-white');
			header.current.classList.add('header-short');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<Grid container className={classes.root} ref={header}>
			<MobileMenu currentSection={currentSection} scrollToTarget={scrollToTarget} />

			<Grid className={classes.navBar}>
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
								onClick={e => {
									e.preventDefault();
									scrollToTarget(name);
								}}
							>
								{capitalize(name)}
							</a>
						</ListItem>
					))}
				</List>
			</Grid>
		</Grid>
	);
};

Header.propTypes = {
	currentSection: PropTypes.string,
	scrollToTarget: PropTypes.func.isRequired
};

export default Header;
