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
		position: 'relative',

		'&:before': {
			content: '""',
			bottom: '-3px',
			right: 0,
			position: 'absolute',
			width: '0%',
			height: '3px',
			backgroundColor: 'orange',
			transition: '.5s'
		},
		'&:hover:before': {
			width: '100%',
			left: 0
		}
	}
}));

export default useStyles;
