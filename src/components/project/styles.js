import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		overflow: 'hidden',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100%',
		transition: '.3s',
		cursor: 'pointer',
		// [theme.breakpoints.up('md')]: {
		// 	flexFlow: 'row'
		// },
		'&:before': {
			content: '""',
			display: 'block',
			paddingTop: 'calc(1 / 300 * 200 * 100%)'
		},
		'&:hover': {
			backgroundSize: '105%'
		},
		'&:hover .info': {
			transform: 'translateX(0)',
			opacity: 1
		}
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		transform: 'translateX(-100%)',
		overflow: 'hidden',
		transition: '.3s',
		backgroundColor: 'rgba(0, 123, 255, 0.8)',
		color: theme.palette.common.white,
		opacity: 0
	},
	title: {
		marginBottom: '15px'
	}
}));

export default useStyles;
