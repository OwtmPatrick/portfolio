import React from 'react';
import {Grid, Link} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useStyles from './styles';

export default () => {
	const classes = useStyles();

	return (
		<Grid container spacing={2} justifyContent="center" className={classes.root}>
			<Grid item>
				<Link href="https://github.com/owtmpatrick" rel="noopener noreferrer">
					<GitHubIcon className={classes.icon} />
				</Link>
			</Grid>

			<Grid item>
				<Link
					href="https://www.linkedin.com/in/radik-zangirov-b0828a159"
					rel="noopener noreferrer"
				>
					<LinkedInIcon className={classes.icon} />
				</Link>
			</Grid>
		</Grid>
	);
};
