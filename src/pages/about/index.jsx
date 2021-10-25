import React from 'react';
import {
	Grid, Typography, List, ListItem, Icon
} from '@material-ui/core';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import clsx from 'clsx';
import useStyles from './styles';
import jobs from './jobs.json';
import Skillset from '../../components/skillset';

export default () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Grid container direction="column" alignItems="center" className={classes.container}>
				<Grid item lg={10} className={classes.textContainer}>
					<Typography variant="h2" component="h1" className={clsx(classes.title, 'animate__animated animate__fadeInDown')}>
						What I do
					</Typography>
				</Grid>

				<Grid item lg={10} className={classes.textContainer}>
					<Typography variant="h4" component="h2" className="animate__animated animate__fadeInRight animate__delay-1s">
						Fullstack JS developer who is interested in Machine learning
					</Typography>
				</Grid>

				<Grid item lg={10} className={classes.textContainer}>
					<List>
						{jobs.map(({text}, index) => (
							<ListItem key={text} className={clsx(classes.point, `animate__animated animate__fadeInUp animate__delay-${2 + index}s`)}>
								<Icon className={classes.pointIcon}>
									<ArrowForwardIosSharpIcon />
								</Icon>

								<Typography component="p" className={classes.pointText}>
									{text}
								</Typography>
							</ListItem>
						))}
					</List>

					<Skillset />
				</Grid>
			</Grid>
		</section>
	);
};
