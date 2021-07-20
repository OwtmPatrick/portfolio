import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	layout: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	main: {
		flexGrow: 1
	}
});

export default useStyles;
