import React from 'react';
import {Button, Chip, Container, Grid, makeStyles, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    '& > *': {
      [theme.breakpoints.down("sm")]: {
        // marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.only("sm")]: {
        // marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.up("md")]: {
        // marginBottom: theme.spacing(8),
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


function Articles() {
  const classes = useStyles();

  return (
    <Container
      maxWidth={"lg"}
      style={{
        height: '100%',
        padding: '30px'
      }}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        justify={"center"}
        className={classes.root}
      >

        <Typography
          className={classes.title}
          component="h3"
          align="left">
          article title还行还行还行还行还行还行
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
          进程: 进程是一个实体。每个进程都有自己的地址空间(CPU分配) 是具有一定独立功能的程序关于某个数据集合上的一次运行活动,进程是系统进行资源分配和调度的一个独立单位. 线程: 线程是进程中的一个实体
          一个进程内部可能包含了很多顺序执行流，每个顺序执行流就是一个线程 应用场景: 多进程:cpu密集型 多线程:io密集型
        </Typography>

        <Grid>
          <Button
            variant="outlined"
            className={classes.button}
          >
            阅读全文
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Articles;
