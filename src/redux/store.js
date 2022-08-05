import todosReducer from "./todos/todos-reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
