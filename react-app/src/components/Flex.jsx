import styled from "styled-components";

const Flex = () => {
  return (
    <Parent>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Parent>
  );
};

const Parent = styled.div`
  background: blue;
  width: 100%;
  height: 500px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
`;
const Box1 = styled(Box)`
  background: red;
`;
const Box2 = styled(Box)`
  background: yellow;
  height: 50px;
`;
const Box3 = styled(Box)`
  background: green;
  height: 300px;
`;
const Box4 = styled(Box)`
  background: pink;
  height: 200px;
`;

export default Flex;
