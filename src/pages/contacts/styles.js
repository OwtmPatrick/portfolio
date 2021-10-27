import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '0 12px',
		paddingBottom: '100px'
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
		borderBottom: `1px solid ${theme.palette.grey.A700}`,
		display: 'flex',
		justifyContent: 'flex-end'
	},
	dialogContent: {
		padding: '32px 40px'
	}
}));

export default useStyles;
