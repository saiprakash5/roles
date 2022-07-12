import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  
  } from "@mui/material";


export const Signup = () => {

   
  return (
    <Container maxWidth="sm">
      <Grid item xs={12}>
        <Box
          m={10}
          p={2}
          sx={{
            width: 300,
            height: 300,

            backgroundColor: "#d1c4e9",
            opacity: [0.9, 0.8, 0.7],
          }}
        >
          <Grid container spacing={1}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid m={3}>
                <TextField
                  name="name"
                  label="User Name*"
                  variant="standard"
                  placeholder="Enter ur name"
                />
                <TextField
                  name="ID"
                  label="ID*"
                  variant="standard"
                  placeholder="Enter ur id"
                />
                
              </Grid>
              <Grid >
                <Button variant="contained" color="secondary">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};
