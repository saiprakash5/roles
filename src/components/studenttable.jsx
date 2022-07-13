import React, { useEffect, useContext } from "react";
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
import { UserContext, RoleContext } from "./usercontext";
const axios = require("axios");

export const Studenttable = () => {
  const histroy = useNavigate();
  const [users, setUsers] = useState([]);
  const [select, setSelect] = useState();
  const [update, setUpdate] = useState();
  const [del, setDel] = useState();
  const { setRole } = useContext(RoleContext);
  const [id, setId] = useState();
  //const [loading, setLoading] = useState([]);
  var localID = localStorage.getItem("ID");

  useEffect(() => {
    getdata();
  }, [select, update, del]);

  let history = useNavigate();
  const getdata = () => {
    const formdata = new FormData();

    axios.get("/innerjoin", formdata).then(function (res) {
      if (res.data.status === true) {
        setUsers(res.data.data);
        console.log(res.data.data);
        var data = res.data.data;
        data.map((item) => {
          console.log(item.std_id);

          console.log(item.select);
          if (localID == item.std_id) {
            setSelect(item.select);
            setUpdate(item.update);
            setDel(item.delete);
            console.log(select, update, del);
          }
        });
        // setLoading(false);
      } else {
        this.setUsers({
          data: [],
          noData: false,
        });
      }
      // console.log(res.data.data);
    });
  };
  const deleteRow = (id) => {
    setLoading(true);
    const formdata = new FormData();
    formdata.append("stud_id", id);
    axios.post("/delete", formdata).then(function (response) {
      if (response.data.status === true) {
        getdata();
      }
      console.log(formdata);
      console.log(response.data);
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            {/* <TableCell>COMPANY</TableCell> */}
            <TableCell>STUD ID</TableCell>

            <TableCell>STUD NAME</TableCell>

            {update == "TRUE" && <TableCell>Edit</TableCell>}
            {del == "TRUE" && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.length > 0 &&
            users.map((user) => {
              return (
                <TableRow>
                  <TableCell>{user.id}</TableCell>
                  {/* <TableCell>{user.company}</TableCell> */}
                  <TableCell>{user.std_id}</TableCell>
                  <TableCell>{user.std_name}</TableCell>
                  {update == "TRUE" && (
                    <TableCell>
                      <form>
                        <Button variant="contained" color="success">
                          Edit
                        </Button>
                      </form>
                    </TableCell>
                  )}
                  {del == "TRUE" && (
                    <TableCell>
                      <form>
                        <Button variant="contained" color="error">
                          Delete
                        </Button>
                      </form>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
