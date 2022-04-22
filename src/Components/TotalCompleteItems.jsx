import React from 'react';
import  Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
    const completedToDos = useSelector((state)=> state.todo.filter((todo) => todo.done === true));

   return (
    <div>
         <Typography className='totalCompleteItems' component={"h3"} variant={"h4"} >Total Complete Items :  { completedToDos.length}</Typography>
    </div>
  )
}

export default TotalCompleteItems