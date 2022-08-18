import { useEffect, useState } from "react";
import styled from "styled-components";
import PostApis from "../../../apis/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const posts = await PostApis.getPosts();
    setPosts(posts);
  };

  return (
    <List>
      {posts.map(({ id, content, name, images }) => (
        <Item key={id}>
          <Header>{name}</Header>
          <Images>
            {images.map((images) => (
              <Image src={images} />
            ))}
          </Images>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div``;
const Item = styled.article`
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  & + & {
    margin-top: 20px;
  }
`;
const Header = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 18px;
`;
const Images = styled.div``;
const Image = styled.img`
  width: 100%;
`;
const Body = styled.div``;

export default Posts;
