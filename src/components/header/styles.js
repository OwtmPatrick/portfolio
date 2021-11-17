import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'fixed',
		top: 0,
		zIndex: 100,
		padding: '16px 0',
		backgroundColor: 'transparent',
		fontFamily: "'Mulish', sans-serif",
		transition: '.2s',

		'&.header-white': {
			backgroundColor: theme.palette.common.white,
			boxShadow: '4px 0 20px -5px rgb(0 0 0 / 20%)'
		},

		'&.header-short': {
			padding: '8px 0'
		}
	},
	logo: {
		marginRight: '40px',
		padding: '4px 5px',
		fontSize: '24px',
		border: '5px solid white',
		color: 'white',
		letterSpacing: '1px',
		transition: '.2s',
		fontWeight: 600,

		'.header-white &': {
			color: theme.palette.common.black,
			borderColor: theme.palette.common.black
		}
	},
	navBarWrapper: {
		[theme.breakpoints.up('md')]: {
			flexWrap: 'nowrap',
			padding: '0 12px'
		},
		[theme.breakpoints.up('lg')]: {
			margin: '0 auto'
		}
	},
	navBar: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			alignItems: 'center',
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
	},
	contacts: {
		display: 'none',

		[theme.breakpoints.up('md')]: {
			position: 'relative',
			display: 'block',
			color: theme.palette.primary.main,
			fontWeight: 300,
			textDecoration: 'none',

			'&:before': {
				content: '""',
				bottom: '-5px',
				left: 0,
				position: 'absolute',
				width: '0%',
				height: '1px',
				backgroundColor: theme.palette.primary.main,
				transition: 'width .5s'
			},

			'&:hover:before': {
				width: '100%',
				right: 0
			}
		}
	}
}));

export default useStyles;
