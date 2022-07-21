import { useRef, useState } from "react";
import styled from "styled-components";

import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);
  const handleAdd = (content) => {
    //todo를 추가할때
    if (content) {
      const nextTodos = [
        ...todos,
        { id: nextId.current, content: content, checked: false },
      ];
      setTodos(nextTodos);
      nextId.current++;
    }
  };
  const handleDelete = (deleteId) => {
    const nextTodos = todos.filter((e) => {
      return e.id !== deleteId;
    });
    setTodos(nextTodos);
  };
  const handleChecked = (checkedId) => {
    const nextTodos = todos.map((todo) => {
      todo.id === checkedId && (todo.checked = !todo.checked);
      return todo;
    });
    setTodos(nextTodos);
  };
  return (
    <>
      <Layout>
        <Container>
          <Title>일정관리</Title>
          <Form onAdd={handleAdd} />
          <TodoList
            data={todos}
            onDelete={handleDelete}
            onChecked={handleChecked}
          />
        </Container>
      </Layout>
    </>
  );
};

const Layout = styled.div`
  background: #e9ecef;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 600px;
`;
const Title = styled.div`
  background: #22b8cf;
  color: #fff;
  font-size: 24px;
  text-align: center;
  padding: 5px 0;
`;

export default Todo;
