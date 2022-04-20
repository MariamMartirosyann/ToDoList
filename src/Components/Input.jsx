import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import '../App.css';


const Input = () => {
  return (
    <div className={"inputArea"}>
      <FormControl sx={{ width: "25ch" }} >
        <OutlinedInput placeholder="Please enter text" />

      </FormControl>
    </div>
  );
};

export default Input;
