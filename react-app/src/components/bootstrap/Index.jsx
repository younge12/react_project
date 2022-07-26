import styled from "styled-components";
import Accordion from "./Accordion";
import { data1, data2 } from "../../datas/Accordion";
import Dropdown from "./Dropdown";
import Dropdown02 from "./Dropdown02";
import Carousel1 from "./Carousel1";
import images from "../../datas/Images";

const Bootstrap = () => {
  return (
    <Layout>
      <Accordion data={data1} />
      <Accordion data={data2} />
      <Dropdown />
      <Dropdown02 />
      <Carousel1 data={images} />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;
export default Bootstrap;
