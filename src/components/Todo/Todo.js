import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className={styles.TodoList__checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={styles.TodoList__text}>{text}</p>
    <button type="button" className={styles.TodoList__btn} onClick={onDelete}>
      Delete
    </button>
  </>
);

export default Todo;
