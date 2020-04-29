import {makeStyles} from "@material-ui/core";
import blueBg from "../../asset/icons/blueBg.svg";
import purpleBg from "../../asset/icons/purpleBg.svg";

export default makeStyles((theme) => ({
  root: {
    padding: '20px 30px 20px 30px',
    minHeight: '100vh',
    [theme.breakpoints.down("xs")]: {
      backgroundSize: 0,
    },
    [theme.breakpoints.only("sm")]: {
      // backgroundSize: '100px, 100px, 200px, 150px,100px',
    },
    background: `
      url(${blueBg}) no-repeat fixed center top 0px,
      url(${purpleBg}) no-repeat fixed right -50px top 0px,
      url(${blueBg}) no-repeat fixed right -50px bottom -50px,
      url(${purpleBg}) no-repeat fixed center bottom -10px,
      url(${blueBg}) no-repeat fixed left -50px bottom -50px,
      url(${purpleBg}) no-repeat fixed left -50px top 0px
    `,
    backgroundSize: '150px, 200px, 150px, 100px, 150px, 200px',
  },
  personInfo: {
    marginLeft: '40px',
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  },
  extendBtnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));
