import { combineReducers } from "redux";
import types from "./user-types";

const username = (state = "", action) => {
  switch (action.type) {
    case types.LOGIN:
      return action.payload;
    default:
      return state;
  }
};

const isLoggedIn = (state = false, action) => {
  return state;
};

export default combineReducers({ username, isLoggedIn });
