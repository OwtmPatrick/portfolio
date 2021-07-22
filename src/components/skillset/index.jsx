import React from 'react';
import {
	Grid, Tooltip, Icon
} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import useStyles from './styles';
import icons from './icons';
import customIcons from './custom-icons';

export default () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<Grid container spacing={4} className={clsx(classes.container, 'animate__animated animate__fadeInUp animate__delay-5s')}>
				{Object.entries(icons).map(([key, value]) => (
					<Grid item key={key}>
						<Tooltip title={key} className={classes.tooltip}>
							<Icon>
								<FontAwesomeIcon icon={value} className={classes.icon} />
							</Icon>
						</Tooltip>
					</Grid>
				))}

				{Object.entries(customIcons).map(([key, value]) => (
					<Grid item key={key}>
						<Tooltip title={key} aria-label="add" className={classes.tooltip}>
							{value()}
						</Tooltip>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
