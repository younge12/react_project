import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getBook } from "../../apis";

const BookDetail = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const { items } = await getBook({ d_isbn: isbn });
    setBook(items[0]);
  };

  const { image, title, author } = book;
  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <Desc>{author}</Desc>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ddd;
  margin: 20px;
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h1`
  font-size: 24px;
  color: #222;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
`;
const Desc = styled.div`
  padding: 20px;
  box-sizing: border-box;
  font-size: 18px;
`;

export default BookDetail;
