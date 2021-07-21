import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Particles from 'react-particles-js';
import clsx from 'clsx';
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
				direction="column"
				alignItems="center"
				justifyContent="center"
				lg={8}
				className={classes.container}
			>
				<div className={clsx(classes.imgContainer, 'animate__animated animate__fadeInUp')}>
					<img src={imageSrc} className={classes.img} />
				</div>

				<Typography variant="h3" component="h1" align="center" className={clsx(classes.text, 'animate__animated animate__fadeInUp animate__delay-1s')}>
					Hi, my name is Radik Zangirov and I am Javascript developer based at Chelyabinsk, Russia.
				</Typography>
			</Grid>

			<Particles params={PARTICLES_PARAMS} />
		</section>
	);
};
