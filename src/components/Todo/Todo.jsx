import React from "react";
import styles from "./Todo.module.css";
import useModal from "../Modal/useModal";
import Modal from "../Modal";
import TodoEditor from "../TodoEditor";

const Todo = ({ text, completed, onToggleCompleted, onDelete, onEdit }) => {
  const { toggle, isShowing } = useModal();
  return (
    <>
      <input
        type="checkbox"
        className={styles.TodoList__checkbox}
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className={styles.TodoList__text}>{text}</p>

      <button type="button" className={styles.TodoList__btn} onClick={toggle}>
        Edit
      </button>
      <button type="button" className={styles.TodoList__btn} onClick={onDelete}>
        Delete
      </button>

      <Modal isShowing={isShowing} hide={toggle}>
        <TodoEditor onSave={toggle} />
      </Modal>
    </>
  );
};

export default Todo;
