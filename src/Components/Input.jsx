import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../app/redux/ToDoSlice";
import Grid from "@mui/material/Grid";
import "../App.css";

const Input = (props) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
 if(!value.trim()) {
   return
 }
    dispatch(
      addToDo({
        name: value,
      })
    );
    setValue("")
  };
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Grid container className={"inputArea"}>
        <form
          onSubmit={handleSubmit}
          style={{ width: "550px" }}
          className="from"
        >
            <input
              type="text"
              className={"mainInput"}
              placeholder="Add a new task ..."
              value={value}
              onChange={handleChange}
              {...props}
            ></input>
         
          <button type="submit" className={"submitBtn"}>
            Submit
          </button>
        </form>
      </Grid>
    </div>
  );
};

export default Input;
