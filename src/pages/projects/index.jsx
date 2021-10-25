import React from 'react';
import {Grid, Typography} from '@material-ui/core';
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
			<Typography variant="h2" component="h2" className={classes.title}>
				Projects
			</Typography>

			<Grid lg={10} className={classes.projectsContainer}>
				{projects.map(project => (
					<Grid item className={classes.project}>
						<Project {...project} />
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
