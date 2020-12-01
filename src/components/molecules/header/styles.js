import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    background: '#BB1D1D',
    boxShadow: '0 3px 1px 2px rgba(111, 149, 64, .3)',
    height: '7%',
    justifyContent: 'center',
    alignItems:'center',
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
  },
  headerTypography: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
  }
}));

export default useStyles;
