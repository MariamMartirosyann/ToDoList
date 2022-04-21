import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import '../App.css';


const Input = () => {
  return (
    <div className={"inputArea"}>
      <FormControl sx={{ width: "550px" }} >
        <OutlinedInput placeholder="Please enter text" />
       < AddCircleIcon className="addIcon"/>

      </FormControl>
    </div>
  );
};

export default Input;
