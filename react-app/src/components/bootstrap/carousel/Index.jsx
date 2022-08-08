import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import FadeInImages from "./FadeInImages";
import SlideImages from "./SlideImages";

const Carousel1 = ({ data, type }) => {
  const [index, setIndex] = useState(0);
  const isLoding = useRef(false);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      handleClick(index + 1);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  useEffect(() => {
    isLoding.current = true;
    setTimeout(() => {
      isLoding.current = false;
    }, 500);
  }, [index]);

  const handleClick = (n) => {
    if (isLoding.current) return;
    const lastIndex = data.length - 1;
    let nextIndex = n;
    if (n < 0) nextIndex = lastIndex;
    if (n > lastIndex) nextIndex = 0;
    setIndex(nextIndex);
  };
  const images = {
    "fade-in": <FadeInImages data={data} index={index} />,
    slide: <SlideImages data={data} index={index} />,
  };
  return (
    <Container>
      {images[type]}
      <BtnLeft onClick={() => handleClick(index - 1)}>이전</BtnLeft>
      <BtnRight onClick={() => handleClick(index + 1)}>다음</BtnRight>
      <Pages>
        {data.map(({ id }, i) => (
          <BtnPages
            key={id}
            active={index === i}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </BtnPages>
        ))}
      </Pages>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  margin-bottom: 100px;
  overflow: hidden;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
`;
const BtnLeft = styled(Btn)`
  left: 20px;
`;
const BtnRight = styled(Btn)`
  right: 20px;
`;

const Pages = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`;
const BtnPages = styled.button`
  border: 0;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  & + & {
    margin-left: 5px;
  }
  ${({ active }) =>
    active &&
    css`
      background: #222;
      color: #fff;
    `}
`;

export default Carousel1;
