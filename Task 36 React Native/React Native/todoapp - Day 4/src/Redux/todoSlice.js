import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;
      if (title && description) {
        const newTask = {
          id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          title,
          description,
          isCompleted: false,
        };
        state.todos = [...state.todos, newTask];
      } else {
        console.error("Title and Description are required.");
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodoCompletion: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
    loadTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoCompletion, loadTodos } =
  todoSlice.actions;
export default todoSlice;
