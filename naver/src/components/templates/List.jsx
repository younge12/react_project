import { useState } from "react";
import styled from "styled-components";

const List = () => {
    const [items, setItems] = useState([]);
    return(
      <List>
      {items.map(({ link, image, title }) => (
        <Item key={link}>
          <Thumbnail src={image} />
          <a href={link} target="_blank" rel="noreferrer">
            <Name dangerouslySetInnerHTML={{__html:title}}/>
          </a>
        </Item>
      ))}
    </List>
    )
}

const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Name = styled.p``;

export default List;