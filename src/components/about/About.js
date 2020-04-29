import React from 'react';
import {Grid} from "@material-ui/core";
import useStyles from './about.style';

function About({about}) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
    >
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        lg={6}
        xl={4}
        className={classes.htmlWrapper}
      >
        {
          about ? (
            <div
              className={classes.html}
              dangerouslySetInnerHTML={{__html: about}}
            />
          ) : '这个人很懒,什么都没写(￣▽￣")'
        }
      </Grid>
    </Grid>
  );
}

export default React.memo(About);
