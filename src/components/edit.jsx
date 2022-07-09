
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Button,TextField } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom'



export const Edit = () => {
  let { id } = useParams();
  const [user, setUsers] = useState({ name: "" })
 let history=useNavigate()
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(0);
  useEffect(() => {
    getdata();

  }, [])

  const getdata = () => {
   console.log(user)
    history("/")
  }

  const validateForm = () => {
    setErr(0)
    if (user.name === "") {
      setErr(1)
      alert("Please enter Name")

    } 
    
    else {
console.log(user)
  
    }

  }

  const onChangeValue = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  }


  return (
    <div>

      <Container maxWidth="sm">
    
        {loading ? <p>fetching data</p> :
          <Box>
            
            <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                val={user.name}
                change={onChangeValue}
                error={err === 1 && true}
              />
            </Grid>
            
              <Grid item >
                <Button variant="contained" color="success" onClick={validateForm} >Edit
                </Button>
              </Grid>
            </Grid>
          </Box>}
      </Container>


    </div>
  );
}