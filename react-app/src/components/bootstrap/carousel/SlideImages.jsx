import styled from "styled-components";

const SlideImages = ({ data, index }) => {
  return (
    <Images translateX={index * -600}>
      <Image src={data.at(-1).image} />
      {data.map(({ id, image }) => (
        <Image key={id} src={image} />
      ))}
      <Image src={data[0].image} />
    </Images>
  );
};

const Images = styled.div`
  display: flex;
  height: 100%;
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  transition: transform 0.5s;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

export default SlideImages;
