import styled from "styled-components";

const TodoList = ({ data, onDelete, onChecked }) => {
  return (
    <List>
      {data.map(({ id, content, checked }) => (
        <Item key={id}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onChecked(id)}
            />
            <Content>{content}</Content>
          </label>
          <BtnDelete onClick={() => onDelete(id)}>X</BtnDelete>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  min-height: 300px;
  background: #fff;
`;
const Item = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  & + & {
    border-top: 1px solid #ddd;
  }
`;
const Content = styled.span``;
const BtnDelete = styled.button``;
export default TodoList;
