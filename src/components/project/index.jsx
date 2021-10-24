import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './styles';

const Project = ({
	img, title, github, demo, technoloigies
}) => {
	const classes = useStyles();

	return (
		<div style={{backgroundImage: `url(${img})`}} className={classes.container}>
			<div className={clsx(classes.info, 'info')}>
				<div className={classes.title}>{title}</div>

				<div>
					<a href={github}>github</a>
					<a href={demo}>demo</a>
				</div>

				<div>
					{technoloigies.map(t => (
						<div key={t}>{t}</div>
					))}
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
