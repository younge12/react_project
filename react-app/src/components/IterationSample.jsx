import { useRef, useState } from "react";
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "얼음" },
    { id: 2, text: "눈" },
    { id: 3, text: "바람" },
    { id: 4, text: "구름" },
  ]);
  const [usename, setUsename] = useState("");
  const nextId = useRef(5);

  const handleClick = () => {
    if (usename) {
      console.log(nextId.current);
      const nexttNames = [...names, { id: nextId.current, text: usename }];
      setNames(nexttNames);
      setUsename("");
      nextId.current++;
    }
  };
  const handleDelete = (deleteId) => {
    const nexttNames = names.filter((e) => {
      return e.id !== deleteId;
    });
    setNames(nexttNames);
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="usename"
          onChange={(e) => setUsename(e.target.value)}
          value={usename}
        />
        <button onClick={handleClick}>추가</button>
      </div>
      {/* <ul>
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul> */}
      <ul>
        {names.map(({ id, text }, index) => (
          <li key={id} onDoubleClick={() => handleDelete(id)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};
export default IterationSample;
