import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    // marginTop: '100px',
    // height: '100vh'
    minHeight: '700px'
  },
  paper: {
    padding: '50px',
    borderRadius: '18px',
    minHeight: 500,
    maxHeight: 600,
    width: 750,
    position: 'relative'
  },
  title: {
    fontWeight: 'bold',
    lineHeight: '60px',
    fontSize: 45,
    fontFamily: "Rubik-Regular-kern-latin",
    background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    [theme.breakpoints.down("sm")]: {
      fontSize: '38px',
      lineHeight: "50px",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: '30px',
      lineHeight: '40px'
    }
  },
  articleInfo: {
    display: 'flex',
    direction: 'row',
    '& > *': {
      margin: '40px 20px 10px 0',
      [theme.breakpoints.down("sm")]: {
        margin: '20px 10px 5px 0',
      },
    },
  },
  tags: {
    ' & > *': {
      // border: '1px solid',
      margin: '10px 20px 20px 0',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    }
  },
  article: {
    [theme.breakpoints.down("sm")]: {
      lineHeight: "30px",
      marginBottom: '20px',
    },
    '& img': {
      maxHeight: '200px'
    }
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50
  }
}));
