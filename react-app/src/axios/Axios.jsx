import { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const url = "http://jsonplaceholder.typicode.com/todos/1";
      const response = await axios.get(url);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  // const [data, setData] = useState(null);

  // const onClick = () => {
  //   axios
  //     .get("http://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
  return (
    <>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </>
  );
};

export default Axios;
