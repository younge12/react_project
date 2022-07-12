const Jsx = () => {
  const name = "리액트";
  const name2 = null;
  const showModal = true;

  //삼항연산자 > name === "리액트" ? "맞습니다" : "틀립니다";

  return (
    <>
      {name === "리액트" ? <h1>리액트 입니다</h1> : <h2>리액트가 아닙니다.</h2>}
      {name === "리액트" && <h1>리액트 입니다.</h1>}
      {showModal && <h1>모달입니다.</h1>}
      {name2 || <h1>"값이 없습니다."</h1>}
    </>
  );
};

// export const a = "a";

// const b = "b";
// const c = "c";
// export {b,c};

export default Jsx;
