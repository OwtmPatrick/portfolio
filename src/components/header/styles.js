import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'fixed',
		top: 0,
		zIndex: 100,
		padding: '8px 0',
		backgroundColor: 'transparent',
		fontFamily: "'Mulish', sans-serif",
		transition: '.2s',

		'&.header-white': {
			backgroundColor: theme.palette.common.white
		},

		'&.header-short': {
			padding: 0
		}
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
		justifyContent: 'flex-end',
		transition: 'padding .2s',
		padding: '8px 0'
	},
	listItem: {
		width: 'auto'
	},
	link: {
		position: 'relative',
		textDecoration: 'none',
		color: theme.palette.common.white,
		fontWeight: 300,

		'.header-white &': {
			color: theme.palette.common.black,

			'&:before': {
				backgroundColor: theme.palette.common.black
			}
		},

		'&:before': {
			content: '""',
			bottom: '-5px',
			left: 0,
			position: 'absolute',
			width: '0%',
			height: '1px',
			backgroundColor: theme.palette.common.white,
			transition: 'width .5s, background-color .2s'
		},

		'&:hover:before': {
			width: '100%',
			right: 0
		}
	},
	linkActive: {
		'&:before': {
			content: '""',
			bottom: '-5px',
			left: 0,
			right: 0,
			position: 'absolute',
			width: '100%',
			height: '1px',
			backgroundColor: theme.palette.common.white
		}
	}
}));

export default useStyles;
