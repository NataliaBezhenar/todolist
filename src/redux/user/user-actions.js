import types from "./user-types";

const login = (name) => ({ type: types.LOGIN, payload: name });

const actions = { login };

export default actions;
