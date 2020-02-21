import React from 'react';
import {useRequests} from '../../hook';
import api from '../../contants/api';
import {Container, Grid} from "@material-ui/core";
import ColorTag from './ColorTag'



function Tags() {
  const data = useRequests([], api.tag);
  return (
    <Container maxWidth={"md"} style={{padding:'40px'}}>
      <Grid
        container
        spacing={8}
        style={{justifyContent: 'center'}}
      >
        {
          data.map(item => (
            <Grid item key={item.id}>
              <ColorTag {...item}/>
            </Grid>
          ))
        }
      </Grid>

    </Container>
  );
}

export default Tags;

