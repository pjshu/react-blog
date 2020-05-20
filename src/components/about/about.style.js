import {makeStyles} from "@material-ui/core";
// import square from "*.svg";
// import triangle from "*.svg";
import square from '../../asset/icons/square.svg';
import triangle from '../../asset/icons/triangle.svg';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '80px 40px 40px 40px',
    background: `
      url(${square}) no-repeat fixed right 50px top 50px,
      url(${triangle}) no-repeat fixed left 10px bottom 50px
    `,
    backgroundSize: '200px, 400px',
    [theme.breakpoints.only("xs")]: {
      padding: '40px 10px 10px 0'
    },
  },
  htmlWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("xs")]: {
      boxShadow: '0 0 0'
    },
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },

  },
  html: {
    maxWidth: '100%',
    lineHeight: '35px',
  }
}));
