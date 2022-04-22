import React from 'react';
import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';
import TotalCompleteItems from './TotalCompleteItems';




const ToDoList = () => {
  const toDoItems = useSelector((state)=> state.todo)
  return (
    <div>
      {toDoItems ? toDoItems.map(i => <ToDoItem id = {i.id} name={i.name} done={i.done}/>):null}
      <TotalCompleteItems/>
    </div>
  )
}

export default ToDoList