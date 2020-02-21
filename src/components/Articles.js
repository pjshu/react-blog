import React, {useEffect, useState} from 'react';
import {Button, Chip, Grid, makeStyles, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import router from '../contants/router';
import {http} from "../hook";
import api from '../contants/api';
import ColorTag from "./tag/ColorTag";
import purpleBg from '../icons/purpleBg.svg';
import blueBg from '../icons/blueBg.svg';

const useStyles = makeStyles((theme) => ({
  articleList: {
    // background: '#0A0A0A',
    // color: '#fff',
    '& > *': {
      // background: 'linear-gradient(to right bottom, #4C5986, #B9E4EF)',
      // borderRadius: '8px',
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.only("sm")]: {
        marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(8),
      },
    }
  },
  title: {
    lineHeight: '60px',
    fontSize: 50,
    fontFamily: "Rubik Regular",
    fontWeight: 'bold',

    background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  },
  button: {
    fontSize: 18,
    border: 0,

    [theme.breakpoints.down("sm")]: {
      lineHeight: '40px',
    },
    borderBottom: "3px solid rgb(212, 212, 212)",
    '&:hover': {
      background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
  },
  articleInfo: {
    display: 'flex',
    direction: 'row',
    '& > *': {
      margin: '20px 20px 10px 0'
    }
  },
  tags: {
    ' & > *': {
      // border: '1px solid',
      margin: '10px 20px 20px 0',
      // background:'linear-gradient(to right bottom, #56C6E4, #6995E6)',
      '&:hover': {
        background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }
    }
  },
  article: {
    lineHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "30px"
    },
  },
  readMore: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    // background: 'linear-gradient(135deg, #8DC5FA, #6C7FF0)',
    // WebkitBackgroundClip: 'text',
    // color: 'transparent'
  },
  colorTags: {
    '& > *': {
      marginTop: '10px'

    }
  }
}));


function Articles() {
  const classes = useStyles();
  const [state, setState] = useState({
    current_page: 1,
    content: []
  });

  useEffect(() => {
    http.get(api.posts, setState);
  }, []);

  const handleOnNextPage = () => {
    const handleResult = (res) => {
      setState({
        current_page: state.current_page,
        content: state.content.concat(res.content)
      });
    };
    http.get(api.posts, handleResult, {current_page: 1});
  };

  return (
    <div style={{
      padding: '40px',
      background: `
      url(${purpleBg}) no-repeat fixed right -80px top -50px,
      url(${purpleBg}) no-repeat fixed center top -80px,
      url(${blueBg}) no-repeat fixed left -10px top -40px,
      url(${blueBg}) no-repeat fixed right -20px bottom -50px,
      url(${purpleBg}) no-repeat fixed center bottom -40px
      `,
      backgroundSize: '300px, 200px,200px,200px,100px'
    }}>
      <Grid container direction={"row"}>
        <Grid
          item
          xs={12}
          sm={7}>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            className={classes.articleList}>
            {
              state.content.map(item => (
                <Grid
                  key={item.id}
                  item
                  container
                  alignItems={"flex-start"}
                  direction={"column"}
                >
                  <Typography
                    className={classes.title}
                    component="h3"
                    align="left">
                    {item.title}还行还行还行还行还行还行
                  </Typography>

                  <Grid className={classes.articleInfo}>
                    <Typography
                      component="h4"
                      align="left">
                      2019/10/2 12:50
                    </Typography>

                    <Grid>
                      0评论
                    </Grid>
                  </Grid>

                  <Grid className={classes.tags}>
                    <Chip label="tag1" variant="outlined"/>
                    <Chip label="tag2" variant="outlined"/>
                  </Grid>

                  <Typography
                    component="p"
                    className={classes.article}>
                    {item.article}
                  </Typography>

                  <Grid>
                    <Button
                      to={`${router.DETAIL}/${item.id}`}
                      component={Link}
                      variant="outlined"
                      className={classes.button}
                    >
                      阅读全文
                    </Button>
                  </Grid>

                </Grid>
              ))
            }
            <Grid className={classes.readMore}>
              <Button variant="outlined" onClick={handleOnNextPage}>
                加载更多
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{
          marginLeft: '40px',
        }}>
          <Grid
            style={{
              position: 'relative',
              // right: 10,
              // top: 10
            }}>
            <div
              style={{
                height: 400,
                width: 300,
                background: '#F5F5F5',
                borderRadius: 16,
              }}/>
            <div style={{
              height: 300,
              width: 280,
              background: '#fff',
              borderRadius: 16,
              position: 'absolute',
              bottom: 90,
              right: 20,
              boxShadow: '0 0 30px rgba(16,14,23,0.25)'
            }}>
            </div>
          </Grid>

          <Grid
            container
            justify={"center"}
            alignItems={"center"}
            direction={"column"}
            className={classes.colorTags}
          >

            <ColorTag {...{id: 1, count: 8, name: 'ubuntu'}}/>
            <ColorTag {...{id: 2, count: 8, name: 'ubuntu'}}/>
            <ColorTag {...{id: 3, count: 8, name: 'ubuntu'}}/>
            <ColorTag {...{id: 4, count: 8, name: 'ubuntu'}}/>
            <ColorTag {...{id: 5, count: 8, name: 'ubuntu'}}/>
            <ColorTag {...{id: 6, count: 8, name: 'ubuntu'}}/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Articles;
