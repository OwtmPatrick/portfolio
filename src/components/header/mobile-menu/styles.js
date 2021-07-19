import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	icon: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	list: {
		paddingLeft: '24px',
		paddingRight: '24px'
	},
	listItem: {
		paddingTop: '12px',
		paddingBottom: '12px'
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.grey.A700,
		fontWeight: 500,
		transition: 'opacity .3s',
		'&:hover': {
			opacity: 0.8
		}
	}
}));

export default useStyles;
