import React from 'react';
import {Button, Container, Grid, makeStyles, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import router from '../contants/router';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      '& > :nth-child(1)': {
        lineHeight: '60px'
      },
      '& > :nth-child(2)': {
        lineHeight: "40px"
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1),
        '& > :nth-child(1)': {
          lineHeight: '40px'
        },
        '& > :nth-child(2)': {
          lineHeight: "30px"
        }
      },
      [theme.breakpoints.only("sm")]: {
        marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(8),
      },
    }
  },
  button: {
    '&:hover': {
      background: '#F6F8FC'
    },
    border: 0
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth={"lg"}>
      <Grid container direction="column" alignItems="center" className={classes.root}>
        <Grid
          sm={12}
          md={10}
          item
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Typography
            variant="h5"
            component="h3"
            align="center"
          >
            article title
          </Typography>
          <Typography
            component="p"
          >
            &nbsp;&nbsp;进程: 进程是一个实体。每个进程都有自己的地址空间(CPU分配) 是具有一定独立功能的程序关于某个数据集合上的一次运行活动,进程是系统进行资源分配和调度的一个独立单位. 线程:
            线程是进程中的一个实体
            一个进程内部可能包含了很多顺序执行流，每个顺序执行流就是一个线程
            应用场景: 多进程:cpu密集型 多线程:io密集型
          </Typography>
          <Grid>
            <Button
              to={`${router.DETAIL}/1`}
              component={Link}
              variant="outlined"
              className={classes.button}
            >
              阅读全文
            </Button>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Home;
