import React, { useState } from "react";
import { Container, Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [user, setUser] = useState({
    id: "",
  });

  
  
  let history = useNavigate();
  
  const [err, setErr] = useState(0);
  const Valid = () => {
   

      setErr(0);

      if (user.id.length<6) {
        setErr(1);
        alert("please enter your id")
       
      }  else {
        console.log(user)
        // history("/cards");
      }
    }
  
  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <Container maxWidth="sm">
        <Box m={5} p={5} sx={{ backgroundColor: "aliceblue" }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            mt={3}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="User id"
                  variant="outlined"
                  name="id"
                  value={user.id}
                  error={err === 1 && true}
                  onChange={onChangeValue}
                />
              </Grid>
             
              <Grid item xs={12}>
                <Button variant="contained" onClick={Valid}>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
              <p>If you don't have an account please signup</p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};