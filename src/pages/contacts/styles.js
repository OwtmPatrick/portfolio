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
	item: {
		width: '100%'
	},
	names: {
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			flexDirection: 'row'
		}
	},
	firstName: {
		marginBottom: '16px',
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
	dialogTitle: {
		// borderBottom: `1px solid ${theme.palette.grey.A100}`,
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
