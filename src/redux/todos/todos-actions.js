import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction("todos/add", (text) => {
  return {
    payload: { id: Math.random(), text, completed: false },
  };
});

const deleteTodo = createAction("todos/delete");
const changeFilter = createAction("todos/changeFilter");
const toggleCompleted = createAction("todos/toggleCompleted");

const todoActions = { addTodo, deleteTodo, changeFilter, toggleCompleted };
export default todoActions;
