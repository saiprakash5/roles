import React, { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const axios = require("axios");

export const Studenttable = () => {
  const histroy = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios.get("/select").then(function (response) {
      if (response.data.status === true) {
        setUsers(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      }
      console.log(response.data.data);
    });
  };

  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>COMPANY</TableCell>
            <TableCell>STUD ID</TableCell>

            <TableCell>STUD NAME</TableCell>

            <TableCell>Edit</TableCell>

            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.stud_id}</TableCell>
                <TableCell>{user.stud_name}</TableCell>
                <TableCell>
                  <form>
                    <Button
                      variant="contained"
                      color="success"
                      
                    >
                      Edit
                    </Button>
                  </form>
                </TableCell>
                <TableCell>
                  <form>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </form>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
