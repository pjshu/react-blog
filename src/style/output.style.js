/*编辑器输出样式*/
import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  root: {
    whiteSpace: 'pre-wrap',
    // maxWidth: '100%',
    fontFamily: 'Rubik-Regular-kern-latin',
    '& a': {
      wordBreak: 'break-word',
    },
    '& ul': {
      marginLeft: 10
    }
  },
  emoji: {
    '& .braft-emoticon-wrap > img': {
      width: '20px'
    }
  },
  table: {
    '&  table': {
      tableLayout: 'fixed',
      width: '100%',
      borderCollapse: 'collapse',
      boxShadow: '0 0 0 1px #dfdfdf',
    },
    '&  td': {
      padding: '20px',
      letterSpacing: '1px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '10px',
      },
    },
    '&  tr:nth-child(even) > td:nth-child(even)': {
      background: '#F6F8FC'
    },
    '&  tr:nth-child(odd) > td:nth-child(odd)': {
      background: '#F6F8FC'
    }
  },
}));
