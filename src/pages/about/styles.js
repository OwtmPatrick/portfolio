import {makeStyles} from '@material-ui/core/styles';
import backgroundImage from '../../assets/images/tools.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
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
		padding: '200px 12px',
		position: 'relative'
	},
	textContainer: {
		width: '100%',
		marginBottom: '20px'
	},
	title: {
		fontWeight: 500,
		fontSize: '48px',
		fontFamily: "'Mulish', sans-serif"
	},
	subTitle: {
		fontFamily: "'Mulish', sans-serif"
	},
	point: {
		position: 'relative',
		alignItems: 'flex-start',
		paddingLeft: 0
	},
	pointIcon: {
		color: 'orange',
		position: 'absolute',
		left: '-30px',
		top: '13px'
	},
	pointText: {
		fontSize: '22px',
		fontFamily: "'Mulish', sans-serif"
	}
}));

export default useStyles;
