import React from "react";
import Container from "../components/Container";
import TodoList from "../components/TodoList";
import TodoEditor from "../components/TodoEditor";
import Modal from "../components/Modal";
import IconButton from "../components/IconButton";
import { ReactComponent as AddIcon } from "../icons/add.svg";
import useModal from "../components/Modal/useModal";
import Stats from "../components/Stats";

const barStyles = {
  display: "flex",
  alignItems: "flex-end",
  marginBottom: 20,
};

const TodosView = () => {
  const { isShowing, toggle } = useModal();

  return (
    <Container>
      <div style={barStyles}>
        <Stats />
        <IconButton onClick={toggle} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
      </div>

      <TodoList />

      <Modal isShowing={isShowing} hide={toggle}>
        <TodoEditor onSave={toggle} />
      </Modal>
    </Container>
  );
};

export default TodosView;
