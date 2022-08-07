import types from "./user-types";

const login = (name) => ({ type: types.LOGIN, payload: name });

export default { login };
