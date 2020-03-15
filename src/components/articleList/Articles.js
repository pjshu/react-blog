import React, {useEffect, useState} from 'react';
import {Chip, Grid, makeStyles, Typography} from '@material-ui/core';
import router from '../../contants/router';
import {http} from "../../hook";
import api from '../../contants/api';
import PersonInfo from './PersonInfo';
import TagList from './TagList';
import ExpandMore from '../button/ExpandMore';
import UnderlineBtn from '../button/UnderlineBtn';
import purpleBg from "../../icons/purpleBg.svg";
import blueBg from "../../icons/blueBg.svg";
import Slide from "@material-ui/core/Slide";
// import purpleBg from '../../icons/purpleBg.svg';
// import blueBg from '../../icons/blueBg.svg';
import VisibilitySensor from 'react-visibility-sensor';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 30px 20px 30px',
    background: `
    url(${purpleBg}) no-repeat fixed left -10px top -40px,
    url(${blueBg}) no-repeat fixed center top -40px,
    url(${purpleBg}) no-repeat fixed right -80px top -50px,
    url(${blueBg}) no-repeat fixed right -20px bottom -50px,
    url(${purpleBg}) no-repeat fixed center bottom -40px`,
    backgroundSize: '150px, 100px, 300px, 200px, 100px',
    [theme.breakpoints.down("xs")]: {
      backgroundSize: 0,
    },
    [theme.breakpoints.only("sm")]: {
      backgroundSize: '100px, 100px, 200px, 150px,100px',
    },
  },

  title: {
    fontWeight: 'bold',
    lineHeight: '60px',
    fontSize: 45,
    fontFamily: "Rubik Regular",
    background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    [theme.breakpoints.down("sm")]: {
      fontSize: '38px',
      lineHeight: "50px",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: '30px',
      lineHeight: '40px'
    }
  },
  articleInfo: {
    display: 'flex',
    direction: 'row',
    '& > *': {
      margin: '40px 20px 10px 0',
      [theme.breakpoints.down("sm")]: {
        margin: '20px 10px 5px 0',
      },
    },
  },
  tags: {
    ' & > *': {
      // border: '1px solid',
      margin: '10px 20px 20px 0',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    }
  },
  article: {
    lineHeight: "40px",
    marginBottom: '40px',
    [theme.breakpoints.down("sm")]: {
      lineHeight: "30px",
      marginBottom: '20px',
    },
  },
  personInfo: {
    marginLeft: '40px',
    [theme.breakpoints.down("sm")]: {
      display: 'none'
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

}));


function Articles() {
  const classes = useStyles();
  const [state, setState] = useState({
    current_page: 1,
    content: []
  });
  // TODO : bug
  // const [navHidden, setNavHidden] = useState(false);
  // const handleScroll = (e) => {
  //   // 向上滑动显示导航栏
  //   if (e.nativeEvent.wheelDelta > 0) {
  //     if (navHidden !== false) {
  //       setNavHidden(false);
  //     }
  //   } else {
  //     if (navHidden !== true) {
  //       setNavHidden(true);
  //     }
  //   }
  // };

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

  const handleScroll = (e) => {
    // console.log(e);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction={"row"}
        justify={"center"}>
        <Grid item xl={6} lg={7} md={8} sm={10} xs={12}>
          {
            state.content.map((item, index) => (
              <Article key={item.id} {...{index, item, classes}}/>
            ))
          }

        </Grid>

        <Grid item className={classes.personInfo}>
          <PersonInfo/>
          <TagList/>
        </Grid>
      </Grid>
      {/*<Grid className={classes.readMore}>*/}
      {/*  <ExpandMore onClick={handleOnNextPage}/>*/}
      {/*</Grid>*/}
    </div>
  );
}


const Article = ({item, classes, index}) => {
  const [inOrOut, setInOrOut] = useState(true);
  console.log(index);
  return (
    <Grid
      onWheel={e => {
        console.log(e.nativeEvent.deltaY);
      }}
      style={{
        marginTop: '100px',
        // height: '100vh'
        minHeight: '700px'
      }}
      container
      alignItems={"flex-start"}
      justify={"center"}
      direction={"column"}
    >
      {/*<Fade collapsedHeight={200} in={isVisible} mountOnEnter unmountOnExit>*/}
      <div>
        <Slide timeout={1000} direction={'right'} in={true} mountOnEnter unmountOnExit>
          <Typography
            className={classes.title}
            component="h3"
            align="left">
            {item.title}行行还行还行还行还行还行行还行还行还行还行还行
          </Typography>
        </Slide>
        <Slide timeout={1000} direction={'right'} in={true} mountOnEnter unmountOnExit>
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
        </Slide>
        <Slide timeout={1000} direction={'right'} in={true} mountOnEnter unmountOnExit>

          <Grid className={classes.tags}>
            <Chip label="tag1" variant="outlined"/>
            <Chip label="tag2" variant="outlined"/>
          </Grid>
        </Slide>
        <Slide timeout={1000} direction={'left'} in={true} mountOnEnter unmountOnExit>
          <Typography
            component="p"
            className={classes.article}>
            {item.article}
          </Typography>
        </Slide>
        <Slide timeout={1000} direction={'up'} in={true} mountOnEnter unmountOnExit>
          <Grid>
            <UnderlineBtn label={"阅读全文"} to={`${router.DETAIL}/${item.id}`}/>
          </Grid>
        </Slide>
      </div>
      {/*</Fade>*/}
    </Grid>
  );
};
export default Articles;
