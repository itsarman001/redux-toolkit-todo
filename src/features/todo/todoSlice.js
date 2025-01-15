import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    // Add a new todo item
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        content: action.payload,
        complete: false,
      };
      state.todos.push(newTodo);
    },

    // Toggle the complete status of a todo item
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },

    // Edit an existing todo item
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo && todo.content !== action.payload.content) {
        todo.content = action.payload.content;
      }
    },

    // Delete an existing todo item
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
