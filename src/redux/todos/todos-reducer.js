import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./todos-actions";

const items = createReducer([], {
  [actions.addTodo]: (state, action) => [...state, action.payload],

  [actions.deleteTodo]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),

  [actions.toggleCompleted]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo
    ),
  [actions.editTodo]: (state, action) => [...state, action.payload],
});

const filter = createReducer("", {
  [actions.changeFilter]: (state, action) =>
    state.forEach((todo) =>
      todo.id === action.payload.id ? (todo.text = action.payload.text) : todo
    ),
});

export default combineReducers({ items, filter });
