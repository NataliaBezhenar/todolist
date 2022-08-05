import React from "react";
import { connect } from "react-redux";
import styles from "./Stats.module.css";

const Stats = ({ total, completed }) => (
  <div className={styles.Stats}>
    <p className={styles.Stats__item}>
      <span className={styles.Stats__value}>{total}</span>
      <span className={styles.Stats__label}>Total</span>
    </p>
    <p className="Stats__item">
      <span className={styles.Stats__value}>{completed}</span>
      <span className={styles.Stats__label}>Completed</span>
    </p>
  </div>
);

const getCompeltedTodosCount = (todos) =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const mapStateToProps = (state) => ({
  total: state.todos.items.length,
  completed: getCompeltedTodosCount(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
