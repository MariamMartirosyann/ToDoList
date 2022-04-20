import React from 'react';
import  Typography  from '@mui/material/Typography';
import Input from './Components/Input';
import './App.css';

function App() {
  return (
    <div className="App">
     <Typography component={"h1"} variant={"h3"} className="mainTitle">ToDo List </Typography>
   <Input/>
    </div>
  );
}

export default App;
