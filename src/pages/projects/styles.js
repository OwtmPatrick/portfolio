import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		padding: '30px 0',
		paddingLeft: '12px',
		paddingRight: '12px',
		fontFamily: "'Mulish', sans-serif"
	},
	title: {
		fontFamily: "'Mulish', sans-serif",
		fontSize: '48px',
		fontWeight: 700,
		color: theme.palette.primary.main,
		margin: '30px 0'
	},
	projectsContainer: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexFlow: 'row wrap',
			margin: '-12px'
		}
	},
	project: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 'calc(50% - 24px)',
			margin: '12px'
		}
	}
}));

export default useStyles;
