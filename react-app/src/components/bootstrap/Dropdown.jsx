import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const wrapperEl = useRef(null);
  const buttonEl = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const onClick = (e) => {
      if (!wrapperEl.current.contains(e.target)) {
        setActive(false);
      }
      // if (e.target !== buttonEl.current) {
      //   setActive(false);
      // }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      // (여러번 호출 하는거 클리어 시켜줌)
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper ref={wrapperEl}>
      <Button ref={buttonEl} onClick={() => setActive(!active)}>
        Dropdown Button
      </Button>
      {active && (
        <List>
          <Item>Action</Item>
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
