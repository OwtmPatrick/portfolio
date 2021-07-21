import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		position: 'relative',
		zIndex: 1,
		width: '100%',
		margin: 0
	},
	icon: {
		fontSize: '27px',
		color: '#000000',
		transition: 'opacity .3s',
		'&:hover': {
			opacity: 0.6
		}
	}
});

export default useStyles;
