import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Particles from 'react-particles-js';
import useStyles from './styles';
import './particles.css';
import imageSrc from '../../assets/images/developer.png';

const PARTICLES_PARAMS = {
	particles: {
		number: {
			value: 50
		},
		size: {
			value: 3
		}
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			}
		}
	}
};

export default () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Grid
				container
				className={classes.container}
				alignItems="center"
				justifyContent="center"
				lg={8}
			>
				<div className={classes.imgContainer}>
					<img src={imageSrc} className={classes.img} />
				</div>

				<Typography variant="h3" component="h1" align="center" className={classes.text}>
					Hi, my name is Radik Zangirov and I am frontend developer based at Chelyabinsk, Russia.
				</Typography>
			</Grid>

			<Particles params={PARTICLES_PARAMS} />
		</section>
	);
};
