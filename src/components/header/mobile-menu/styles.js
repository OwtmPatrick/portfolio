import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	iconButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	icon: {
		color: theme.palette.common.white
	},
	list: {
		paddingLeft: '24px',
		paddingRight: '24px'
	},
	listItem: {
		paddingTop: '12px',
		paddingBottom: '12px'
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.grey.A700,
		fontWeight: 500,
		position: 'relative',

		'&:before': {
			content: '""',
			bottom: '-5px',
			left: 0,
			position: 'absolute',
			width: '0%',
			height: '2px',
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
