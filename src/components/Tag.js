import React from 'react';
import {useRequests} from '../hook';
import api from '../contants/api';
import {Container, Grid} from "@material-ui/core";


const randomColor = (id) => {
  const color = [
    '#7EAAFC, #726EE2',
    '#8DC5FA, #6C7FF0',
    '#7ABFF6, #7994F6',
    '#56C6E4, #6995E6',
    '#5ED1E3, #47B5EA',
    '#2088DA, #1C4FAD',
    '#47ABCD, #47ABCD',
  ];
  id = id % color.length;
  return `linear-gradient(135deg, ${color[id]})`;
};


function Tag(item) {
  return <Grid
    style={{
      fontWeight: 'bold',
      boxSizing: 'border-box',
      paddingLeft: 10,
      fontSize: 17,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '10px',
      height: 50,
      width: 200,
      background: randomColor(item.id),
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px',
    }}>
    {item.name}({item.count})
  </Grid>;
}

function Tags() {
  const data = useRequests([], api.tag);
  return (
    <Container maxWidth={"md"}>
      <Grid
        container
        spacing={8}
        style={{justifyContent: 'center'}}
      >
        {
          data.map(item => (
            <Grid item key={item.id}>
              <Tag {...item}/>
            </Grid>
          ))
        }
      </Grid>

    </Container>
  );
}

export default Tags;

