import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0); // 변수 배열 할당 useState(초기값)
  let number2 = 0;

  const handleClick = () => {
    setNumber(number + 1); // set 함수 비동기 (console 먼저 실행 후 실행)
    number2 += 1;
    console.log(number2);
  };

  return (
    <>
      <p>{number}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
export default Counter;
