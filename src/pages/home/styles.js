import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		position: 'relative',
		minHeight: '100vh',
		padding: '200px 0',
		paddingLeft: '12px',
		paddingRight: '12px',
		fontFamily: "'Mulish', sans-serif",
		background: theme.palette.primary.main,

		'&:before': {
			[theme.breakpoints.up('md')]: {
				content: "''",
				position: 'absolute',
				top: 0,
				right: 0,
				width: '17%',
				height: '100%',
				backgroundColor: theme.palette.common.white
			},
			[theme.breakpoints.up('xl')]: {
				width: '25%'
			}
		}
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			alignItems: 'flex-start'
		}
	},
	textContainer: {
		[theme.breakpoints.up('md')]: {
			marginRight: 50
		}
	},
	intro: {
		fontFamily: "'Mulish', sans-serif",
		color: theme.palette.common.white,
		fontSize: 48,
		fontWeight: 700,
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'left'
		}
	},
	text: {
		marginTop: 20,
		marginBottom: 60,
		fontSize: 22,
		fontWeight: 300,
		fontFamily: "'Mulish', sans-serif",
		color: theme.palette.common.white,
		[theme.breakpoints.up('md')]: {
			textAlign: 'left'
		}
	},
	imgContainer: {
		position: 'relative',
		zIndex: 1,
		width: '100%',
		maxWidth: '500px',
		maxHeight: '500px',
		overflow: 'hidden'
	},
	img: {
		width: '100%',
		height: '100%',
		objectFit: 'contain'
	}
}));

export default useStyles;
