import { useRef } from "react";
import styled from "styled-components";
import useDropdown from "../../hook/useDropdown";

const Dropdown = () => {
  const wrapperEl = useRef(null);

  const [active, setActive] = useDropdown(wrapperEl);

  return (
    <Wrapper ref={wrapperEl}>
      <Button onClick={() => setActive(!active)}>Dropdown Button02</Button>
      {active && (
        <List>
          <Item>Action02</Item>
          <Item>Another Action</Item>
          <Item>Somthing Action</Item>
        </List>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 200px;
`;
const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
`;

const List = styled.div`
  position: absolute;
  top: 40px;
  width: 200px;
  border-radius: 5px;
  padding: 10px 0;
  border: 1px solid #efefef;
`;
const Item = styled.div`
  padding: 5px 20px;
  cursor: pointer;
  :hover {
    background: #ddd;
  }
`;

export default Dropdown;
