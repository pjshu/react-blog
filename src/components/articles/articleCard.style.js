import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    marginTop: 200,
    [theme.breakpoints.only("xs")]: {
      marginTop: 50,
      '&:nth-child(1)': {
        marginTop: 65,
      }
    },
  },
  paper: {
    borderRadius: 18,
    position: 'relative',
    maxHeight: 600,
    [theme.breakpoints.up('sm')]: {
      padding: 50,
      width: '100%',
      // minHeight: 500,
    },
    [theme.breakpoints.only('xs')]: {
      padding: 10,
      width: '100%',
      borderRadius: 0,
    }
  },
  title: {
    fontWeight: 'bold',
    lineHeight: '60px',
    fontSize: '45px',
    fontFamily: "Rubik-Regular-kern-latin",
    background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    [theme.breakpoints.down("sm")]: {
      fontSize: '38px',
      lineHeight: "50px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: '25px',
      lineHeight: '35px'
    }
  },
  articleInfo: {
    display: 'flex',
    '& > *': {
      margin: '30px 20px 10px 0',
      [theme.breakpoints.only("xs")]: {
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
      [theme.breakpoints.only("xs")]: {
        margin: '5px 10px 5px 0',
      },
    }
  },
  article: {
    marginBottom: 50,
    '& img': {
      maxHeight: '200px'
    },
    [theme.breakpoints.only("xs")]: {
      lineHeight: "15px",
      '& img': {
        display: 'none'
      }
    },
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 50,
    [theme.breakpoints.only("xs")]: {
      bottom: 10
    },
  },
  button: {
    fontSize: '18px',
    border: 0,
    [theme.breakpoints.only("xs")]: {
      fontSize: '15px',
      background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
    borderBottom: "3px solid rgb(212, 212, 212)",
    '&:hover': {
      background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
  }
}));
