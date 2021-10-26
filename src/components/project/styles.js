import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		overflow: 'hidden',
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100%',
		transition: '.3s',
		cursor: 'pointer',
		'&:before': {
			content: '""',
			display: 'block',
			paddingTop: 'calc(1 / 300 * 200 * 100%)'
		},
		'&:first-child': {
			[theme.breakpoints.up('md')]: {
				height: '100%'
			},
			'&:before': {
				[theme.breakpoints.up('md')]: {
					paddingTop: 'calc(1 / 300 * 196 * 100%)'
				}
			}
		},
		'&:hover': {
			backgroundSize: '105%'
		},
		'&:hover .info-container': {
			transform: 'translateX(0)',
			opacity: 1
		}
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		transition: '.3s',
		backgroundColor: 'rgba(0, 123, 255, 0.8)',
		transform: 'translateX(-100%)',
		opacity: 0
	},
	info: {
		overflow: 'hidden',
		color: theme.palette.common.white
	},
	title: {
		marginBottom: '15px',
		fontSize: '24px'
	},
	icon: {
		fontSize: '30px'
	},
	linksWrapper: {
		display: 'flex',
		marginTop: '35px'
	},
	link: {
		padding: '8px 16px',
		fontSize: '16px',
		lineHeight: '24px',
		color: theme.palette.common.white,
		textDecoration: 'none',
		border: '1px solid white',
		transition: '.3s',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.primary.main
		}
	},
	demo: {
		marginLeft: '24px'
	}
}));

export default useStyles;
