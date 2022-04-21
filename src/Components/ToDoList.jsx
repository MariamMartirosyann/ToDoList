import React from 'react';
import ToDoItem from './ToDoItem';


const ToDoList = () => {
  return (
    <div>
     <ToDoItem name="Task 1"/>   
     <ToDoItem name="Task 2"/>  
     <ToDoItem name="Task 3"/>  
     <ToDoItem name="Task 4"/>  
    </div>
  )
}

export default ToDoList