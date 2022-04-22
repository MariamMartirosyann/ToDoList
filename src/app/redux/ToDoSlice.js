import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, name: "task1", done: false },
    { id: 2, name: "task2", done: false },
    { id: 3, name: "task3", done: true },
  ],
  reducers: {
    addToDo: (state, action) => {
      const newToDo = {
        id: Date.now(),
        name: action.payload.name,
        done: false,
      };
      state.push(newToDo);
    },
    toggleDone: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].done = action.payload.done;
    },
    deleteToDo: (state, action) => {
     return  state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
export const { addToDo, toggleDone, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;
