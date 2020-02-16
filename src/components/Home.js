import React, {useEffect, useState} from 'react';
import {Button, Chip, Container, Grid, makeStyles, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import router from '../contants/router';
import {http} from "../hook";
import api from '../contants/api';

const useStyles = makeStyles((theme) => ({
  root: {
    // background: '#0A0A0A',
    // color: '#fff',
    '& > *': {
      height: '100vh',
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

    background: 'linear-gradient(135deg, #7EAAFC, #726EE2)',
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
      background: 'linear-gradient(135deg, #8DC5FA, #6C7FF0)',
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
        // boxShadow: '1px 2px 2px 2px #75C1D1',
        // background: '#75C1D1'
        background: 'linear-gradient(135deg, #8DC5FA, #6C7FF0)',
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
  }
}));


function Home() {
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
    <Container maxWidth={"lg"}>
      <Grid container direction="column" alignItems="flex-start" className={classes.root}>
        {
          state.content.map(item => (
            <Grid
              key={item.id}
              xs={12}
              sm={8}
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
    </Container>
  );
}

export default Home;
