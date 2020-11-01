import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    display: 'flex',
    cursor: 'pointer'
  },
  inline: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: '40px'
  },
  nameTheater: {
    color: '#fff',
    fontSize: '20px'  
  },
  address: {
    color: '#ccc'
  },
  divider: {
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: 0,
  }
}));