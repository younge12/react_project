import { useState } from "react";

const Counter02 = () => {
  const [number, setNumber] = useState(7);
  const handleClick = (n) => {
    setNumber(number + n);
  };
  return (
    <>
      <p>현재 카운터 값은 {number} 입니다.</p>
      <button id="plus" onClick={() => handleClick(3)}>
        +3
      </button>
      <button id="plus" onClick={() => handleClick(1)}>
        +1
      </button>
      <button id="min" onClick={() => handleClick(-1)}>
        -1
      </button>
      <button id="min" onClick={() => handleClick(-3)}>
        -3
      </button>
    </>
  );
};

export default Counter02;
