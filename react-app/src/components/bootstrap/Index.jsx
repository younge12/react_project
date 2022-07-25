import styled from "styled-components";
import Accordion from "./Accordion";
import data from "../../datas/Accordion";
import data02 from "../../datas/Accordion02";

const Bootstrap = () => {
  return (
    <Layout>
      <Accordion data={data} />
      <Accordion data={data02} />
    </Layout>
  );
};

const Layout = styled.div`
  padding: 50px;
`;
export default Bootstrap;
