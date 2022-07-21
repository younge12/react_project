import { useRef, useState } from "react";
import styled from "styled-components";

const Form = ({ onAdd }) => {
  const inputEl = useRef(null);
  const [text, SetText] = useState("");
  const handleClick = () => {
    onAdd(text);
    SetText("");
    inputEl.current.focus();
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onAdd(text);
      SetText("");
      inputEl.current.focus();
    }
  };
  return (
    <>
      <InputWrapper>
        <Input
          value={text}
          onChange={(e) => SetText(e.target.value)}
          onKeyUp={handleKeyUp}
          ref={inputEl}
        />
        <BtnSubmit onClick={handleClick}>+</BtnSubmit>
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div`
  display: flex;
  height: 40px;
`;
const Input = styled.input`
  flex: 1;
  background: #000;
  color: #fff;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px;
`;
const BtnSubmit = styled.button`
  border: none;
  color: #fff;
  font-size: 24px;
  width: 40px;
  background: #868e96;
  cursor: pointer;
`;
export default Form;
