import { useRef } from "react";

const InputFile = () => {
  const fileClick = useRef(null);

  return (
    <>
      <button onClick={() => fileClick.current.click()}>파일 업로드</button>
      <input type="file" ref={fileClick} style={{ display: "none" }} />
    </>
  );
};
export default InputFile;
