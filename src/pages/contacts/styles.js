import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '0 12px',
		paddingBottom: '100px'
	},
	overlay: {
		position: 'fixed',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		opacity: 0.7,
		backgroundColor: '#000',
		zIndex: 100,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	form: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontFamily: "'Mulish', sans-serif",
		fontSize: '48px',
		fontWeight: 700,
		color: theme.palette.primary.main,
		marginTop: '60px',
		marginBottom: '30px',
		textAlign: 'center'
	},
	formInner: {
		[theme.breakpoints.up('lg')]: {
			flexDirection: 'row'
		}
	},
	fields: {
		flexGrow: 1
	},
	item: {
		width: '100%',
		marginBottom: '16px'
	},
	names: {
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			flexDirection: 'row',
			marginBottom: 0
		}
	},
	firstName: {
		[theme.breakpoints.up('lg')]: {
			marginBottom: 0,
			marginRight: '16px'
		}
	},
	textField: {
		fontFamily: "'Mulish', sans-serif"
	},
	button: {
		textTransform: 'capitalize'
	},
	icons: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '20px',
		[theme.breakpoints.up('lg')]: {
			flexDirection: 'column',
			justifyContent: 'flex-start',
			marginTop: 0,
			marginLeft: '10px'
		}
	},
	link: {
		position: 'relative',
		width: '40px',
		height: '40px',
		marginRight: '20px',
		borderRadius: '50%',
		border: `1px solid ${theme.palette.primary.main}`,
		transition: '.3s',

		'&:last-child': {
			marginRight: 0
		},

		'&:hover': {
			backgroundColor: theme.palette.primary.main
		},
		'&:hover svg': {
			color: theme.palette.common.white
		},
		[theme.breakpoints.up('lg')]: {
			marginRight: 0,
			marginBottom: '20px',

			'&:last-child': {
				marginBottom: 0
			}
		}
	},
	icon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		fontSize: '20px',
		color: theme.palette.primary.main,
		transition: '.3s'
	},
	dialogTitle: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '8px 16px',

		'&:before': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: '30px',
			width: 'calc(100% - 60px)',
			height: '1px',
			backgroundColor: theme.palette.grey.A100
		}
	},
	dialogText: {
		fontFamily: "'Mulish', sans-serif"
	},
	closeButton: {
		padding: '8px'
	},
	dialogContent: {
		padding: '15px 30px'
	}
}));

export default useStyles;
