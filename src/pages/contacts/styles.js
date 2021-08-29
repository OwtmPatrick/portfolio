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
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: '#fff',
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
	}
}));

export default useStyles;
