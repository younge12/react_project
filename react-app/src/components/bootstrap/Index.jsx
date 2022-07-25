import styled from "styled-components";
import Accordion from "./Accordion";
import { data1, data2 } from "../../datas/Accordion";
import Dropdown from "./Dropdown";

const Bootstrap = () => {
  return (
    <Layout>
      <Accordion data={data1} />
      <Accordion data={data2} />
      <Dropdown />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;
export default Bootstrap;
