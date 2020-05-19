import useEditorStyle from "../../style/output.style";
import React, {useState, useCallback} from "react";
import {Chip, Grid, Typography, useMediaQuery, useTheme, Button} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {formatTime} from "../../helpers/datetime";
import {combineClassName} from "../../helpers/style";
import router from "../../contants/router";
import useStyles from './articleCard.style';
import {Link} from "react-router-dom";

function ArticleCard(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'), {noSsr: true});
  const classes = useStyles();
  const editorCSS = useEditorStyle();
  const [hover, setHover] = useState(false);

  const handleOnMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const handleOnMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  return (
    <Grid
      className={classes.root}
      container
      alignItems={"flex-start"}
      justify={"center"}
      direction={"column"}
    >
      <Paper
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        boxShadow={matches ? 1 : hover ? 1 : 6}
        component={Box}
        className={classes.paper}>
        <Typography
          className={classes.title}
          component="h1"
          align="left"
        >
          {props.title}
        </Typography>
        <Grid className={classes.articleInfo}>
          <Typography
            component="h2"
            align="left"
          >
            {formatTime(props.change_date)}
          </Typography>
          <Typography>
            {props.comments}评论
          </Typography>
        </Grid>

        <Grid className={classes.tags}>
          {
            props.tags &&
            props.tags.map(tag => (
              <Chip key={tag.id} label={tag.name} variant="outlined"/>
            ))
          }
        </Grid>
        <div
          className={combineClassName(editorCSS.root, classes.article, editorCSS.emoji)}
          dangerouslySetInnerHTML={{__html: props.excerpt}}
        />
        <Grid className={classes.buttonWrapper}>
          <Button
            component={Link}
            variant="outlined"
            className={classes.button}
            to={`${router.DETAIL}/${props.id}`}

          >
            阅读全文
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default React.memo(ArticleCard, (pre, next) => {
  return pre.id === next.id;
});
