import todosTypes from "./todos-types";
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction(todosTypes.ADD, (text) => {
  return {
    payload: { id: Math.random(), text, completed: false },
  };
});

const deleteTodo = createAction(todosTypes.DELETE);
const changeFilter = createAction(todosTypes.CHANGE_FILTER);

const todoActions = { addTodo, deleteTodo, changeFilter };
export default todoActions;
