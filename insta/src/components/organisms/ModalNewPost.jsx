import styled from "styled-components";
import { Backdrop } from "../atoms/modal";
import { useRef, useState } from "react";
import UploadApis from "../../apis/upload";
import PostApis from "../../apis/posts";

const ModalNewPost = ({ onClose }) => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [priviews, setPriviews] = useState([]);
  const fileClick = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles((prev) => [...prev, file]);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPriviews((prev) => [...prev, reader.result]);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (files.length === 0) return;

    const promises = files.map((file) => {
      return UploadApis.uploadImage(file);
    });
    const images = await Promise.all(promises);

    await PostApis.createPosts({ content, images });
    onClose();
  };

  return (
    <>
      <Backdrop
        onClick={(e) => {
          if (e.currentTarget === e.target) onClose();
        }}
      >
        <Container>
          <Header>
            새 게시물 만들기
            <BtnSubmit onClick={handleSubmit}>게시</BtnSubmit>
          </Header>
          <Body>
            <Guide>사진과 동영상을 여기에 끌어다 넣으세요</Guide>
            <BtnUpload
              onClick={() => {
                fileClick.current.click();
              }}
            >
              컴퓨터에서 선택
            </BtnUpload>
            <InputFile
              type="file"
              ref={fileClick}
              onChange={handleFileChange}
              accept="image/*"
            />
            {priviews.map((file) => (
              <ImgPreviw src={file} />
            ))}
            <Textarea row="6" onChange={(e) => setContent(e.target.value)} />
          </Body>
        </Container>
      </Backdrop>
    </>
  );
};

const Container = styled.div`
  max-width: 700px;
  width: 70%;
  height: 70%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const Header = styled.div`
  height: 42px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
`;

const BtnSubmit = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  box-sizing: Border-box;
`;
const Guide = styled.span`
  font-size: 24px;
`;
const BtnUpload = styled.button`
  background: #0095f6;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  margin-top: 10px;
  color: #fff;
`;
const InputFile = styled.input`
  display: none;
`;

const ImgPreviw = styled.img`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
`;

export default ModalNewPost;
