import React from "react";
import { Box, MenuItem,Select,FormControl ,InputLabel,SelectChangeEvent } from "@mui/material";
import { useState } from "react";


export const Dropdown = () => {
  const [department, setDepartment] = useState("");
  console.log({ department });
  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
   
  return (
    <Box width="200px" p={3} m={1}>
      <FormControl variant="standard" fullWidth>
      <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
        value={department}
        onChange={handleChange}
        size="medium"
      >
        <MenuItem value={1}>ECE</MenuItem>
        <MenuItem value={2}>IT</MenuItem>
        <MenuItem value={3}>EEE</MenuItem>
        <MenuItem value={4}>CSE</MenuItem>
        <MenuItem value={5}>MEC</MenuItem>
     </Select>
     </FormControl>
    </Box>
  );
};
