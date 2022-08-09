import styled from "styled-components";

const List = ({ data }) => {
  return (
    <Container>
      {data.map(({ title, image }) => (
        <Item>
          <Thumbnail src={image} />
          <Name>{title}</Name>
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Name = styled.p``;

export default List;
