import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useStyles from './styles';
import icons from './icons';

const Project = ({
	img, title, github, demo, technoloigies
}) => {
	const classes = useStyles();

	return (
		<div style={{backgroundImage: `url(${img})`}} className={classes.container}>
			<div className={clsx(classes.infoContainer, 'info-container')}>
				<div className={classes.info}>
					<div className={classes.title}>{title}</div>

					<div className={classes.technologies}>
						{technoloigies.map(({type, name}) => (type === 'fontAwesome' ? (
							<FontAwesomeIcon icon={icons[name]} className={classes.icon} />
						) : (
							<div key={name} className={classes.customIcon}>{icons[name]()}</div>
						)))}
					</div>

					<div className={classes.linksWrapper}>
						<a href={github} className={classes.link}>
							Github
						</a>

						<a href={demo} className={clsx(classes.link, classes.demo)}>
							Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Project.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	demo: PropTypes.string.isRequired,
	technoloigies: PropTypes.array.isRequired
};

export default Project;
