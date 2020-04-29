import {makeStyles} from "@material-ui/core";

export default makeStyles({
  root: {
    width: 100,
  },
  list: {
    height: '450px',
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  listItem: {
    height: 25,
    marginTop: 20,
    padding: 1
  },
});
