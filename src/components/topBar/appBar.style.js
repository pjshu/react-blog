import {fade, makeStyles} from "@material-ui/core";
import router from "../../contants/router";

export default makeStyles(theme => ({
  root: {
    boxShadow: props => props.pathname === router.HOME ?
      '0 0 0' : '0px 2px 4px -1px rgba(0,0,0,0.2)',
    backgroundColor: '#fff',
    // opacity: 0.7
  },
  toolbar: {
    display: "flex",
    justifyContent: 'flex-end',
    '& > *': {
      marginRight: theme.spacing(4)
    }
  },
  navItem: {
    color: 'black'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

}));
