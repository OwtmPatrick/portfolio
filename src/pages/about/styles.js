import {makeStyles} from '@material-ui/core/styles';
import backgroundImage from '../../assets/images/tools.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		height: 'calc(100% + 48px + 47px)',
		marginTop: '-48px',
		[theme.breakpoints.up('md')]: {
			height: 'calc(100% + 53px + 47px)',
			marginTop: '-53px'
		},
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		color: theme.palette.common.white,

		'&:before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			background: 'rgba(0, 0, 0, .4)'
		}
	},
	container: {
		padding: '0 12px',
		paddingTop: '200px',
		position: 'relative'
	},
	textContainer: {
		width: '100%',
		marginBottom: '20px'
	},
	title: {
		fontWeight: 500
	},
	point: {
		position: 'relative',
		alignItems: 'flex-start',
		paddingLeft: 0
	},
	pointIcon: {
		color: 'orange',

		[theme.breakpoints.up('lg')]: {
			position: 'absolute',
			left: '-30px',
			top: '13px'
		}
	},
	pointText: {
		fontSize: '22px'
	}
}));

export default useStyles;
