import { useState } from "react";
import styled from "styled-components";

const Form = ({ onChange }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onChange({ name: "query", value: text });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Input onChange={(e) => setText(e.target.value)} value={text} />
        <BtnSearch>검색</BtnSearch>
      </Container>
    </form>
  );
};

const Container = styled.div`
  margin: 20px;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSearch = styled.button``;

export default Form;
