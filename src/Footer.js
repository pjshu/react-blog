import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useLocation} from "react-router-dom";
import router from './contants/router';

function Footer() {
  const {pathname} = useLocation();
  return (
    <>
      {
        pathname === router.HOME ? null : (
          <Grid
            container
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
            style={{
              height: 200,
            }}
            spacing={1}
          >
            <Grid item>
              <Typography>备案号:</Typography>
            </Grid>
            <Grid item>
              <Typography>Powered by <a href="https://github.com/pjshu/react-blog">react-blog</a></Typography>
            </Grid>
            <Grid item>
              <Typography>Copyright© <a href={'https://github.com/pjshu'}>pjshu</a></Typography>
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

export default Footer;
