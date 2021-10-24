import React from 'react';
import {Grid} from '@material-ui/core';
import useStyles from './styles';
import Project from '../../components/project';
import projects from './projects';

export default () => {
	const classes = useStyles();

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
			className={classes.container}
		>
			{projects.map(project => (
				<Grid item className={classes.project}>
					<Project {...project} />
				</Grid>
			))}
		</Grid>
	);
};
