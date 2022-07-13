import React,{useContext} from "react";
import { Box, Container, Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {UserContext, RoleContext} from './usercontext'
const axios = require("axios");
export const Login = () => {
  let history = useNavigate();
  const { setAuth } = useContext(UserContext);
  const [user, setUsers] = useState({
    id: "",
  });

  const [err, setErr] = useState(0);

  const validateForm = () => {
    setErr(0);
    if (user.id.length !== 3) {
      setErr(1);
      alert("Please enter a valid 3 digit idnumber");
    } else {
      // axios
      //   .post("/select", {
      //     stud_id: user.id,
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //     console.log("logged in");

      //     if (response?.status === 200) history("/studenttable");
      //     else {
      //       alert(response?.message);
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      // const formdata = new FormData();
      // //formdata.append("name", user.name);
      // formdata.append("id", user.id);
      // console.log(formdata);
      history("/studenttable");
      setAuth({ user_role: user.id });
      console.log("res.data");
    }
  };

  const onChangeValue = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Grid item xs={12}>
        <Box
          m={10}
          p={2}
          sx={{
            width: 300,
            height: 300,

            backgroundColor: "#ef9a9a",
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
                {/* <TextField
                    name="name"
                    label="User Name*"
                    value={user.name}
                    variant="standard"
                    placeholder="Enter ur name"
                    error={err === 1 && true}
                onChange={onChangeValue}
                  /> */}
                <TextField
                  name="id"
                  label="ID*"
                  value={user.id}
                  variant="standard"
                  placeholder="Enter ur id"
                  error={err === 1 && true}
                  onChange={onChangeValue}
                />
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => { validateForm();
                    localStorage.setItem("ID", user.id);
                  }}
                >
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