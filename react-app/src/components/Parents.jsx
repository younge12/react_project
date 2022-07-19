import { useState } from "react";
import Info from "./Info";

const Parents = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          toggle
        </button>
        {show === true && <Info />}
      </div>
    </>
  );
};

export default Parents;
