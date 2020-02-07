import React from 'react';
import {useRequests} from '../hook';
import api from '../contants/api';
import {Container, Grid} from "@material-ui/core";

function Tag() {
  const data = useRequests([], api.tag);
  console.log(data);
  return (
    <Container maxWidth={"md"}>
      <Grid container justify="center" spacing={8}>

        <Grid item>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            style={{
              height: 100,
              width: 100,
              background: '#eee'
            }}>
            <Grid>
              title
            </Grid>
            <Grid>
              5
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            style={{
              height: 100,
              width: 100,
              background: '#eee'
            }}>
            <Grid>
              title
            </Grid>
            <Grid>
              5
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            style={{
              height: 100,
              width: 100,
              background: '#eee'
            }}>
            <Grid>
              title
            </Grid>
            <Grid>
              5
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            style={{
              height: 100,
              width: 100,
              background: '#eee'
            }}>
            <Grid>
              title
            </Grid>
            <Grid>
              5
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            style={{
              height: 100,
              width: 100,
              background: '#eee'
            }}>
            <Grid>
              title
            </Grid>
            <Grid>
              5
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            direction={"column"}
            alignItems={"center"}
            justify={"space-around"}
            style={{
              height: 100,
              width: 100,
              background: '#eee'
            }}>
            <Grid>
              title
            </Grid>
            <Grid>
              5
            </Grid>
          </Grid>
        </Grid>


      </Grid>
    </Container>
  );
}

export default Tag;
