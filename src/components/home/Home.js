import React from 'react';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import AppBar from "../topBar/AppBar";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import icon from '../../icons/home.svg';
import {Link} from "react-router-dom";
import router from "../../contants/router";

function Home() {
  return (
    <Container style={{height: '100%', position: "relative"}}>
      <Grid
        container
        spacing={3}
        justify={"center"}
        direction={"column"}
        style={{height: '100%', width: '50%'}}>
        <AppBar/>
        <Grid item>
          <Typography
            component={"h1"}
            style={{
              fontWeight: 'bold',
              fontSize: 35
            }}>
            Hello I Am PJShu,
          </Typography>
          <Typography
            component={"h1"}
            style={{
              fontSize: 35,
              fontWeight: 'bold'
            }}>
            Welcome To My Blog!
          </Typography>
          <Typography
            component={"h1"}
            style={{
              fontSize: 35,
              fontWeight: 'bold'
            }}>
            欢迎来到我的博客!
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <GitHubIcon style={{marginRight: 50, color: '#CB88D2'}}/>
            <TwitterIcon style={{marginRight: 50, color: '#C186D6'}}/>
            <MailOutlineIcon style={{marginRight: 50, color: '#8E79E9'}}/>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to={router.ABOUT}
            variant="contained"
            style={{
              borderRadius: 10,
              width: 100,
              color: '#fff',
              fontWeight: 'bold',
              background: 'linear-gradient(to right bottom, #CB88D2, #8E79E9)'
            }}
          >关于我</Button>
        </Grid>
        <Button
          component={Link}
          to={router.ARTICLES}
          variant="contained"
          style={{
            boxSizing: 'border-box',
            position: 'absolute',
            left: '50%',
            bottom: '0',
            transform: "translate(-50%, 0)",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: 50,
            height: 50,
            MozBorderRadius: 25,
            WebkitBorderRadius: 25,
            borderRadius: 25,
            minWidth: 50,
            background: 'linear-gradient(to right bottom, #CB88D2, #8E79E9)'
          }}
        >
          <ExpandMoreIcon style={{color: '#fff'}}/>
        </Button>

        <Grid
          style={{
            position: "absolute",
            right: '0px',
            top: '50%',
            transform: "translate(0%, -50%)",
            zIndex: '-10'
          }}>
          <img src={icon} alt="" style={{height: 500}}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
