import styled from "styled-components";
import { useState } from "react";

import Accordion from "./Accordion";
import { data1, data2 } from "../../datas/Accordion";
import Dropdown from "./Dropdown";
import Dropdown02 from "./Dropdown02";
import Carousel from "./carousel/Index";
import images from "../../datas/Images";
import ModalName from "./modal/MoadlName";
import Modal from "./modal";

const Bootstrap = () => {
  const [show, setShow] = useState(false);
  const [showModalNickname, setShowModalNickname] = useState(false);
  const [name, setName] = useState("홍길동");
  const [nickname, setNickname] = useState("별명");

  return (
    <Layout>
      <button onClick={() => setShow(!show)}>버튼</button>
      <Accordion data={data1} />
      <Accordion data={data2} />
      {show && <Dropdown />}
      <Dropdown02 />
      <Carousel data={images} type="fade-in" />
      <Carousel data={images} type="slide" />

      <div>
        {name}
        <Modal
          activator={(onOpen) => <button onClick={onOpen}>이름 바꾸기</button>}
          content={(onClose) => (
            <ModalName
              type="이름"
              name={name}
              onClose={onClose}
              onChange={(val) => setName(val)}
            />
          )}
        />
      </div>
      <div>
        {nickname}
        <button onClick={() => setShowModalNickname(true)}>
          닉네임 바꾸기
        </button>
      </div>

      {showModalNickname && (
        <ModalName
          type="닉네임"
          name={nickname}
          onClose={() => setShowModalNickname(false)}
          onChange={(val) => setNickname(val)}
        />
      )}
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;
export default Bootstrap;
