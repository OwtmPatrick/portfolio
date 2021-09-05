import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		height: 'calc(100% + 48px + 47px)',
		marginTop: '-48px',
		[theme.breakpoints.up('md')]: {
			height: 'calc(100% + 53px + 47px)',
			marginTop: '-53px'
		},
		background: 'linear-gradient(135deg, rgb(137 162 222) 0%, rgb(29 43 78) 100%)'
	},
	overlay: {
		position: 'fixed',
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
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: 'rgba(0, 0, 0, 0.4)',
		textAlign: 'center'
	},
	textField: {
		'& .MuiOutlinedInput-input': {
			color: 'white'
		},
		'& .MuiFormLabel-root.Mui-focused': {
			color: '#fff'
		},
		'& .MuiOutlinedInput-root.Mui-focused': {
			'& fieldset': {
				borderColor: '#fff'
			}
		}
	},
	button: {
		textTransform: 'capitalize',
		fontWeight: 'normal',
		color: 'rgba(0, 0, 0, 0.6)',
		borderColor: 'rgba(0, 0, 0, 0.23)',

		'&:hover': {
			borderColor: 'rgba(0, 0, 0, 0.87)'
		}
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
