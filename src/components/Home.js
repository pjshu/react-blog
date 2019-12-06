import React from 'react';
import {Paper,Grid,Typography,makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import router from '../contants/router'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function Home() {
  const classes = useStyles();
  const Route = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
  return (
    <Grid container direction="column" alignItems="center" spacing={4}>
      <Grid item component={Route} to={`${router.DETAIL}/1`}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" align="center">
            article title
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </Grid>

      <Grid item component={Route} to={`${router.DETAIL}/2`}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" align="center">
            article title
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </Grid>

      <Grid item component={Route} to={`${router.DETAIL}/3`}>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3" align="center">
            article title
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
