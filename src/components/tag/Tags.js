import React from 'react';
// import {useRequests} from '../../hook';
// import api from '../../contants/api';
import {Container, Grid} from "@material-ui/core";
// import ColorTag from './ColorTag'
import CardTag from "./CardTag";
import p1 from '../../icons/testIcon/1.png';
import ExpandMore from "../button/ExpandMore";

function Tags() {
  // const data = useRequests([], api.tag);
  return (
    <Container maxWidth={"lg"} style={{padding: '120px 40px 40px 40px'}}>
      <Grid
        spacing={8}
        justify={"center"}
        container
      >
        <Grid item>
          <CardTag image={p1}/>
        </Grid>
        <Grid item>
          <CardTag image={p1}/>
        </Grid>
        <Grid item>
          <CardTag image={p1}/>
        </Grid>
        <Grid item>
          <CardTag image={p1}/>
        </Grid>
        <Grid item>
          <CardTag image={p1}/>
        </Grid>
        <Grid item>
          <CardTag image={p1}/>
        </Grid>
      </Grid>
      {/*{*/}
      {/*  data.map(item => (*/}
      {/*    <Grid item key={item.id}>*/}
      {/*      <ColorTag {...item}/>*/}
      {/*    </Grid>*/}
      {/*  ))*/}
      {/*}*/}
      <div style={{
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <ExpandMore/>
      </div>

    </Container>
  );
}

export default Tags;

