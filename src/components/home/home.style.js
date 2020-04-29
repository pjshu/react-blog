import {makeStyles} from "@material-ui/core";


export default makeStyles(theme => ({
  infoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    paddingLeft: '100px',
    width: '50%',
    [theme.breakpoints.only("xs")]: {
      width: '100%',
      alignItems: 'center',
      paddingLeft: '0px',
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: '20vw',
    },
  },
  info: {
    width: '100%',
    '& > *': {
      fontWeight: 'bold',
      fontSize: '35px',
      [theme.breakpoints.only("xs")]: {
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        justifyItems: 'center',
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: '25px',
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: '40px',
      },
    }
  },
  bgPic: {
    position: "absolute",
    right: 0,
    top: '50%',
    transform: "translate(0%, -55%)",
    zIndex: '-10',
    '& > img': {
      height: '600px'
    },
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    },
    [theme.breakpoints.only("sm")]: {
      '& > img': {
        height: '400px'
      },
    },
    [theme.breakpoints.up("lg")]: {
      right: '5vw',
    },
  }
}));
