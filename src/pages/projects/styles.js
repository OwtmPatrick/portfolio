import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	container: {
		padding: '30px 0',
		paddingLeft: '12px',
		paddingRight: '12px',
		fontFamily: "'Mulish', sans-serif",
		[theme.breakpoints.up('md')]: {
			flexFlow: 'row'
		}
	},
	project: {
		width: '100%'
	}
}));

export default useStyles;
