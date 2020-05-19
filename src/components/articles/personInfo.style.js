import {makeStyles} from "@material-ui/core";

export default makeStyles({
  root: {
    marginTop: 50,
    position: 'relative',
    '& > :first-child': {
      height: 400,
      width: 300,
      background: '#F5F5F5',
      borderRadius: 16,
    }
  },
  blogExcerpt: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 320,
    position: 'relative',
    height: '80px'
  },
  articleCount: {
    display: 'flex', justifyContent: 'center'
  },
  tagCount: {
    display: 'flex', justifyContent: 'center'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',

    height: 300,
    width: 280,
    background: '#fff',
    borderRadius: 16,
    position: 'absolute',
    bottom: 90,
    right: 20,
    boxShadow: '0 0 30px rgba(16,14,23,0.25)',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  list: {
    '& > *': {
      display: "flex",
      justifyContent: "center",
      marginTop: 8
    }
  },
});
