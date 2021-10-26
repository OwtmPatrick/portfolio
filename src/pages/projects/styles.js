import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		padding: '60px 0',
		paddingLeft: '12px',
		paddingRight: '12px',
		fontFamily: "'Mulish', sans-serif"
	},
	title: {
		fontFamily: "'Mulish', sans-serif",
		fontSize: '48px',
		fontWeight: 700,
		color: theme.palette.primary.main,
		margin: '60px 0'
	},
	projectsContainer: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexFlow: 'row wrap',
			width: 'calc(100% + 24px)',
			margin: '-12px'
		}
	},
	projectContainer: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			boxSizing: 'border-box',
			padding: '12px'
		}
	},
	project: {
		width: '100%',
		marginTop: '12px',
		[theme.breakpoints.up('md')]: {
			marginTop: 0
		},
		'&.first': {
			[theme.breakpoints.up('md')]: {
				height: '100%'
			}
		},
		'&.second': {
			[theme.breakpoints.up('md')]: {
				marginBottom: '24px'
			}
		}
	}
}));

export default useStyles;
