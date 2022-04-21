import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const ToDoItem = ({id, name, done}) => {
  return (
    <div className='toDoItemDiv'>
     <button className='toDoBtn'>{name}</button>
    <CheckCircleIcon className='doneIcon'/>
    <DeleteForeverIcon className='deleteIcon'/>
    </div>
  )
}

export default ToDoItem