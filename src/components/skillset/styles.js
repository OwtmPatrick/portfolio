import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: '70px',
		[theme.breakpoints.up('lg')]: {
			marginTop: '200px'
		}
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0,

		[theme.breakpoints.up('lg')]: {
			margin: '-16px'
		}
	},
	icon: {
		fontSize: '45px'
	}
}));

export default useStyles;
