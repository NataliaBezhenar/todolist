import React from "react";
import styles from "./TodoFilter.module.css";
import { connect } from "react-redux";
import todosActions from "../../redux/todos/todos-actions";

const TodoFilter = ({ value, onChange }) => (
  <div className={styles.TodoFilter}>
    <p className={styles.TodoFilter__label}>Find todo</p>
    <input
      type="text"
      className={styles.TodoFilter__input}
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = (state) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(todosActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
