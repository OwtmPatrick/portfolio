import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		height: 'calc(100% + 48px + 47px)',
		marginTop: '-48px',
		[theme.breakpoints.up('md')]: {
			height: 'calc(100% + 53px + 47px)',
			marginTop: '-53px'
		},
		background: 'linear-gradient(135deg, rgb(137 162 222) 0%, rgb(29 43 78) 100%)'
	},
	container: {
		height: '100%',
		paddingLeft: '12px',
		paddingRight: '12px',
		[theme.breakpoints.up('lg')]: {
			margin: '0 auto'
		}
	},
	imgContainer: {
		position: 'relative',
		zIndex: 1,
		width: '200px',
		height: '200px',
		borderRadius: '50%',
		overflow: 'hidden',
		[theme.breakpoints.up('lg')]: {
			width: '250px',
			height: '250px',
			marginBottom: '25px'
		}
	},
	img: {
		width: '200px',
		height: '200px',
		[theme.breakpoints.up('lg')]: {
			width: '250px',
			height: '250px'
		}
	},
	text: {
		color: theme.palette.common.white
	}
}));

export default useStyles;
