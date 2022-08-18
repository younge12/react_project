import styled from "styled-components";

import Posts from "../templates/Main/Posts";

const Main = () => {
  return (
    <Container>
      <Left>
        {/* <Shorts/> */}
        <Posts />
      </Left>
      <Right></Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  max-width: 470px;
  flex: 1;
`;
const Right = styled.div`
  max-width: 320px;
  flex: 1;
  margin-left: 50px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export default Main;
