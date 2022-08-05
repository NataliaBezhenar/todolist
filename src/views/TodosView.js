import React, { Component } from "react";
import Container from "../components/Container";
import TodoList from "../components/TodoList";
import TodoEditor from "../components/TodoEditor";
import Filter from "../components/TodoFilter";
import Modal from "../components/Modal/Modal";
import IconButton from "../components/IconButton";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import useModal from "../components/Modal/useModal";

const barStyles = {
  display: "flex",
  alignItems: "flex-end",
  marginBottom: 20,
};

const TodosView = () => {
  const { isShowing, toggle } = useModal();

  // toggleCompleted = (todoId) => {
  //   this.setState(({ todos }) => ({
  //     todos: todos.map((todo) =>
  //       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  //     ),
  //   }));
  // };

  // calculateCompletedTodos = () => {
  //   const { todos } = this.state;

  //   return todos.reduce(
  //     (total, todo) => (todo.completed ? total + 1 : total),
  //     0
  //   );
  // };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        {/* <Stats total={totalTodoCount} completed={completedTodoCount} /> */}
        <IconButton onClick={toggle} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
      </div>

      <TodoList />

      <Modal isShowing={isShowing} hide={toggle}>
        <TodoEditor />
      </Modal>
    </Container>
  );
};

export default TodosView;
