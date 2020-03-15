import React, {useEffect, useState} from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import api from '../contants/api';
import axios from "../helpers/http";
import BraftEditor from "../config/editorConfig";
import 'braft-editor/dist/output.css';
import square from "../icons/square.svg";
import triangle from "../icons/triangle.svg";

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '80px 40px 40px 40px',
    background: `
      url(${square}) no-repeat fixed right 50px top 50px,
      url(${triangle}) no-repeat fixed left 10px bottom 50px
    `,
    backgroundSize: '200px, 400px',
    [theme.breakpoints.down("xs")]: {
      padding: '40px 10px 10px 0'
    },
  },
  htmlWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)',
    [theme.breakpoints.down("xs")]: {
      boxShadow: '0 0 0'
    },
    [theme.breakpoints.down("sm")]: {
      width:'100%',
    },

  },
  html: {
    maxWidth: '100%',
    lineHeight: '35px',

  }
}));

function About() {
  const [state, setState] = useState({
    about: ''
  });
  const classes = useStyle();
  useEffect(() => {
    axios.get(api.about).then(res => {
      const data = res.data;
      data.about = BraftEditor.createEditorState(data.about).toHTML();
      setState(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Grid
      container
      className={classes.root}
    >
      <Grid item
        xs={12}
        sm={10}
        md={8}
        lg={6}
        xl={4}
        className={classes.htmlWrapper}
      >
        <div
          className={classes.html}
          dangerouslySetInnerHTML={{__html: state.about}}
        />
      </Grid>
    </Grid>
  );
}

export default About;
