import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
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
							<FontAwesomeIcon key={name} icon={icons[name]} className={classes.icon} />
						) : (
							<div key={name} className={classes.customIcon}>{icons[name]()}</div>
						)))}
					</div>

					<div className={classes.linksWrapper}>
						{demo && (
							<a
								href={demo}
								className={clsx(classes.link, classes.demo)}
								target="_blank"
								rel="noreferrer noopener"
							>
								Demo
							</a>
						)}

						<a
							href={github}
							className={clsx(classes.link, classes.github)}
							target="_blank"
							rel="noreferrer noopener"
						>
							<FontAwesomeIcon icon={faGithub} className={classes.githubIcon} />
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
