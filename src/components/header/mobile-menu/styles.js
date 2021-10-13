import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	iconButton: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	icon: {
		color: theme.palette.common.white,
		transition: '.2s',

		'.header-white &': {
			color: theme.palette.common.black
		}
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
		fontFamily: "'Mulish', sans-serif",

		'&:before': {
			content: '""',
			bottom: '-5px',
			left: 0,
			position: 'absolute',
			width: '0%',
			height: '1px',
			backgroundColor: theme.palette.common.black,
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
			height: '1px',
			backgroundColor: theme.palette.common.black
		}
	}
}));

export default useStyles;
