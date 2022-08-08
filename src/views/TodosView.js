import React from "react";

import Container from "../components/Container";
import TodoList from "../components/TodoList";
import Stats from "../components/Stats";
import Header from "../components/Header/Header";
import ButtonsGroup from "../components/ButtonsGroup/ButtonsGroup";

const TodosView = () => {
  return (
    <Container>
      <Header />
      <ButtonsGroup />

      <TodoList />
      <Stats />
    </Container>
  );
};

export default TodosView;

// <Button onClick={toggle} aria-label="Add todo">
//   Add Task
// </Button>
