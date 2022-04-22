
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, deleteToDo } from '../app/redux/ToDoSlice';
import Checkbox from '@mui/material/Checkbox';





const ToDoItem = ({id, name, done}) => {
  const dispatch = useDispatch();
  const handleDoneClick = ()=>{
    dispatch(
      toggleDone({id:id, done:!done})
    )
  }
  const handleDeleteClick =()=>{
    dispatch(deleteToDo({id:id}))
  }
  return (

    <div className='toDoItemDiv'>
     <button className='toDoBtn'>{name}</button>
     <Checkbox checked={done} onChange={handleDoneClick}/>
     
     <button  className='deleteBtn' onClick={handleDeleteClick}>Delete</button>
    
    
    </div>
  )
}

export default ToDoItem