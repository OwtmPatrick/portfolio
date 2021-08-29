import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		zIndex: 1,
		backgroundColor: 'transparent'
	},
	navBar: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block',
			width: '100%'
		}
	},
	list: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	listItem: {
		width: 'auto'
	},
	link: {
		position: 'relative',
		textDecoration: 'none',
		color: theme.palette.common.white,
		fontWeight: 500,

		'&:before': {
			content: '""',
			bottom: '-3px',
			left: 0,
			position: 'absolute',
			width: '0%',
			height: '3px',
			backgroundColor: 'orange',
			transition: '.5s'
		},
		'&:hover:before': {
			width: '100%',
			right: 0
		}
	},
	linkActive: {
		'&:before': {
			content: '""',
			bottom: '-3px',
			left: 0,
			right: 0,
			position: 'absolute',
			width: '100%',
			height: '3px',
			backgroundColor: 'orange'
		}
	}
}));

export default useStyles;
