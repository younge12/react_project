import styled, { css } from "styled-components";

const TodoList = ({ data, onDelete, onChecked }) => {
  return (
    <List>
      {data.map(({ id, content, checked }) => (
        <Item key={id} checked={checked}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onChecked(id)}
            />
            <Content checked={checked}>{content}</Content>
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
const Content = styled.span``;
const Item = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #ddd;
  }

  ${({ checked }) =>
    checked &&
    css`
      background: pink;
      ${Content} {
        text-decoration: line-through;
      }
    `};
  /* background: ${({ checked }) => checked && "pink"};
  ${Content} {
    text-decoration: ${({ checked }) => checked && "line-through"};
  } */
`;

const BtnDelete = styled.button``;
export default TodoList;
