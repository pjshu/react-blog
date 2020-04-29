import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useLocation} from "react-router-dom";
import router from '../../contants/router';
import useStyles from './footer.style';

function Footer({nickname, icp}) {
  const classes = useStyles();
  const {pathname} = useLocation();
  return (
    <>
      {
        pathname === router.HOME ? null : (
          <Grid
            component={'footer'}
            container
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            className={classes.root}
          >
            <Grid item>
              {
                icp && (
                  <Typography>备案号:{icp}</Typography>
                )
              }
            </Grid>
            <Grid item>
              <Typography>Powered by <a href="https://github.com/pjshu/react-blog">react-blog</a></Typography>
            </Grid>
            <Grid item>
              <Typography>Copyright© {nickname}</Typography>
            </Grid>
            <Grid item>
              <Typography>
                <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/cn/">
                  本博客使用 CC BY-NC-SA 3.0 进行许可
                </a>
              </Typography>
            </Grid>
          </Grid>
        )
      }
    </>
  );
}

export default React.memo(Footer);
