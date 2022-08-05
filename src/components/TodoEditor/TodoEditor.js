import React, { useState } from "react";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";
import styles from "./TodoEditor.module.css";

const TodoEditor = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(message);

    setMessage("");
  };

  return (
    <form className={styles.TodoEditor} onSubmit={handleSubmit}>
      <textarea
        className={styles.TodoEditor__textarea}
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className={styles.TodoEditor__button}>
        Save
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);