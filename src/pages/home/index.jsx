import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';
import imageSrc from '../../assets/images/me.png';

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
			<Grid item className={classes.content} lg={10}>
				<Grid item className={classes.textContainer}>
					<Typography variant="h2" component="h1" className={classes.intro}>
						Introduction
					</Typography>

					<Typography
						variant="body2"
						component="p"
						align="center"
						className={clsx(classes.text)}
					>
						Hi, my name is Radik Zangirov and I am Javascript developer based at
						Chelyabinsk, Russia.
					</Typography>
				</Grid>

				<Grid item>
					<div className={clsx(classes.imgContainer)}>
						<img src={imageSrc} className={classes.img} />
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
};
