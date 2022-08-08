import styled from "styled-components";
import { useState } from "react";

import Accordion from "./Accordion";
import { data1, data2 } from "../../datas/Accordion";
import Dropdown from "./Dropdown";
import Dropdown02 from "./Dropdown02";
import Carousel from "./carousel/Index";
import images from "../../datas/Images";
import ModalName from "./modal/MoadlName";

const Bootstrap = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("홍길동");
  return (
    <Layout>
      <Accordion data={data1} />
      <Accordion data={data2} />
      <Dropdown />
      <Dropdown02 />
      <Carousel data={images} type="fade-in" />
      <Carousel data={images} type="slide" />
      <div>
        {name}
        <button onClick={() => setModal(true)}>모달</button>
      </div>
      {modal && (
        <ModalName
          onClose={() => setModal(false)}
          name={name}
          onChange={(val) => setName(val)}
        />
      )}
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;
export default Bootstrap;
