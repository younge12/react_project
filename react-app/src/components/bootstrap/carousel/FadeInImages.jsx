import styled from "styled-components";

const FadeInImages = ({ data, index }) => {
  return (
    <Images>
      {data.map(({ id, image }, i) => (
        <Image key={id} src={image} active={index === i} />
      ))}
    </Images>
  );
};

const Images = styled.div`
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: ${({ active }) => !active && "0"};
  transition: all 0.5s;
`;

export default FadeInImages;
