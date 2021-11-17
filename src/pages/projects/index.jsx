import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import clsx from 'clsx';
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
				<Grid md={8} lg={8} className={classes.projectContainer}>
					<Grid item className={clsx(classes.project, 'first')}>
						<Project {...projects[0]} />
					</Grid>
				</Grid>

				<Grid md={8} lg={4} className={classes.projectContainer}>
					<Grid item className={clsx(classes.project, 'second')}>
						<Project {...projects[1]} />
					</Grid>

					<Grid item className={classes.project}>
						<Project {...projects[2]} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
