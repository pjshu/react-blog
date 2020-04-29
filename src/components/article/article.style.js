import {makeStyles} from "@material-ui/core";
import bg from "../../asset/icons/articleBg.png";

export default makeStyles(theme => ({
  root: {
    padding: '65px 45px 45px 45px',
    marginTop: -400,
    minHeight: 800,
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      marginTop: -200,
      padding: '25px 10px 45px 10px',
      // backgroundSize: 0,
    },
  },
  backgroundPic: {
    height: 800,
    background: `url(${bg}) no-repeat`,
    backgroundSize: '100%',
    [theme.breakpoints.down("xs")]: {
      height: 400,
      // marginTop: -200,
      // backgroundSize: 0,
    },
    [theme.breakpoints.only("sm")]: {
      // backgroundSize: '100px, 100px, 200px, 150px,100px',
    },
  },
  titleWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    letterSpacing: "10px",
    fontWeight: "bold",
    fontSize: '30px',
    background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  },
  create_time: {
    color: '#757575',
    fontWeight: 'bold'
  },
  comments: {
    color: '#757575',
    fontWeight: 'bold'
  },
  articleInfo: {
    display: 'flex',
    direction: 'row',
    '& > *': {
      margin: '20px 0px 0px 20px',
      [theme.breakpoints.down("sm")]: {
        margin: '20px 10px 5px 0',
      },
    },
  },
}));
