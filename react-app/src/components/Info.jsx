import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");

  //   useEffect(() => {
  //     console.log("랜더링 바뀔때마다 실행");
  //   });
  useEffect(() => {
    console.log("name 랜더링 바뀔때마다 실행");

    return () => {
      console.log("값이 바뀌기 전에 실행");
    };
  }, [name]);
  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="nick"
          onChange={(e) => setNick(e.target.value)}
        />
        <h1>이름 : {name}</h1>
        <h1>닉네임 : {nick}</h1>
      </div>
    </>
  );
};

export default Info;
