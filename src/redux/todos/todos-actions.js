import todosTypes from "./todos-types";
const addTodo = (text) => ({
  type: todosTypes.ADD,
  payload: {
    id: Math.random(),
    text,
    completed: false,
  },
});

export default { addTodo };
