import React from 'react';
import Typography  from '@mui/material/Typography';
import Input from './Components/Input';
import ToDoList from './Components/ToDoList';
import './App.css';


function App() {
  return (
    <div className="mainTitle">
     <Typography component={"h1"} variant={"h3"} >ToDo List </Typography>
     <Input/>
     <ToDoList/>
    </div>
  );
}

export default App;
