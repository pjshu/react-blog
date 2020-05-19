import {makeStyles} from "@material-ui/core";

const randomColor = (id) => {
  const color = [
    "#BE84D7,#F2DAFF",
    "#8376ED,#BE84D7",
  ];
  id = (id - 1) % color.length;
  return `linear-gradient(135deg, ${color[id]})`;
};

export default makeStyles(theme => ({
  colorTags: {
    '& > *': {
      marginTop: '10px'
    }
  },
  root: {
    position: 'relative',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    paddingLeft: 10,
    fontSize: 17,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    height: 50,
    width: 290,
    background: (id) => randomColor(id),
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px',
  },
  count: {
    position: 'absolute',
    right: '10px'
  }
}));
