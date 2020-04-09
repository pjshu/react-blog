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
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import {useLocation} from 'react-router-dom';
import {formatTime} from "../../helpers/datetime";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 30px 20px 30px',
    [theme.breakpoints.down("xs")]: {
      backgroundSize: 0,
    },
    [theme.breakpoints.only("sm")]: {
      // backgroundSize: '100px, 100px, 200px, 150px,100px',
    },
    background: `
      url(${blueBg}) no-repeat fixed center top 0px,
      url(${purpleBg}) no-repeat fixed right -50px top 0px,
      url(${blueBg}) no-repeat fixed right -50px bottom -50px,
      url(${purpleBg}) no-repeat fixed center bottom -10px,
      url(${blueBg}) no-repeat fixed left -50px bottom -50px,
      url(${purpleBg}) no-repeat fixed left -50px top 0px
    `,
    backgroundSize: '150px, 200px, 150px, 100px, 150px, 200px',
  },

  title: {
    fontWeight: 'bold',
    lineHeight: '60px',
    fontSize: 45,
    fontFamily: "Rubik-Regular",
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


function Articles({state, handleOnNextPage}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction={"row"}
        justify={"center"}>
        <Grid item xl={6} lg={7} md={8} sm={10} xs={12}>
          {
            state.content.map((item, index) => (
              <Article key={item.id} {...{index, item}}/>
            ))
          }
        </Grid>
        <Grid item className={classes.personInfo}>
          <PersonInfo/>
          <TagList/>
        </Grid>
      </Grid>
      <Grid className={classes.readMore}>
        <ExpandMore onClick={handleOnNextPage}/>
      </Grid>
    </div>
  );
}


const Article = ({item}) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  return (
    <Grid
      onWheel={e => {
        // console.log(e.nativeEvent.deltaY);
      }}
      style={{
        // marginTop: '100px',
        // height: '100vh'
        minHeight: '700px'
      }}
      container
      alignItems={"flex-start"}
      justify={"center"}
      direction={"column"}
    >
      <Paper
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        boxShadow={hover ? 1 : 6}
        component={Box}
        style={{
          padding: '50px',
          borderRadius: '18px',
          minHeight: 500,
          maxHeight: 600,
          width: 750,
          position: 'relative'
        }}>
        <Typography
          className={classes.title}
          component="h3"
          align="left"
        >
          {item.title}
        </Typography>
        <Grid className={classes.articleInfo}>
          <Typography
            component="h4"
            align="left"
          >
            {formatTime(item.change_date)}
          </Typography>
          <Typography>
            {item.comments}评论
          </Typography>
        </Grid>

        <Grid className={classes.tags}>
          {
            item.tags.map(tag => (
              <Chip key={tag.id} label={tag.name} variant="outlined"/>
            ))
          }
        </Grid>
        <div
          className={classes.article}
          style={{maxWidth: '100%'}}
          dangerouslySetInnerHTML={{__html: item.excerpt}}
        />
        <Grid style={{
          position: 'absolute',
          bottom: 50
        }}>
          <UnderlineBtn label={"阅读全文"} to={`${router.DETAIL}/${item.id}`}/>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Articles;
