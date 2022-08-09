import React, { useRef } from "react";
import styles from "./Todo.module.css";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";

const Todo = ({
  completed,
  onToggleCompleted,
  onDelete,
  onEditTodo,
  text,
  id,
}) => {
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (message, e) => {
    if (e.code === "Enter") {
      if (message !== "") {
        onEditTodo({ id, message });
      } else console.log("empty message");
      inputRef.current.disabled = true;
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        className={styles.TodoList__checkbox}
        checked={completed}
        onChange={onToggleCompleted}
      />
      <textarea
        className={styles.TodoList__text}
        ref={inputRef}
        disabled={inputRef}
        defaultValue={text}
        onKeyPress={(e) => update(inputRef.current.value, e)}
      />

      <button
        type="button"
        className={styles.TodoList__btn}
        onClick={() => changeFocus()}
      >
        Edit
      </button>
      <button type="button" className={styles.TodoList__btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.items,
});

const mapDispatchToProps = (dispatch) => ({
  onEditTodo: (obj) => dispatch(todosActions.editTodo(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
