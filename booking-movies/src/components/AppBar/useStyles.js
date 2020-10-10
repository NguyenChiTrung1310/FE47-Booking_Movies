import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: '#1b1b1b'
  },
  brand: {
    fontSize: 30,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400
  },
  userIcon:{
    paddingTop: 6
  },
  menuLinks: {
    flexGrow: 1,
    display: 'flex',
    textDecoration: 'none',
  },
  links: {
    width: 300,
    margin: 'auto',
    display: 'flex',
    textDecoration: 'none'
  }
}));

