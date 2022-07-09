import React, { useState,useEffect } from "react";
import { Container, Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
const axios = require('axios');
export const Papi=()=>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    getdata();
  }, []);
    let history=useNavigate()
    const getdata = () => {
        const formdata = new FormData();
    
        axios.get("/select", formdata).then(function (res) {
          if (res.data.status === true) {
            setUsers(res.data.data);
            
            setLoading(false);
          } else {
            this.setUsers({
              data: [],
              noData: false,
            });
          }
          console.log(res.data.data);
        });
      };
      const deleteRow = (id) => {
        setLoading(true);
        const formdata = new FormData();
        formdata.append("id", id);
        axios.post("/delete", formdata).then(function (response) {
          if (response.data.status === true) {
            getdata();
          }
          console.log(response.data);
        });
      };
    return(
        <div style={{marginTop:"100px"}}>
              <div>
           {loading ? (
        <h3>Fetching Please wait....</h3>
      ) : (
        <div>
          {users.length === 0 ? (
            <p> no user's records available.... </p>
          ) : (
            <div>
           
            <h1>Api fetching</h1>
            <table>
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>EDIT/UPDATE</th>
                <th>DELETE</th>
                </tr>
                
                {users.map((user) => {
                      return (
                        <tr>
                         

                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>
                            <form>
                              <Button
                                variant="contained"
                                color="success"
                                onClick={() => history(`/edit/${user.id}`)}
                              >
                                Edit
                              </Button>
                            </form>
                          </td>
                          <td>
                            <form>
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => deleteRow(user.id)}
                              >
                                Delete
                              </Button>
                            </form>
                          </td>
.
                </tr>
                   );
                })}
             
            </table>
      
        </div>
      )}
    </div>
  )}
</div>
</div>
)
}
 
  

 

export const Principle = () => {
  const [user, setUser] = useState({
    id: "",
  });
  
  let history = useNavigate();
  
  const [err, setErr] = useState(0);
  const Valid = () => {
   

      setErr(0);

      if (user.id.length<1) {
        setErr(1);
        alert("please enter your id")
       
      }  else {
        
        const formdata = new FormData();
      formdata.append("name", user.name);
      console.log(formdata);
         history('/papi')
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
              <p>If you don't have an account please <a href="/signup">signup</a></p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
     
    </div>
  );
};