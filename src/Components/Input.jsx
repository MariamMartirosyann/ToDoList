import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../app/redux/ToDoSlice";

import "../App.css";


const Input = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(
      addToDo({
        name: input,
      })
    );
  };
  const handleChange = (event) => {
    setInput(event.target.input);
   
  };

  return (
    <div className={"inputArea"}>
      <form  onSubmit={handleSubmit} style={{ width: "550px" }}>
  
        <input
				type='text'
        className={"mainInput"}
				placeholder="Add a new task ..."
        value={input}
				onChange={handleChange}
			></input>
       
      </form>
      <button type="submit" className={"submitBtn"}>Submit</button>
    </div>
  );
};

export default Input;
