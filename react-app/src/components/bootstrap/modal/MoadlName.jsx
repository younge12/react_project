import { useState } from "react";
import styled from "styled-components";

const ModalName = ({ onClose, onChange, name }) => {
  const [text, setText] = useState(name);
  const handleSubmit = () => {
    onChange(text);
    onClose();
  };
  return (
    <>
      <Backdrop
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            onClose();
          }
        }}
      >
        <ModalContainer>
          <Header>이름 바꾸기</Header>
          <Body>
            <Input
              type="text"
              placeholder="이름을 입력해주세요"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Body>
          <Footer>
            <BtnClose onClick={onClose}>닫기</BtnClose>
            <BtnSubmit onClick={handleSubmit}>저장</BtnSubmit>
          </Footer>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 20px;
`;

const Header = styled.div`
  font-size: 24px;
  color: #222;
`;
const Body = styled.div`
  padding: 15px 0;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  box-sizing: Border-box;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`;
const BtnClose = styled(Btn)`
  background: #fff;
  margin-right: 10px;
`;
const BtnSubmit = styled(Btn)`
  background: #222;
  color: #fff;
`;

export default ModalName;
